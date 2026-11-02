import './style.css'

const arrow = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M10 5l5 5-5 5"/></svg>'
const icon = (name: string) => {
  const paths: Record<string, string> = {
    spark: '<path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z"/><path d="m5 16 .8 2L8 19l-2.2.8L5 22l-.8-2.2L2 19l2.2-1L5 16Z"/>',
    bolt: '<path d="m13 2-3 8h7l-9 12 2-9H4l9-11Z"/>',
    shield: '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/>',
    layers: '<path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/>',
  }
  return `<svg class="line-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="topbar">
    <a class="wordmark" href="#top" aria-label="Santhosh Kumar, home">SK<span>.</span></a>
    <nav aria-label="Main navigation">
      <a href="#work">Selected work</a><a href="#about">About</a><a href="#experience">Experience</a>
    </nav>
    <a class="top-cta" href="mailto:drsanthosh1997@gmail.com">Let’s talk ${arrow}</a>
  </header>

  <main id="top">
    <section class="hero page-wrap" aria-labelledby="hero-title">
      <div class="hero-copy">
        <div class="eyebrow"><span class="eyebrow-dot"></span> FULL STACK DEVELOPER <span class="eyebrow-divider">/</span> INDIA</div>
        <h1 id="hero-title">I build software<br>that <span class="serif-accent">moves</span> people.</h1>
        <p class="hero-intro">From AI products to connected devices, I turn complex systems into reliable experiences that work at real-world scale.</p>
        <div class="hero-actions"><a class="button button-dark" href="#work">Explore my work ${arrow}</a><a class="text-link" href="/Santhosh_Kumar_R_Resume.pdf" download>Download résumé <span aria-hidden="true">↗</span></a></div>
        <div class="hero-note"><span class="note-rule"></span><span>3+ years building and shipping<br>production software</span></div>
      </div>
      <div class="hero-art" aria-label="Abstract illustration of interconnected products and systems">
        <div class="art-grid"></div><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div>
        <div class="orbit-node node-a"></div><div class="orbit-node node-b"></div><div class="orbit-node node-c"></div>
        <div class="core-card"><span class="core-mark">S<span>.</span></span><span class="core-caption">SYSTEMS<br>THINKING</span></div>
        <div class="art-label label-top">THOUGHTFUL BY DESIGN <span>✳</span></div>
        <div class="art-label label-bottom"><span class="live-dot"></span> BUILT FOR THE REAL WORLD</div>
        <span class="art-index">01 / 04</span>
      </div>
      <a class="scroll-cue" href="#proof"><span class="scroll-line"></span> SCROLL TO EXPLORE</a>
    </section>

    <section class="proof-band" id="proof" aria-label="Products and reach">
      <div class="proof-inner">
        <div class="proof-label"><span class="asterisk">✳</span><span>PRODUCTS<br>IN THE WORLD</span></div>
        <div class="metric"><strong>16.1<span>k</span></strong><span>Hana users</span></div>
        <div class="metric"><strong>11.6<span>k</span></strong><span>Organizations</span></div>
        <div class="metric"><strong>260<span>k</span></strong><span>Juice users</span></div>
        <div class="metric"><strong>80<span>+</span></strong><span>Cities reached</span></div>
      </div>
    </section>

    <section class="work-section section-wrap" id="work">
      <div class="section-heading"><div><div class="eyebrow section-kicker">01 — SELECTED WORK</div><h2>Real products.<br><span class="serif-accent">Real-world scale.</span></h2></div><p class="section-aside">The best engineering is measured by what it makes possible for people.</p></div>
      <article class="project-card hana-card">
        <div class="project-visual hana-visual"><div class="visual-topline"><span>HANABI TECHNOLOGIES</span><span>01 / AI PLATFORM</span></div><div class="chat-window"><div class="chat-heading"><span class="chat-orb">h</span><span>Hana <small>AI assistant</small></span><span class="chat-menu">···</span></div><div class="chat-date">TODAY, 10:42 AM</div><div class="chat-message user-message">How can I find the right answer across all our company docs?</div><div class="chat-message ai-message"><span class="ai-star">✳</span><span>Search across your connected knowledge with answers grounded in your own sources.</span></div><div class="chat-input">Ask Hana anything <span>↑</span></div></div><div class="visual-footnote">INTELLIGENCE, CONNECTED TO YOUR KNOWLEDGE.</div></div>
        <div class="project-info"><div class="project-number">01 <span>—</span> AI &amp; KNOWLEDGE</div><h3>Hana<span class="title-period">.</span></h3><p class="project-lede">A conversational AI platform built to make organizational knowledge easier to find and use.</p><div class="project-stat"><strong>16.1k</strong><span>users across<br>11.6k+ organizations</span></div><p class="project-detail">Architected core system design and a retrieval-augmented generation pipeline using MongoDB vector search. Led the technical workstream for Google CASA Tier 2 security certification.</p><div class="tags"><span>RAG</span><span>MongoDB Vector Search</span><span>OAuth 2.0</span><span>CASA Tier 2</span></div></div>
      </article>
      <article class="project-card juice-card">
        <div class="project-visual juice-visual"><div class="visual-topline"><span>HANABI TECHNOLOGIES</span><span>02 / SHARED MOBILITY</span></div><div class="city-map" aria-hidden="true"><svg viewBox="0 0 560 350" preserveAspectRatio="xMidYMid slice"><path d="M-10 64 98 98l73-47 95 48 92-68 57 54 157-19M-12 150l134-21 67 66 86-34 91 47 71-82 145 17M-4 269l90-44 94 38 68-61 93 67 99-40 132 47M57-5l31 117-40 78 63 171M186-10l-15 82 40 105-15 84 58 99M327-3l-15 102 44 65-14 99 52 78M458-10l-16 81 29 81-18 78 55 102"/></svg><div class="map-pin pin-one"><span>JUICE</span></div><div class="map-pin pin-two"><span>JUICE</span></div><div class="map-pin pin-three"><span>JUICE</span></div><div class="map-center"><span>80+</span><small>CITIES</small></div></div><div class="visual-footnote">POWER, WHENEVER THE CITY CALLS.</div></div>
        <div class="project-info"><div class="project-number">02 <span>—</span> CONNECTED MOBILITY</div><h3>Juice<span class="title-period">.</span></h3><p class="project-lede">A power-bank sharing network bringing convenient charging into the everyday city.</p><div class="project-stat"><strong>260k</strong><span>users across<br>80+ cities</span></div><p class="project-detail">Architected the platform system design supporting 600+ stations and 400k+ hours rented. Implemented MQTT-based communication for real-time exchange with IoT devices.</p><div class="tags"><span>MQTT</span><span>IoT</span><span>Node.js</span><span>Cloud systems</span></div></div>
      </article>
      <article class="project-card retrieval-card">
        <div class="retrieval-visual"><span class="retrieval-orbit r1"></span><span class="retrieval-orbit r2"></span><span class="retrieval-core">⌕</span><span class="retrieval-dot d1"></span><span class="retrieval-dot d2"></span><span class="retrieval-dot d3"></span><span class="retrieval-result">DIRECT SEARCH<br><strong>−50% retrieval time</strong></span></div>
        <div class="retrieval-copy"><div class="project-number">03 <span>—</span> PERFORMANCE</div><h3>Less searching.<br><span class="serif-accent">Faster answers.</span></h3><p>Reworked legal citation retrieval from an iterative, multi-pass process into a single direct search—cutting retrieval time by approximately 50%.</p><div class="tags"><span>Search systems</span><span>Optimization</span><span>Legal citations</span></div></div>
      </article>
      <div class="work-footnote"><span>PRODUCT WORK AT HANABI TECHNOLOGIES</span><span>JUN 2023 — PRESENT</span></div>
    </section>

    <section class="principles-section">
      <div class="section-wrap principles-inner"><div class="principles-title"><div class="eyebrow section-kicker">02 — HOW I WORK</div><h2>Good systems<br>feel <span class="serif-accent">simple.</span></h2><p>Behind a clear experience is thoughtful engineering: secure foundations, dependable integrations, and decisions made for what comes next.</p></div><div class="principle-list"><div class="principle">${icon('spark')}<div><h3>Make complexity useful</h3><p>AI, search, and connected devices should solve real problems with clarity.</p></div><span class="principle-index">01</span></div><div class="principle">${icon('shield')}<div><h3>Build trust into the system</h3><p>Multi-tenant access, OAuth, RBAC, and security from the ground up.</p></div><span class="principle-index">02</span></div><div class="principle">${icon('bolt')}<div><h3>Ship the whole experience</h3><p>From APIs and billing to offline desktop software and responsive interfaces.</p></div><span class="principle-index">03</span></div><div class="principle">${icon('layers')}<div><h3>Design for real conditions</h3><p>Production systems need to work across devices, networks, and scale.</p></div><span class="principle-index">04</span></div></div></div>
    </section>

    <section class="about-section section-wrap" id="about"><div class="eyebrow section-kicker">03 — THE TOOLKIT</div><div class="about-layout"><div><h2>Curious by nature.<br><span class="serif-accent">Full stack by craft.</span></h2><p class="about-intro">I’m Santhosh, a full stack software developer based in Rasipuram, India. I enjoy working across the stack—understanding the problem, shaping the system, and delivering the details that make it useful.</p><a class="text-link" href="https://www.linkedin.com/in/santhosh-kumar-r-497233207" target="_blank" rel="noreferrer">More about my journey <span aria-hidden="true">↗</span></a></div><div class="skills-grid"><div class="skill-group"><span>01 / BUILD</span><p>JavaScript · TypeScript · Node.js · NestJS · Express · React · Next.js · React Native</p></div><div class="skill-group"><span>02 / DESIGN SYSTEMS</span><p>REST APIs · OAuth 2.0 · RBAC · Multi-tenant architecture · Webhooks</p></div><div class="skill-group"><span>03 / DATA &amp; AI</span><p>MongoDB · Vector search · RAG · LangChain · Prompt engineering</p></div><div class="skill-group"><span>04 / CONNECT</span><p>AWS · GCP · Azure · Stripe · PayPal · LemonSqueezy · MQTT · Electron</p></div></div></div></section>

    <section class="experience-section" id="experience"><div class="section-wrap"><div class="eyebrow section-kicker">04 — EXPERIENCE &amp; EDUCATION</div><div class="timeline"><article class="timeline-row"><div class="timeline-date">JUN 2023 — PRESENT</div><div class="timeline-main"><h3>Full Stack Developer <span>at Hanabi Technologies</span></h3><p>Product architecture, AI and vector search, payments, security, IoT integrations, and offline desktop software.</p></div><span class="timeline-type">FULL STACK</span></article><article class="timeline-row"><div class="timeline-date">DEC 2022 — APR 2023</div><div class="timeline-main"><h3>Software Engineer — Frontend <span>at Youth India e-School</span></h3><p>Assessment and learning systems, responsive web experiences, and a cross-platform HRMS dashboard.</p></div><span class="timeline-type">FRONTEND</span></article><article class="timeline-row education-row"><div class="timeline-date">JUN 2015 — APR 2019</div><div class="timeline-main"><h3>B.E., Mechanical Engineering <span>at K.S.R Institute for Engineering and Technology</span></h3></div><span class="timeline-type">EDUCATION</span></article></div></div></section>

    <section class="contact-section"><div class="contact-inner section-wrap"><div class="eyebrow">NEXT CHAPTER</div><h2>Let’s make something<br><span class="serif-accent">matter.</span></h2><div class="contact-bottom"><p>Open to full stack and product engineering opportunities.</p><a class="button button-light" href="mailto:drsanthosh1997@gmail.com">Get in touch ${arrow}</a></div><a class="contact-email" href="mailto:drsanthosh1997@gmail.com">drsanthosh1997@gmail.com</a></div><div class="contact-stamp" aria-hidden="true">S<span>.</span></div></section>
  </main>
  <footer class="footer"><a class="wordmark footer-mark" href="#top">SK<span>.</span></a><span>Designed &amp; built with care · 2026</span><div><a href="https://github.com/SantoshKumarRavi" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/santhosh-kumar-r-497233207" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></footer>
`
