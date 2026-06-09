(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=e(o);fetch(o.href,a)}})();const j=[{category:"mice",name:"OP1 8k v2",sub:"Skates: Jade Dots"},{category:"mice",name:"HTS 4k",sub:"Skates: Corepads"},{category:"mice",name:"Hitscan Hyperlight",sub:"Skates: Jade Dots"},{category:"mice",name:"OP1 8k v1",sub:"Skates: Jade Dots"},{category:"mice",name:"Razer Viper V3 Pro",sub:"Skates: Jade Dots"},{category:"mice",name:"Razer Viper Mini",sub:"Skates: Jade Dots"},{category:"mice",name:"Starlight-12 Phantom",sub:"Skates: Stock"},{category:"mice",name:"Starlight Pro - TenZ",sub:"Skates: Stock"},{category:"mice",name:"Logitech GPro Superlight",sub:"Skates: Corepads"},{category:"mousepads",name:"Artisan Raiden",sub:"Softness: Mid"},{category:"mousepads",name:"Artisan Hayate Otsu",sub:"Softness: Soft"},{category:"mousepads",name:"Artisan Zero",sub:"Softness: Mid"},{category:"mousepads",name:"Artisan Zero",sub:"Softness: XSoft"},{category:"mousepads",name:"Yuki Aim - Hayai",sub:"No longer sold"},{category:"mousepads",name:"Yuki Aim - Monokuro",sub:"Glasspad"},{category:"mousepads",name:"Yuki Aim - MECHA",sub:"Glasspad"},{category:"other",name:"Pulsar PCMK 3 HE 60",sub:"Keyboard"},{category:"other",name:"Yuki Aim Polar 65",sub:"Keyboard"},{category:"other",name:"BenQ ZOWIE XL2546K 240hz",sub:"Monitor"},{category:"other",name:"ASUS VG248QE 144hz",sub:"Monitor"},{category:"other",name:"Sony XM4s",sub:"Headphones"}],Y=[{label:"Mouse",value:"OP1 8k v2",icon:"mouse"},{label:"Mousepad",value:"Artisan Raiden Mid",icon:"pad"},{label:"Keyboard",value:"PCMK 3 HE 60",icon:"keyboard"},{label:"Monitor",value:"ZOWIE XL2546K 240hz",icon:"monitor"},{label:"Headphones",value:"Sony XM4s",icon:"headphones"},{label:"Microphone",value:"Maono PD400X",icon:"mic"}];function Z(){return`
    <div class="mobile-bar">
      <div class="mobile-bar-inner">
        <div class="mobile-left">
          <img src="avatar.png" alt="dracoo" class="mobile-pfp" />
          <span class="mobile-name">dracoo</span>
        </div>
        <button class="mobile-menu-btn" aria-label="Open menu" id="menuBtn">
          <svg class="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
    </div>

    <div class="mobile-drawer" id="mobileDrawer">
      <div class="mobile-drawer-overlay" id="drawerOverlay"></div>
      <div class="mobile-drawer-panel">
        <div class="drawer-header">
          <img src="avatar.png" alt="dracoo" class="drawer-pfp" />
          <div>
            <div class="drawer-name">dracoo</div>
            <div class="drawer-handle">@dr7coo</div>
          </div>
          <button class="drawer-close" id="drawerClose" aria-label="Close menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
        <nav class="drawer-nav">
          <a href="#" data-page="home" class="active">${l.home}<span>Home</span></a>
          <a href="#" data-page="setup">${l.pc}<span>Setup</span></a>
          <a href="#" data-page="settings">${l.configs}<span>Settings</span></a>
          <a href="#" data-page="projects">${l.projects}<span>Projects</span></a>
        </nav>
        <div class="drawer-divider"></div>
        <div class="drawer-socials">
          ${E("https://x.com/dr7coo",l.x,"Twitter / X")}
          ${E("https://youtube.com/@dracoo6",l.youtube,"YouTube")}
          ${E("https://twitch.tv/dr7coo",l.twitch,"Twitch")}
          ${E("https://steamcommunity.com/id/dr7coo",l.steam,"Steam")}
        </div>
      </div>
    </div>

    <div class="site-layout">
      <div class="site-inner">
        <div class="sidebar-wrap">
          <aside class="sidebar">
            <div class="sidebar-fixed">
              <div class="sidebar-profile">
                <div class="sidebar-pfp"><img src="avatar.png" alt="dracoo" /></div>
                <div>
                  <div class="sidebar-name">dracoo</div>
                  <div class="sidebar-handle">@dr7coo</div>
                </div>
              </div>

              <div class="sidebar-socials">
                <a href="https://x.com/dr7coo" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X">${l.x}</a>
                <a href="https://youtube.com/@dracoo6" target="_blank" rel="noopener noreferrer" aria-label="YouTube">${l.youtube}</a>
                <a href="https://twitch.tv/dr7coo" target="_blank" rel="noopener noreferrer" aria-label="Twitch">${l.twitch}</a>
                <a href="https://steamcommunity.com/id/dr7coo" target="_blank" rel="noopener noreferrer" aria-label="Steam">${l.steam}</a>
              </div>

              <div class="sidebar-divider"></div>

              <button class="sidebar-search" type="button">
                ${l.search}
                <span>Search</span>
                <kbd>Ctrl K</kbd>
              </button>

              <nav class="sidebar-nav">
                <div class="nav-indicator"><span class="nav-dot"></span></div>
                <a href="#" data-page="home" class="active">${l.home}<span>Home</span></a>
                <a href="#" data-page="setup">${l.pc}<span>Setup</span></a>
                <a href="#" data-page="settings">${l.configs}<span>Settings</span></a>
                <a href="#" data-page="projects">${l.projects}<span>Projects</span></a>
              </nav>
            </div>
          </aside>
        </div>

        <main class="main-content" id="page-content"></main>
      </div>
      <footer class="site-footer">
        <span>© ${new Date().getFullYear()} dracoo</span>
      </footer>
    </div>
  `}const H={home:Q,setup:J,settings:G,projects:te},T={text:"will be streaming more often!"},W="hi! my name is ron, but online i go by dracoo obviously, currently 21 and i play game.",x={url:"https://x.com/dr7coo/status/1595122839862272002",caption:"since this game is finally becoming a trend",date:"Nov 22, 2022, 03:42 PM",video:"videos/tweet-1595122839862272002.mp4",poster:"videos/tweet-1595122839862272002-thumb.jpg"};function Q(){const s=Y.map(e=>`<div class="gear-item">
      <div class="gear-icon">${l[e.icon]}</div>
      <div>
        <div class="gear-label">${e.label}</div>
        <div class="gear-value">${e.value}</div>
      </div>
    </div>`).join("");return`
    ${T?`<div class="pin-banner">
        ${l.pin}
        <span class="pin-text">${T.text}</span>
      </div>`:""}

    <section class="content-section">
      <div class="section-header">
        <span class="section-label">About</span>
        <span class="section-line"></span>
      </div>
      <p class="bio-text">${W}</p>
    </section>

    <div class="home-gear">${s}</div>

    <div class="section-card tweet-card">
      <div class="tweet-header">
        <img src="avatar.png" alt="dracoo" class="tweet-avatar" />
        <div class="tweet-meta">
          <div class="tweet-author">
            <span class="tweet-name">dracoo</span>
            <span class="tweet-handle">@dr7coo</span>
          </div>
          <div class="tweet-date">${x.date}</div>
        </div>
        <a href="${x.url}" target="_blank" rel="noopener noreferrer" class="tweet-ext" aria-label="View on X">
          ${l.externalLink}
        </a>
      </div>

      <p class="tweet-caption">${x.caption}</p>

      <div class="tweet-video-wrap">
        <video
          controls
          playsinline
          preload="none"
          class="tweet-video"
          poster="${x.poster}"
        >
          <source src="${x.video}" type="video/mp4">
        </video>
      </div>
    </div>
  `}function J(){const s=["all","mice","mousepads","other"].map(t=>{const e=t==="all"?"All":t.charAt(0).toUpperCase()+t.slice(1);return`<div class="gear-filter-item">
        <button class="gear-filter${t==="all"?" active":""}" data-filter="${t}">
          <span class="filter-radio"></span><span>${e}</span>
        </button>
        ${t!=="other"?'<div class="filter-divider"></div>':""}
      </div>`}).join("");return`
    <section class="content-section">
      <div class="section-header">
        <span class="section-label">PC Specs</span>
        <span class="section-line"></span>
      </div>
      <div class="pc-card dim-group">
        ${b("CPU","Intel i9 14900KF")}
        ${b("GPU","RTX 3090TI")}
        ${b("RAM","32GB 3600mhz CL14")}
        ${b("Motherboard","MSI PRO Z790-P")}
        ${b("Cooler","DeepCool LS720")}
        ${b("Case","Lian Li LANCOOL III")}
        ${b("OS","EnvyOS v2",!0)}
      </div>
    </section>

    <section class="content-section">
      <div class="section-header">
        <span class="section-label">Peripherals</span>
        <span class="section-line"></span>
      </div>
      <div class="gear-page">
        <div class="gear-page-inner">
          <div class="gear-search-wrap">
            <input type="search" placeholder="Search peripherals" id="gearSearch" class="gear-search-input" />
            <div class="gear-search-right">
              <span class="gear-count" id="gearCount"></span>
              <button class="gear-search-clear" id="gearSearchClear" aria-label="Clear search">×</button>
            </div>
          </div>

          <div class="gear-scroll-wrap">
            <div class="gear-scroll-card">
              <div class="gear-scroll-inner" id="gearCatalogue"></div>
            </div>
          </div>
        </div>

        <nav class="gear-filters" id="gearFilters">${s}</nav>
      </div>
    </section>
  `}const B=[{name:"OBS",desc:"My current OBS config",sections:[{label:"Encoder Settings",rows:[{key:"Video Encoder",value:"NVIDIA NVENC H.264"},{key:"Rate Control",value:"Constant QP"},{key:"CQP",value:"17-20"},{key:"Keyframe Interval",value:"0s"},{key:"Preset",value:"P7: Slowest (Best Quality)"},{key:"Tuning",value:"Ultra Low Latency"},{key:"Multipass Mode",value:"Two Passes (Quarter Resolution)"},{key:"Profile",value:"high"},{key:"Look-ahead",value:"☐ (unchecked)"},{key:"Adaptive Quantization",value:"☐ (unchecked)"},{key:"B-Frames",value:"0"}]},{label:"Replay Buffer",rows:[{key:"Maximum Replay Time",value:"120s"},{key:"Maximum Memory",value:"5120 MB"}]},{label:"Video",rows:[{key:"Base (Canvas) Resolution",value:"1920x1080"},{key:"Output (Scaled) Resolution",value:"1920x1080"},{key:"Downscale Filter",value:"[Resolutions match, no downscaling required]"},{key:"Common FPS Values",value:"60"},{key:"Fractional FPS Value",value:"120-240/1"}]}]},{name:"osu!",desc:"My current osu! settings",sections:[{label:"Renderer",rows:[{key:"Frame Limiter",value:"Unlimited (gameplay)"},{key:"Show FPS Counter",value:"On"},{key:"Compatibility Mode",value:"Off"},{key:"Reduce Dropped Frames",value:"Off"},{key:"Detect Performance Issues",value:"Off"}]},{label:"Detail Settings",rows:[{key:"Snaking Sliders",value:"On"},{key:"Background Video",value:"Off"},{key:"Storyboards",value:"Off"},{key:"Combo Bursts",value:"Off"},{key:"Hit Lighting",value:"Off"},{key:"Shaders",value:"Off"},{key:"Softening Filter",value:"Off"}]},{label:"Main Menu",rows:[{key:"Snow",value:"Off"},{key:"Parallax",value:"Off"},{key:"Menu Tips",value:"Off"},{key:"Interface Voices",value:"Off"},{key:"osu! Music Theme",value:"Off"},{key:"Seasonal Backgrounds",value:"Sometimes"}]},{label:"General",rows:[{key:"Background Dim",value:"100%"},{key:"Don't Change Dim Level During Breaks",value:"Off"},{key:"Show Leaderboard During Gameplay",value:"Off"},{key:"Progress Display:",value:"Top-Right (Pie)"},{key:"Score Meter Type:",value:"Hit error"},{key:"Score Meter Size",value:"1.4x"},{key:"Always Show Key Overlay",value:"On"},{key:'Show Approach Circle on First "Hidden" Object',value:"On"}]},{label:"Volume",rows:[{key:"Master",value:"100%"},{key:"Music",value:"30-40%"},{key:"Effect",value:"100%"},{key:"Ignore Beatmap Hitsounds",value:"On"}]},{label:"Skins",type:"cards",cards:[{name:"vv_idke_trail",sub:"nomod skin",url:"https://skins.osuck.net/skins/866",img:"skins/vv_idke_trail.png"},{name:"dont steal my flow",sub:"universal skin",url:"https://skins.osuck.net/skins/4751",img:"skins/dont_steal_my_flow.png"},{name:"boop",sub:"edited",url:"https://drive.google.com/file/d/127PfUn8XiYy2mq8OI2cPvnmL6qJAkSFP/view",img:"skins/boop.png"},{name:"404 SkinNotFound v2",sub:"nomod/DT skin",url:"https://drive.google.com/file/d/1bTLs2-kxiEHDt5VQR8ZcfCFEeNoDTbVU/view",img:"skins/404_SkinNotFound_v2.png"},{name:"Rafis +HDDT",sub:"HDDT skin",url:"https://osuskins.net/skin/ekynLzX",img:"skins/Rafis_+HDDT.png"},{name:"aetrnaaberrateFujiwara v3",sub:"tapping skin",url:"https://skins.osuck.net/skins/1298",img:"skins/aetrnaaberrateFujiwara_v3.png"}]},{label:"Skin Settings",rows:[{key:"Ignore All Beatmap Skins",value:"On"},{key:"Always Use Skin Cursor",value:"On"},{key:"Cursor Size",value:".65-1"}]},{label:"Mouse",rows:[{key:"Sensitivity",value:"0.5x"},{key:"Raw Input",value:"On"},{key:"Map Absolute Raw Input to osu! Window",value:"Off"},{key:"Confine Mouse Cursor",value:"Only when fullscreen"},{key:"Disable Mouse Wheel in Play Mode",value:"On"},{key:"Disable Mouse Buttons in Play Mode",value:"On"},{key:"Cursor Ripples",value:"Off"}]},{label:"Integration",rows:[{key:"Discord Rich Presence",value:"Off"}]}]},{name:"Valorant",desc:"My current Valorant settings",sections:[{label:"Coming Soon",rows:[{key:"Status",value:"Settings coming soon"}]}]}];function G(){return`
    <section class="content-section" id="settingsRoot">
      <div class="section-header">
        <span class="section-label">Settings</span>
        <span class="section-line"></span>
      </div>
      <div class="config-list dim-group">${B.map((t,e)=>`
    <button class="config-btn" data-config="${e}">
      <div>
        <div class="config-btn-name">${t.name}</div>
        <div class="config-btn-desc">${t.desc}</div>
      </div>
      <svg class="config-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
    </button>`).join("")}</div>
    </section>
  `}function ee(s){const t=B[s];return t?`
    <button class="config-back" id="configBack">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      <span>Back</span>
    </button>
    ${t.sections.map(i=>{let o;return i.type==="cards"?o=`<div class="skin-wrap"><div class="skin-grid dim-group">${i.cards.map(n=>`
          <a href="${n.url}" target="_blank" rel="noopener noreferrer" class="skin-card">
            <div class="skin-card-preview${n.img?"":" skin-card-noimg"}">
              ${n.img?`<img src="${n.img}" alt="${n.name}" class="skin-card-img" loading="lazy" />`:'<span class="skin-card-placeholder">No Preview</span>'}
            </div>
            <div class="skin-card-info">
              <div class="skin-card-name">${n.name}</div>
              <div class="skin-card-sub">${n.sub}</div>
            </div>
          </a>`).join("")}</div></div>`:o=`<div class="config-card dim-group">${i.rows.map((n,u)=>`
          <div class="config-row${u<i.rows.length-1?" config-row-border":""}">
            <span class="config-key">${n.key}</span>
            <span class="config-val">${n.value}</span>
          </div>`).join("")}</div>`,`
      <div class="content-section">
        <div class="section-header">
          <span class="section-label">${i.label}</span>
          <span class="section-line"></span>
        </div>
        ${o}
      </div>`}).join("")}
  `:""}function te(){return`
    <section class="content-section">
      <div class="section-header">
        <span class="section-label">Projects</span>
        <span class="section-line"></span>
      </div>
      <div class="section-card">
        <div class="projects-grid">
          <a href="https://dracoo.click" target="_blank" rel="noopener noreferrer" class="project-card">
            <div class="project-name">dracoo.click</div>
            <div class="project-desc">my personal site.</div>
            <div class="project-tags"><span>vite</span><span>js</span><span>css</span></div>
          </a>
          <div class="project-card">
            <div class="project-name">endfield app</div>
            <div class="project-desc">passion project, coming soon.</div>
            <div class="project-tags"><span>vite</span><span>js</span><span>css</span></div>
          </div>
        </div>
      </div>
    </section>
  `}function se(){const s=document.getElementById("gearSearch"),t=document.getElementById("gearCount"),e=document.getElementById("gearSearchClear"),i=document.getElementById("gearCatalogue"),o=document.getElementById("gearFilters");if(!s||!i)return;let a="all";function n(){const u=s.value.toLowerCase().trim(),p=j.length,k=["mice","mousepads","other"],y={};let w=0;for(const r of j){const c=a==="all"||r.category===a,f=!u||r.name.toLowerCase().includes(u)||r.sub.toLowerCase().includes(u);c&&f&&(y[r.category]||(y[r.category]=[]),y[r.category].push(r),w++)}let S="";for(const r of k){const c=y[r];!c||c.length===0||(S+=`
        <div class="gear-cat-section">
          <div class="gear-cat-header">
            <span class="gear-cat-label">${r.toUpperCase()}</span>
            <span class="gear-cat-line"></span>
          </div>
          <div class="gear-cat-grid dim-group">
            ${c.map(f=>`
              <div class="gear-card">
                <div class="gear-card-name">${f.name}</div>
                <div class="gear-card-sub">${f.sub}</div>
              </div>
            `).join("")}
          </div>
        </div>`)}w===0&&(S='<div class="gear-empty">No results</div>'),i.innerHTML=S,t.textContent=`${w} / ${p}`}s.addEventListener("input",n),e.addEventListener("click",()=>{s.value="",n()}),o.addEventListener("click",u=>{const p=u.target.closest("[data-filter]");p&&(a=p.dataset.filter,o.querySelectorAll(".gear-filter").forEach(k=>k.classList.remove("active")),p.classList.add("active"),n())}),n()}let C=null;function ae(){if(!document.getElementById("settingsRoot"))return;const t=document.getElementById("page-content");C&&t.removeEventListener("click",C),C=e=>{const i=e.target.closest("[data-config]");if(i){const a=parseInt(i.dataset.config,10);t.innerHTML=ee(a),window.scrollTo(0,0);return}e.target.closest("#configBack")&&(t.innerHTML=G(),window.scrollTo(0,0))},t.addEventListener("click",C)}function b(s,t,e=!1){return`<div class="pc-row${e?"":" pc-row-border"}"><span class="pc-key">${s}</span><span class="pc-val">${t}</span></div>`}function E(s,t,e){return`<a href="${s}" target="_blank" rel="noopener noreferrer" class="drawer-social-link">${t}<span>${e}</span></a>`}const l={home:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',pc:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="8" x="5" y="2" rx="2"/><rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6 18h2"/><path d="M12 18h6"/></svg>',configs:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 2v2"/><path d="M12 22v-2"/><path d="m17 20.66-1-1.73"/><path d="M11 10.27 7 3.34"/><path d="m20.66 17-1.73-1"/><path d="m3.34 7 1.73 1"/><path d="M14 12h8"/><path d="M2 12h2"/><path d="m20.66 7-1.73 1"/><path d="m3.34 17 1.73-1"/><path d="m17 3.34-1 1.73"/><path d="m11 13.73-4 6.93"/></svg>',projects:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>',search:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',x:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',twitch:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0 1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/></svg>',youtube:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',steam:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0z"/></svg>',mouse:'<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="7"/><path d="M12 6v4"/></svg>',pad:'<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/></svg>',keyboard:'<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M7 16h10"/></svg>',monitor:'<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',headphones:'<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/></svg>',mic:'<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>',externalLink:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/></svg>',pin:'<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 17v5"/><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16h14v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"/></svg>'},oe=`
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`,ne=`
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
  // Burst every ~4-7 seconds, lasts ~0.15s
  float cycle = 5.0 + hash(floor(t * 0.15)) * 3.0;
  float phase = mod(t, cycle);
  float burst = smoothstep(0.0, 0.03, phase) * smoothstep(0.18, 0.05, phase);
  // Only trigger sometimes
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
    // Slow drift
    vec2 center = vec2(
      0.2 + hash(id * 3.3) * 0.6 + sin(t * 0.15 + id) * 0.08,
      0.2 + hash(id * 7.7) * 0.6 + cos(t * 0.12 + id * 2.0) * 0.06
    );

    vec2 d = uv - center;
    // Stretch and rotate
    float angle = hash(id * 5.5) * 6.28 + t * 0.05;
    float cs = cos(angle), sn = sin(angle);
    d = vec2(d.x * cs - d.y * sn, d.x * sn + d.y * cs);
    d.x *= 0.3 + hash(id * 2.1) * 0.4; // stretch horizontally

    // Noisy edge
    float dist = length(d);
    float noiseVal = fbm(d * 8.0 + id * 10.0 + t * 0.1);
    float smear = smoothstep(0.08 + noiseVal * 0.06, 0.02, dist);

    // Flicker visibility
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

// === Main ===
void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  float t = u_time;

  float mDist = length(uv - u_mouse);
  float mouseProx = smoothstep(0.45, 0.0, mDist);

  // --- Glitch burst ---
  float burst = burstIntensity(t);
  float chaos = burst + mouseProx * u_mouseSpeed * 1.5;
  chaos = clamp(chaos, 0.0, 1.0);

  // --- Glitch displacement ---
  float glitch = glitchBand(uv.y, t, chaos);
  float dispAmt = glitch * (0.025 + chaos * 0.06);

  // During burst: add heavy noise displacement
  float burstNoise = noise(uv * 20.0 + t * 10.0) * burst * 0.05;
  vec2 dispUV = uv + vec2(dispAmt + burstNoise, burstNoise * 0.5);

  // === Chromatic aberration ===
  float aberration = 0.003 + chaos * 0.012 + glitch * 0.008;
  vec2 rUV = dispUV + vec2(aberration, 0.0);
  vec2 gUV = dispUV;
  vec2 bUV = dispUV - vec2(aberration, 0.0);

  // --- Base ---
  float baseR = 0.035 + noise(rUV * 6.0 + t * 0.05) * 0.015;
  float baseG = 0.032 + noise(gUV * 6.0 + t * 0.05) * 0.013;
  float baseB = 0.032 + noise(bUV * 6.0 + t * 0.05) * 0.013;

  // --- Ink smears (dark) ---
  float inkR = inkSmear(rUV, t);
  float inkG = inkSmear(gUV, t);
  float inkB = inkSmear(bUV, t);

  // --- Rectangles (per channel for chromatic split) ---
  vec4 rectsR = rectLayer(rUV, t, 0.0, 0.05, 12)
              + rectLayer(rUV, t, 30.0, 0.08, 10) * 0.6
              + rectLayer(rUV, t, 60.0, 0.14, 8) * 0.35;
  vec4 rectsG = rectLayer(gUV, t, 0.0, 0.05, 12)
              + rectLayer(gUV, t, 30.0, 0.08, 10) * 0.6
              + rectLayer(gUV, t, 60.0, 0.14, 8) * 0.35;
  vec4 rectsB = rectLayer(bUV, t, 0.0, 0.05, 12)
              + rectLayer(bUV, t, 30.0, 0.08, 10) * 0.6
              + rectLayer(bUV, t, 60.0, 0.14, 8) * 0.35;

  // --- Red accent lines ---
  float linesR = accentLines(rUV, t);
  float linesG = accentLines(gUV, t);
  float linesB = accentLines(bUV, t);

  // --- Debris ---
  float debrisR = pixelDebris(rUV, t);
  float debrisG = pixelDebris(gUV, t);
  float debrisB = pixelDebris(bUV, t);
  float debrisIsRed = step(0.5, hash2(floor(dispUV * 150.0)));

  // === Compose per-channel ===
  float r = baseR;
  float g = baseG;
  float b = baseB;

  // Ink (dark smears)
  r -= inkR * 0.7;
  g -= inkG * 0.7;
  b -= inkB * 0.7;

  // Rects
  r += rectsR.r;
  g += rectsG.g;
  b += rectsB.b;

  // Accent lines (red-weighted)
  r += linesR * 0.8;
  g += linesG * 0.03;
  b += linesB * 0.03;

  // Debris
  r += mix(0.25, 0.7, debrisIsRed) * debrisR * 0.5;
  g += mix(0.25, 0.04, debrisIsRed) * debrisG * 0.5;
  b += mix(0.25, 0.04, debrisIsRed) * debrisB * 0.5;

  // Crosshair
  float ch = crosshair(uv, u_mouse);
  r += ch * 0.8;
  g += ch * 0.05;
  b += ch * 0.05;

  // --- Burst flash ---
  float flash = burst * 0.15;
  r += flash;
  g += flash * 0.6;
  b += flash * 0.6;

  // Brief invert during burst peak
  float invertAmt = burst * step(0.8, burst) * 0.4;
  r = mix(r, 1.0 - r, invertAmt);
  g = mix(g, 1.0 - g, invertAmt);
  b = mix(b, 1.0 - b, invertAmt);

  // --- Scan lines ---
  float scan = sin(gl_FragCoord.y * 2.5) * 0.5 + 0.5;
  float scanIntensity = 0.03 + burst * 0.06;
  r *= 1.0 - scan * scanIntensity;
  g *= 1.0 - scan * scanIntensity;
  b *= 1.0 - scan * scanIntensity;

  // --- Film grain ---
  float grain = (hash2(gl_FragCoord.xy + fract(t * 80.0)) - 0.5) * (0.04 + burst * 0.08);
  r += grain;
  g += grain;
  b += grain;

  // --- Vignette ---
  float vig = 1.0 - smoothstep(0.3, 1.5, length(uv - 0.5) * 1.5);
  float vigMul = 0.88 + 0.12 * vig;
  r *= vigMul;
  g *= vigMul;
  b *= vigMul;

  gl_FragColor = vec4(clamp(r, 0.0, 1.0), clamp(g, 0.0, 1.0), clamp(b, 0.0, 1.0), 1.0);
}
`;function ie(s){const t=document.getElementById(s);if(!t)return;const e=t.getContext("webgl",{alpha:!1,antialias:!1});if(!e){console.warn("WebGL not supported");return}function i(h,m){const g=e.createShader(h);return e.shaderSource(g,m),e.compileShader(g),e.getShaderParameter(g,e.COMPILE_STATUS)?g:(console.error("Shader error:",e.getShaderInfoLog(g)),e.deleteShader(g),null)}const o=i(e.VERTEX_SHADER,oe),a=i(e.FRAGMENT_SHADER,ne);if(!o||!a)return;const n=e.createProgram();if(e.attachShader(n,o),e.attachShader(n,a),e.linkProgram(n),!e.getProgramParameter(n,e.LINK_STATUS)){console.error("Link error:",e.getProgramInfoLog(n));return}e.useProgram(n);const u=e.getAttribLocation(n,"a_position"),p=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,p),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(u),e.vertexAttribPointer(u,2,e.FLOAT,!1,0,0);const k=e.getUniformLocation(n,"u_time"),y=e.getUniformLocation(n,"u_resolution"),w=e.getUniformLocation(n,"u_mouse"),S=e.getUniformLocation(n,"u_mouseSpeed");let r={x:.5,y:.5},c={x:.5,y:.5},f={x:.5,y:.5},I=0;const X=performance.now();function V(){const m=.6*Math.min(window.devicePixelRatio||1,1.5);t.width=window.innerWidth*m,t.height=window.innerHeight*m,e.viewport(0,0,t.width,t.height)}let $=null,A=!1;function P(){if(A){$=null;return}const h=(performance.now()-X)/1e3;c.x+=(r.x-c.x)*.06,c.y+=(r.y-c.y)*.06;const m=c.x-f.x,g=c.y-f.y;I+=(Math.min(Math.sqrt(m*m+g*g)*60,1)-I)*.08,f.x=c.x,f.y=c.y,e.uniform1f(k,h),e.uniform2f(y,t.width,t.height),e.uniform2f(w,c.x,1-c.y),e.uniform1f(S,I),e.drawArrays(e.TRIANGLES,0,6),$=requestAnimationFrame(P)}document.addEventListener("visibilitychange",()=>{document.hidden?A=!0:(A=!1,$||P())}),window.addEventListener("resize",V),document.addEventListener("mousemove",h=>{r.x=h.clientX/window.innerWidth,r.y=h.clientY/window.innerHeight}),document.addEventListener("mouseleave",()=>{r.x=.5,r.y=.5}),document.addEventListener("touchmove",h=>{h.touches.length&&(r.x=h.touches[0].clientX/window.innerWidth,r.y=h.touches[0].clientY/window.innerHeight)},{passive:!0}),document.addEventListener("touchend",()=>{r.x=.5,r.y=.5}),V(),P()}const N=["home","setup","settings","projects"];let q="home";function U(){const s=window.location.hash.replace("#/","").replace("#","");return N.includes(s)?s:"home"}function re(s){const t=s==="home"?"#/":`#/${s}`;window.location.hash!==t&&history.pushState(null,"",t)}function K(s=!0){const t=document.querySelector(".sidebar-nav"),e=t?.querySelector("a.active"),i=t?.querySelector(".nav-indicator");!t||!e||!i||(s||(i.style.transition="none"),i.style.transform=`translateY(${e.offsetTop}px)`,i.style.height=`${e.offsetHeight}px`,s||(i.offsetHeight,i.style.transition=""))}function M(s){N.includes(s)||(s="home"),q=s,re(s);const t=document.getElementById("page-content");if(!t)return;const e=H[s]||H.home;t.innerHTML=e(),t.classList.remove("glitch-in"),t.offsetHeight,t.classList.add("glitch-in"),document.querySelectorAll("[data-page]").forEach(i=>{i.classList.toggle("active",i.dataset.page===s)}),K(!0),window.scrollTo(0,0),s==="setup"&&se(),s==="settings"&&ae()}function le(){const s=[],t=[{name:"Home",page:"home"},{name:"Setup",page:"setup"},{name:"Settings",page:"settings"},{name:"Projects",page:"projects"}];for(const e of t)s.push({label:e.name,tag:"Page",action:()=>M(e.page)});for(let e=0;e<B.length;e++){const i=B[e];s.push({label:`${i.name} Config`,tag:"Setting",action:()=>{M("settings"),requestAnimationFrame(()=>{const o=document.querySelector(`[data-config="${e}"]`);o&&o.click()})}})}return s}let D=[],v=[],d=0;function _(){const s=document.getElementById("searchModal"),t=document.getElementById("searchInput");s&&(s.classList.add("open"),t.value="",d=0,R(""),requestAnimationFrame(()=>t.focus()))}function L(){const s=document.getElementById("searchModal");s&&s.classList.remove("open")}function O(){return document.getElementById("searchModal")?.classList.contains("open")}function R(s){const t=document.getElementById("searchResults"),e=document.getElementById("searchCount");if(!t)return;const i=s.toLowerCase().trim();if(v=i?D.filter(o=>o.label.toLowerCase().includes(i)):[...D],e.textContent=v.length,v.length===0){t.innerHTML='<div class="search-no-results">No results found</div>';return}d>=v.length&&(d=0),t.innerHTML=v.map((o,a)=>`<div class="search-result${a===d?" active":""}" data-search-idx="${a}">
          <span class="search-result-name">${o.label}</span>
          <span class="search-result-tag">${o.tag}</span>
        </div>`).join("")}function F(s){if(s<0||s>=v.length)return;const t=v[s];L(),t.action()}function ce(){D=le(),document.getElementById("searchModal");const s=document.getElementById("searchInput"),t=document.getElementById("searchOverlay"),e=document.getElementById("searchEsc"),i=document.getElementById("searchInputClear"),o=document.getElementById("searchResults");document.addEventListener("click",a=>{a.target.closest(".sidebar-search")&&(a.preventDefault(),_())}),t?.addEventListener("click",L),e?.addEventListener("click",L),i?.addEventListener("click",()=>{s.value="",d=0,R(""),s.focus()}),s?.addEventListener("input",()=>{d=0,R(s.value)}),o?.addEventListener("click",a=>{const n=a.target.closest("[data-search-idx]");n&&F(parseInt(n.dataset.searchIdx,10))}),o?.addEventListener("mousemove",a=>{const n=a.target.closest("[data-search-idx]");n&&(d=parseInt(n.dataset.searchIdx,10),o.querySelectorAll(".search-result").forEach((u,p)=>{u.classList.toggle("active",p===d)}))}),document.addEventListener("keydown",a=>{if((a.ctrlKey||a.metaKey)&&a.key==="k"){a.preventDefault(),O()?L():_();return}if(O()){if(a.key==="Escape"){a.preventDefault(),L();return}if(a.key==="ArrowDown"){a.preventDefault(),d=(d+1)%v.length,z();return}if(a.key==="ArrowUp"){a.preventDefault(),d=(d-1+v.length)%v.length,z();return}a.key==="Enter"&&(a.preventDefault(),F(d))}})}function z(){const s=document.getElementById("searchResults");if(!s)return;s.querySelectorAll(".search-result").forEach((e,i)=>{e.classList.toggle("active",i===d)});const t=s.querySelector(".search-result.active");t&&t.scrollIntoView({block:"nearest"})}window.addEventListener("DOMContentLoaded",()=>{document.getElementById("app").innerHTML=Z(),ie("particles"),document.addEventListener("click",t=>{const e=t.target.closest("[data-page]");e&&(t.preventDefault(),M(e.dataset.page),document.getElementById("mobileDrawer")?.classList.remove("open"))}),document.getElementById("menuBtn")?.addEventListener("click",()=>{document.getElementById("mobileDrawer")?.classList.add("open")}),document.getElementById("drawerOverlay")?.addEventListener("click",()=>{document.getElementById("mobileDrawer")?.classList.remove("open")}),document.getElementById("drawerClose")?.addEventListener("click",()=>{document.getElementById("mobileDrawer")?.classList.remove("open")}),document.addEventListener("keydown",t=>{t.key==="Escape"&&!O()&&document.getElementById("mobileDrawer")?.classList.remove("open")}),ce(),M(U()),K(!1),window.addEventListener("popstate",()=>{const t=U();t!==q&&M(t)});const s=document.getElementById("loadGlitch");s&&s.addEventListener("animationend",()=>s.remove())});