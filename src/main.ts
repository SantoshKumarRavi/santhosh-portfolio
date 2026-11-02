import './style.css'

const arrow = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 10h13M10 4l6 6-6 6"/></svg>'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="topbar">
    <a class="wordmark" href="#top" aria-label="Santhosh Kumar, home">SK<span>/</span></a>
    <nav aria-label="Main navigation"><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#skills">Skills</a></nav>
    <div class="header-contact"><div class="social-links" aria-label="Social profiles"><a class="header-social" href="https://github.com/SantoshKumarRavi" target="_blank" rel="noreferrer" aria-label="GitHub (opens in a new tab)"><span class="social-short" aria-hidden="true">GH</span><span class="social-full">GitHub ↗</span></a><a class="header-social" href="https://www.linkedin.com/in/santhosh-kumar-r-497233207" target="_blank" rel="noreferrer" aria-label="LinkedIn (opens in a new tab)"><span class="social-short social-linkedin" aria-hidden="true">in</span><span class="social-full">LinkedIn ↗</span></a></div><a class="phone-link" href="tel:+918428497261" aria-label="Call Santhosh at +91 84284 97261">+91 84284 97261</a><a class="email-link" href="mailto:drsanthosh1997@gmail.com">Email ${arrow}</a></div>
  </header>
  <div class="availability"><span class="availability-dot"></span><strong>OPEN TO WORK</strong><span class="availability-copy">LOOKING FOR SENIOR SOFTWARE DEVELOPER ROLES</span><span class="availability-place">RASIPURAM, INDIA</span></div>

  <main id="main">
    <section class="hero" id="top" aria-labelledby="hero-title">
      <div class="hero-grid page-wrap">
        <div class="hero-copy">
          <div class="eyebrow"><span>SOFTWARE ENGINEERING</span><span class="eyebrow-slash">/</span><span>3+ YEARS IN PRODUCTION</span></div>
          <h1 id="hero-title">I make complex<br>software <em>work.</em></h1>
          <p class="hero-intro">Senior Software Developer building AI-powered systems, secure platforms, and connected-device products. I take work from the system design through the details people rely on.</p>
          <div class="hero-actions"><a class="button button-primary" href="#projects">See my projects ${arrow}</a><a class="resume-link" href="/Santhosh_Kumar_R_Resume.pdf" download>Download resume <span aria-hidden="true">↗</span></a></div>
          <div class="hero-contact"><span>DIRECT CONTACT</span><a href="tel:+918428497261">+91 84284 97261</a><span class="contact-divider">/</span><a href="mailto:drsanthosh1997@gmail.com">drsanthosh1997@gmail.com</a></div>
        </div>
        <div class="skill-map" role="group" aria-label="Core technologies across the engineering stack">
          <div class="map-topline"><span>FIELD MAP / 01</span><span>25 CORE SKILLS</span></div>
          <svg class="map-lines" viewBox="0 0 600 430" preserveAspectRatio="none" aria-hidden="true"><path d="M55 90 170 65 300 98 435 70 550 110M65 200 190 175 315 210 445 180 545 220M55 315 180 290 310 325 440 295 550 335M55 90l10 110-10 115M170 65l20 110-10 115M300 98l15 112-5 115M435 70l10 110-5 115M550 110l-5 110 5 115"/><circle cx="55" cy="90" r="3"/><circle cx="300" cy="98" r="3"/><circle cx="550" cy="110" r="3"/><circle cx="190" cy="175" r="3"/><circle cx="445" cy="180" r="3"/><circle cx="55" cy="315" r="3"/><circle cx="310" cy="325" r="3"/><circle cx="550" cy="335" r="3"/></svg>
          <span class="skill-node node-ts">JavaScript</span><span class="skill-node node-node">TypeScript</span><span class="skill-node node-rag">Python</span><span class="skill-node node-oauth">Java</span><span class="skill-node node-react">React</span><span class="skill-node node-mongo">Next.js</span><span class="skill-node node-mqtt">React Native</span><span class="skill-node node-aws">Electron.js</span><span class="skill-node node-node">Node.js</span><span class="skill-node node-react">NestJS</span><span class="skill-node node-mongo">Express.js</span><span class="skill-node node-rag">Spring Boot</span><span class="skill-node node-oauth">FastAPI</span><span class="skill-node node-aws">Django</span><span class="skill-node node-mongo">MySQL</span><span class="skill-node node-node">PostgreSQL</span><span class="skill-node node-react">MongoDB</span><span class="skill-node node-aws">AWS</span><span class="skill-node node-mqtt">GCP</span><span class="skill-node node-rag">Stripe</span><span class="skill-node node-oauth">PayPal</span><span class="skill-node node-rag">LemonSqueezy</span><span class="skill-node node-mongo">Git</span><span class="skill-node node-node">MQTT</span><span class="skill-node node-react">RAG</span>
          <div class="map-coordinates"><span>11°28′N</span><span>078°11′E</span></div>
        </div>
      </div>
      <div class="hero-bottom page-wrap"><span>FROM SYSTEM DESIGN TO SHIPPED SOFTWARE</span><a href="#proof">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a></div>
    </section>

    <section class="proof-band" id="proof" aria-label="Selected product scale metrics"><div class="proof-inner page-wrap">
      <div class="proof-label"><span>ENGINEERING<br>AT REAL SCALE</span><span class="proof-mark">↘</span></div>
      <div class="metric"><strong>16.1<span>K+</span></strong><span>AI product users</span></div><div class="metric"><strong>11.6<span>K+</span></strong><span>Organizations</span></div><div class="metric"><strong>260<span>K+</span></strong><span>Network users</span></div><div class="metric"><strong>80<span>+</span></strong><span>Cities reached</span></div>
    </div></section>

    <section class="work-section section-wrap" id="projects">
      <div class="section-heading"><div><div class="eyebrow section-kicker">01 / SELECTED PROJECTS</div><h2>Engineering measured<br>in <em>what it enables.</em></h2></div><p>Systems that solve practical problems, support real people, and keep working as they grow.</p></div>
      <article class="case-study case-ai"><div class="case-visual ai-visual"><div class="case-topline"><span>HANABI TECHNOLOGIES</span><span>01 / APPLIED AI</span></div><div class="ai-diagram" aria-label="Illustration of a secured knowledge retrieval flow"><div class="diagram-source">PRIVATE<br>KNOWLEDGE</div><div class="diagram-flow flow-one"></div><div class="diagram-engine"><span>RAG</span></div><div class="diagram-flow flow-two"></div><div class="diagram-answer">GROUNDED<br>ANSWERS</div><span class="diagram-point point-one"></span><span class="diagram-point point-two"></span></div><div class="visual-caption">RETRIEVAL-AUGMENTED GENERATION / MONGODB VECTOR SEARCH</div></div>
        <div class="case-copy"><div class="case-index">01 <span>/</span> AI SYSTEMS</div><h3>AI assistant &amp;<br>knowledge retrieval</h3><p class="case-lede">Helped teams find reliable answers across their organization’s knowledge.</p><div class="case-scale"><strong>16.1K+</strong><span>users<br>11.6K+ organizations</span></div><p class="case-detail">Architected the core system design and built a retrieval-augmented generation pipeline with MongoDB vector search. Led the technical workstream for Google CASA Tier 2 security certification.</p><div class="tag-list"><span>RAG</span><span>MongoDB Vector Search</span><span>OAuth 2.0</span><span>Google CASA Tier 2</span></div></div>
      </article>
      <article class="case-study case-iot"><div class="case-visual iot-visual"><div class="case-topline"><span>HANABI TECHNOLOGIES</span><span>02 / CONNECTED SYSTEMS</span></div><div class="city-network" aria-label="Illustration of a connected city network"><svg viewBox="0 0 600 390" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><path d="M-12 80 100 110l85-53 97 54 101-78 71 73 158-22M-15 175l140-26 78 72 80-42 102 51 72-88 162 18M-10 296l95-49 97 39 75-67 97 72 103-42 149 52M55-5l34 127-44 83 69 186M191-8l-12 87 45 112-17 88 65 111M335-7l-14 106 48 70-15 105 57 117M466-8l-18 84 31 85-21 80 58 117"/></svg><span class="city-hub hub-one">MQTT</span><span class="city-hub hub-two">IoT</span><span class="city-hub hub-three">IoT</span><div class="city-center"><span>80+</span><small>CITIES</small></div></div><div class="visual-caption">MQTT / REAL-TIME DEVICE COMMUNICATION</div></div>
        <div class="case-copy"><div class="case-index">02 <span>/</span> CONNECTED MOBILITY</div><h3>Power sharing,<br>connected at scale</h3><p class="case-lede">Reliable access to mobile charging, built into the everyday city.</p><div class="case-scale"><strong>260K+</strong><span>users across<br>80+ cities</span></div><p class="case-detail">Architected the platform system design supporting 600+ stations and more than 400K rental hours. Implemented MQTT-based communication for real-time exchange with IoT devices.</p><div class="tag-list"><span>MQTT</span><span>IoT</span><span>Node.js</span><span>Cloud systems</span></div></div>
      </article>
      <article class="result-strip"><div class="result-figure"><span>≈</span>50<span class="result-unit">%</span></div><div class="result-copy"><div class="case-index">03 / SEARCH PERFORMANCE</div><h3>Fewer passes. Faster retrieval.</h3><p>Replaced an iterative, multi-pass legal citation retrieval process with a single direct-search approach, cutting retrieval time by approximately 50%.</p></div><div class="result-note">MEASURED<br>IMPROVEMENT</div></article>
      <div class="work-attribution"><span>PRODUCT ENGINEERING / HANABI TECHNOLOGIES</span><span>JUN 2023 — OCT 2026</span></div>
    </section>

    <section class="approach-section"><div class="section-wrap approach-grid"><div class="approach-intro"><div class="eyebrow section-kicker">02 / HOW I ENGINEER</div><h2>Make the hard parts<br><em>hold together.</em></h2><p>I work across the boundaries that make software dependable: data, security, integrations, and the interface people actually use.</p></div><div class="approach-list"><article><span>01</span><div><h3>Design for the full system</h3><p>Architecture that accounts for tenants, traffic, data, and change.</p></div></article><article><span>02</span><div><h3>Secure the everyday paths</h3><p>OAuth, role-based access, billing, and careful integration work.</p></div></article><article><span>03</span><div><h3>Build for imperfect conditions</h3><p>Connected devices, offline desktop workflows, and real networks.</p></div></article></div></div></section>

    <section class="toolkit-section section-wrap" id="skills"><div class="eyebrow section-kicker">03 / SKILLS</div><div class="toolkit-heading"><h2>Technical range,<br><em>built for delivery.</em></h2><a class="resume-link" href="/Santhosh_Kumar_R_Resume.pdf" download>Full resume <span aria-hidden="true">↗</span></a></div><div class="toolkit-grid"><article><span>01 / LANGUAGES</span><p>JavaScript · TypeScript · Python · Java · HTML · CSS</p></article><article><span>02 / FRONTEND &amp; MOBILE</span><p>React · Next.js · React Native · Redux · MobX · Tailwind CSS · Bootstrap · Material UI</p></article><article><span>03 / BACKEND &amp; APIS</span><p>Node.js · NestJS · Express.js · Spring Boot · FastAPI · Django · REST APIs · OAuth 2.0 · RBAC · Webhooks</p></article><article><span>04 / DATA &amp; AI</span><p>MongoDB · Mongoose · MySQL · PostgreSQL · Vector Search · RAG · LangChain · Prompt Engineering</p></article><article><span>05 / CLOUD &amp; SECURITY</span><p>AWS · GCP · Azure · Google CASA Tier 2</p></article><article><span>06 / PAYMENTS &amp; CONNECTED SYSTEMS</span><p>Stripe · PayPal · LemonSqueezy · MQTT · IoT</p></article><article><span>07 / TOOLS &amp; DESKTOP</span><p>Electron.js · Git · Postman · Figma · WordPress</p></article><article><span>08 / LANGUAGES SPOKEN</span><p>English · Kannada · Tamil</p></article></div></section>

    <section class="experience-section" id="experience"><div class="section-wrap"><div class="eyebrow section-kicker">04 / EXPERIENCE &amp; EDUCATION</div><div class="timeline"><article class="timeline-row"><div class="timeline-date">JUN 2023 — OCT 2026</div><div class="timeline-main"><h3>Senior Software Developer <span>· Hanabi Technologies</span></h3><p>Designed the core architecture for AI and connected-device products; built RAG and vector search, three payment gateways, OAuth/RBAC access, MQTT device communication, and offline desktop software. Led the technical workstream for Google CASA Tier 2.</p></div><span class="timeline-type">PRODUCT ENGINEERING</span></article><article class="timeline-row"><div class="timeline-date">DEC 2022 — APR 2023</div><div class="timeline-main"><h3>Software Engineer — Frontend <span>· Youth India e-School</span></h3><p>Assessment and learning systems, responsive web experiences, and a cross-platform HRMS dashboard.</p></div><span class="timeline-type">FRONTEND</span></article><article class="timeline-row education-row"><div class="timeline-date">JUN 2015 — APR 2019</div><div class="timeline-main"><h3>B.E., Mechanical Engineering <span>· K.S.R Institute for Engineering and Technology</span></h3></div><span class="timeline-type">EDUCATION</span></article></div></div></section>

    <section class="contact-section" id="contact"><div class="section-wrap contact-inner"><div class="eyebrow">NEXT CHAPTER</div><h2>Let’s build software<br>people <em>depend on.</em></h2><p>Currently looking for Senior Software Developer roles.</p><div class="contact-actions"><a class="button button-light" href="mailto:drsanthosh1997@gmail.com">Start a conversation ${arrow}</a><a class="contact-phone" href="tel:+918428497261">+91 84284 97261</a><a class="contact-email" href="mailto:drsanthosh1997@gmail.com">drsanthosh1997@gmail.com</a></div><div class="contact-place">RASIPURAM, INDIA</div></div><div class="contact-coordinate" aria-hidden="true">RASIPURAM<br/>11.46°N / 78.18°E</div></section>
  </main>
  <footer class="footer"><a class="wordmark" href="#top">SK<span>/</span></a><span class="footer-signoff">Made with <svg class="footer-heart" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.8a5.5 5.5 0 0 0-7.8 0L12 5.9l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.3 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/></svg> by Santhosh</span><div><a href="https://github.com/SantoshKumarRavi" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/santhosh-kumar-r-497233207" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></footer>
`

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

if (!reducedMotion && 'IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.14, rootMargin: '0px 0px -36px 0px' })

  document.querySelectorAll<HTMLElement>(
    '.case-study, .result-strip, .approach-intro, .approach-list article, .toolkit-grid article, .timeline-row, .contact-inner',
  ).forEach((element, index) => {
    element.classList.add('reveal-on-scroll')
    element.style.setProperty('--reveal-delay', `${(index % 3) * 90}ms`)
    revealObserver.observe(element)
  })

  document.querySelectorAll<HTMLElement>('.skill-node').forEach((node, index) => {
    node.style.setProperty('--node-index', String(index))
  })
}
