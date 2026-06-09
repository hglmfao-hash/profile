// VERTEX SHADER SOURCE
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}

// FRAGMENT SHADER SOURCE
precision highp float;

uniform float u_time;
uniform vec2  u_resolution;
uniform vec2  u_mouse;
uniform float u_mouseSpeed;

// --- Hash ---
float hash(float n) { return fract(sin(n) * 43758.5453123); }
float hash2(vec2 p) {
  p = fract(p * vec2(443.897, 397.297));
  p += dot(p, p.yx + 19.19);
  return fract(p.x * p.y);
}
vec2 hash22(vec2 p) {
  return vec2(hash2(p), hash2(p + 47.53));
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash2(i);
  float b = hash2(i + vec2(1.0, 0.0));
  float c = hash2(i + vec2(0.0, 1.0));
  float d = hash2(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 3; i++) {
    v += a * noise(p);
    p *= 2.1;
    a *= 0.5;
  }
  return v;
}

// --- Rectangle SDF ---
float rectSDF(vec2 uv, vec2 center, vec2 halfSize) {
  vec2 d = abs(uv - center) - halfSize;
  return max(d.x, d.y);
}

// --- Glitch burst (periodic intense flash) ---
float burstIntensity(float t) {
  float cycle = 5.0 + hash(floor(t * 0.15)) * 3.0;
  float phase = mod(t, cycle);
  float burst = smoothstep(0.0, 0.03, phase) * smoothstep(0.18, 0.05, phase);
  burst *= step(0.6, hash(floor(t / cycle) * 7.7));
  return burst;
}

// --- Glitch displacement ---
float glitchBand(float y, float t, float intensity) {
  float band = 0.0;
  for (int i = 0; i < 8; i++) {
    float id = float(i);
    float speed = 3.0 + hash(id * 13.7) * 6.0;
    float pos = hash(id * 7.3 + floor(t * speed) * 0.1);
    float width = 0.004 + hash(id * 3.1) * 0.025;
    float thresh = mix(0.88, 0.5, intensity);
    float strength = step(thresh, hash(floor(t * speed) * 0.3 + id));
    band += smoothstep(width, 0.0, abs(y - pos)) * strength;
  }
  return band;
}

// --- Floating rectangles ---
vec4 rectLayer(vec2 uv, float t, float seed, float scale, int count) {
  vec3 col = vec3(0.0);
  float totalAlpha = 0.0;

  for (int i = 0; i < 12; i++) {
    if (i >= count) break;
    float id = float(i) + seed;

    float jumpSpeed = 0.4 + hash(id * 1.1) * 0.8;
    float jumpT = floor(t * jumpSpeed);
    vec2 basePos = hash22(vec2(id, jumpT + seed));
    vec2 drift = vec2(
      sin(t * 0.5 + id * 2.0) * 0.06,
      cos(t * 0.35 + id * 1.7) * 0.05
    );
    vec2 pos = basePos + drift;

    float w = 0.015 + hash(id * 5.6) * scale;
    float h = 0.01 + hash(id * 8.9) * scale * 0.7;

    float flickerSpeed = 1.5 + hash(id * 2.2) * 4.0;
    float visible = step(0.4, hash(floor(t * flickerSpeed) + id));

    float d = rectSDF(uv, pos, vec2(w, h));

    float colorSeed = hash(id * 4.4);
    vec3 rectColor;
    if (colorSeed < 0.5) {
      rectColor = vec3(0.9, 0.03, 0.03);
    } else if (colorSeed < 0.7) {
      rectColor = vec3(0.65);
    } else if (colorSeed < 0.85) {
      rectColor = vec3(0.12);
    } else {
      rectColor = vec3(0.9);
    }

    float isOutline = step(0.65, hash(id * 6.7));
    float border = 0.0025;
    float outline = step(-border, d) * step(d, 0.0) * isOutline;
    float inner = step(d, -border) * (1.0 - isOutline) + step(d, 0.0) * (1.0 - isOutline);

    float alpha = (inner + outline) * visible;
    alpha *= 0.25 + hash(id * 11.1) * 0.55;

    col += rectColor * alpha;
    totalAlpha += alpha;
  }
  return vec4(col, totalAlpha);
}

// --- Ink splatter / brush strokes ---
float inkSmear(vec2 uv, float t) {
  float ink = 0.0;
  for (int i = 0; i < 4; i++) {
    float id = float(i);
    vec2 center = vec2(
      0.2 + hash(id * 3.3) * 0.6 + sin(t * 0.15 + id) * 0.08,
      0.2 + hash(id * 7.7) * 0.6 + cos(t * 0.12 + id * 2.0) * 0.06
    );

    vec2 d = uv - center;
    float angle = hash(id * 5.5) * 6.28 + t * 0.05;
    float cs = cos(angle), sn = sin(angle);
    d = vec2(d.x * cs - d.y * sn, d.x * sn + d.y * cs);
    d.x *= 0.3 + hash(id * 2.1) * 0.4;

    float dist = length(d);
    float noiseVal = fbm(d * 8.0 + id * 10.0 + t * 0.1);
    float smear = smoothstep(0.08 + noiseVal * 0.06, 0.02, dist);

    float vis = smoothstep(0.0, 0.5, sin(t * (0.2 + hash(id * 9.0) * 0.3) + id * 3.0));

    ink += smear * vis * (0.15 + hash(id * 4.0) * 0.15);
  }
  return ink;
}

// --- Thin accent lines ---
float accentLines(vec2 uv, float t) {
  float lines = 0.0;
  for (int i = 0; i < 4; i++) {
    float id = float(i);
    float y = hash(id * 23.4 + floor(t * (0.6 + hash(id * 3.0))));
    float visible = step(0.6, hash(floor(t * 1.8) + id * 7.0));
    lines += smoothstep(0.0015, 0.0, abs(uv.y - y)) * visible * 0.5;
  }
  for (int i = 0; i < 3; i++) {
    float id = float(i) + 10.0;
    float x = hash(id * 17.8 + floor(t * 0.8));
    float visible = step(0.65, hash(floor(t * 1.4) + id * 5.0));
    lines += smoothstep(0.001, 0.0, abs(uv.x - x)) * visible * 0.4;
  }
  return lines;
}

// --- Pixel debris ---
float pixelDebris(vec2 uv, float t) {
  float debris = 0.0;
  for (int i = 0; i < 25; i++) {
    float id = float(i);
    float flickerSpeed = 4.0 + hash(id * 2.2) * 8.0;
    float visible = step(0.7, hash(floor(t * flickerSpeed) + id));
    vec2 pos = hash22(vec2(id + 200.0, floor(t * (1.0 + hash(id * 1.5) * 1.5))));
    float size = 0.002 + hash(id * 9.1) * 0.007;
    float d = rectSDF(uv, pos, vec2(size));
    debris += step(d, 0.0) * visible;
  }
  return debris;
}

// --- Crosshair ---
float crosshair(vec2 uv, vec2 pos) {
  float size = 0.01;
  float thick = 0.001;
  float h = smoothstep(thick, 0.0, abs(uv.y - pos.y)) * step(abs(uv.x - pos.x), size);
  float v = smoothstep(thick, 0.0, abs(uv.x - pos.x)) * step(abs(uv.y - pos.y), size);
  return (h + v) * 0.5;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  float t = u_time;

  float mDist = length(uv - u_mouse);
  float mouseProx = smoothstep(0.45, 0.0, mDist);

  float burst = burstIntensity(t);
  float chaos = burst + mouseProx * u_mouseSpeed * 1.5;
  chaos = clamp(chaos, 0.0, 1.0);

  float glitch = glitchBand(uv.y, t, chaos);
  float dispAmt = glitch * (0.025 + chaos * 0.06);

  float burstNoise = noise(uv * 20.0 + t * 10.0) * burst * 0.05;
  vec2 dispUV = uv + vec2(dispAmt + burstNoise, burstNoise * 0.5);

  float aberration = 0.003 + chaos * 0.012 + glitch * 0.008;
  vec2 rUV = dispUV + vec2(aberration, 0.0);
  vec2 gUV = dispUV;
  vec2 bUV = dispUV - vec2(aberration, 0.0);

  float baseR = 0.035 + noise(rUV * 6.0 + t * 0.05) * 0.015;
  float baseG = 0.032 + noise(gUV * 6.0 + t * 0.05) * 0.013;
  float baseB = 0.032 + noise(bUV * 6.0 + t * 0.05) * 0.013;

  float inkR = inkSmear(rUV, t);
  float inkG = inkSmear(gUV, t);
  float inkB = inkSmear(bUV, t);

  vec4 rectsR = rectLayer(rUV, t, 0.0, 0.05, 12)
              + rectLayer(rUV, t, 30.0, 0.08, 10) * 0.6
              + rectLayer(rUV, t, 60.0, 0.14, 8) * 0.35;
  vec4 rectsG = rectLayer(gUV, t, 0.0, 0.05, 12)
              + rectLayer(gUV, t, 30.0, 0.08, 10) * 0.6
              + rectLayer(gUV, t, 60.0, 0.14, 8) * 0.35;
  vec4 rectsB = rectLayer(bUV, t, 0.0, 0.05, 12)
              + rectLayer(bUV, t, 30.0, 0.08, 10) * 0.6
              + rectLayer(bUV, t, 60.0, 0.14, 8) * 0.35;

  float linesR = accentLines(rUV, t);
  float linesG = accentLines(gUV, t);
  float linesB = accentLines(bUV, t);

  float debrisR = pixelDebris(rUV, t);
  float debrisG = pixelDebris(gUV, t);
  float debrisB = pixelDebris(bUV, t);
  float debrisIsRed = step(0.5, hash2(floor(dispUV * 150.0)));

  float r = baseR;
  float g = baseG;
  float b = baseB;

  r -= inkR * 0.7;
  g -= inkG * 0.7;
  b -= inkB * 0.7;

  r += rectsR.r;
  g += rectsG.g;
  b += rectsB.b;

  r += linesR * 0.8;
  g += linesG * 0.03;
  b += linesB * 0.03;

  r += mix(0.25, 0.7, debrisIsRed) * debrisR * 0.5;
  g += mix(0.25, 0.04, debrisIsRed) * debrisG * 0.5;
  b += mix(0.25, 0.04, debrisIsRed) * debrisB * 0.5;

  float ch = crosshair(uv, u_mouse);
  r += ch * 0.8;
  g += ch * 0.05;
  b += ch * 0.05;

  float flash = burst * 0.15;
  r += flash;
  g += flash * 0.6;
  b += flash * 0.6;

  float invertAmt = burst * step(0.8, burst) * 0.4;
  r = mix(r, 1.0 - r, invertAmt);
  g = mix(g, 1.0 - g, invertAmt);
  b = mix(b, 1.0 - b, invertAmt);

  float scan = sin(gl_FragCoord.y * 2.5) * 0.5 + 0.5;
  float scanIntensity = 0.03 + burst * 0.06;
  r *= 1.0 - scan * scanIntensity;
  g *= 1.0 - scan * scanIntensity;
  b *= 1.0 - scan * scanIntensity;

  float grain = (hash2(gl_FragCoord.xy + fract(t * 80.0)) - 0.5) * (0.04 + burst * 0.08);
  r += grain;
  g += grain;
  b += grain;

  float vig = 1.0 - smoothstep(0.3, 1.5, length(uv - 0.5) * 1.5);
  float vigMul = 0.88 + 0.12 * vig;
  r *= vigMul;
  g *= vigMul;
  b *= vigMul;

  gl_FragColor = vec4(clamp(r, 0.0, 1.0), clamp(g, 0.0, 1.0), clamp(b, 0.0, 1.0), 1.0);
}