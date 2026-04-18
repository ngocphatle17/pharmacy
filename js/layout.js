// ─── HEADER MODULE ──────────────────────────────────────────────────────────
const headerHTML = `
<header class="site-header" id="site-header">
  <div class="header-inner">
    <!-- LOGO -->
    <a class="logo-wrap" href="../index.html">
      <img class="logo-img" src="../images/logo.png" alt="Meds Express Pharmacy" />
    </a>
    <!-- NAV -->
    <nav class="site-nav" id="site-nav">
      <div class="nav-item">
        <a class="nav-link" href="../index.html">Home</a>
      </div>
      <div class="nav-item">
        <span class="nav-link has-dropdown">
          About Us
          <svg viewBox="0 0 10 6" fill="currentColor"><path d="M0 0l5 6 5-6z"/></svg>
        </span>
        <div class="dropdown">
          <a href="../pages/about.html">Our Story</a>
          <a href="../pages/about.html#team">Our Team</a>
          <a href="../pages/about.html#mission">Our Mission</a>
        </div>
      </div>
      <div class="nav-item">
        <span class="nav-link has-dropdown">
          Pharmacy Services
          <svg viewBox="0 0 10 6" fill="currentColor"><path d="M0 0l5 6 5-6z"/></svg>
        </span>
        <div class="dropdown">
          <a href="../pages/services.html#retail">Retail</a>
          <a href="../pages/services.html#non-sterile">Non-Sterile Compounding</a>
          <a href="../pages/services.html#sterile">Sterile Compounding</a>
        </div>
      </div>
      <div class="nav-item">
        <a class="nav-link" href="../pages/contact.html">Contact</a>
      </div>
    </nav>

    <button class="hamburger" id="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>
`;

// ─── FOOTER MODULE ──────────────────────────────────────────────────────────
const footerHTML = `
<footer class="site-footer">
  <div class="footer-top">
    <div class="footer-brand">
      <span class="brand-name">Meds Express Pharmacy</span>
      <span class="brand-sub">Your Health, Our Priority</span>
      <p>A trusted compounding and retail pharmacy serving the Plano community with personalized care and expert pharmaceutical services.</p>
    </div>
    <div class="footer-col">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="../index.html">Home</a></li>
        <li><a href="../pages/about.html">About Us</a></li>
        <li><a href="../pages/services.html">Pharmacy Services</a></li>
        <li><a href="../pages/contact.html">Contact</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contact Info</h4>
      <div class="contact-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        <span>230 W Parker Rd Suite 310-B,<br>Plano TX 75075</span>
      </div>
      <div class="contact-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1 19.79 19.79 0 0 1 1.62 4.48 2 2 0 0 1 3.59 2.28h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17z"/></svg>
        <span>(469) 366-9367</span>
      </div>
      <div class="contact-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        <span>Mon–Fri: 9:00 AM – 5:30 PM</span>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© ${new Date().getFullYear()} Meds Express Pharmacy. All rights reserved. | 230 W Parker Rd Suite 310-B, Plano TX 75075</p>
  </div>
</footer>
`;

// ─── INJECT ─────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const headerTarget = document.getElementById('header-placeholder');
  const footerTarget = document.getElementById('footer-placeholder');
  if (headerTarget) headerTarget.innerHTML = headerHTML;
  if (footerTarget) footerTarget.innerHTML = footerHTML;

  // Hamburger toggle
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('#hamburger');
    const nav = document.getElementById('site-nav');
    if (btn && nav) nav.classList.toggle('open');
  });

  // Highlight active nav
  const links = document.querySelectorAll('.nav-link');
  const path = window.location.pathname;
  links.forEach(link => {
    if (link.href && link.href.includes && path.includes(link.getAttribute('href')?.split('/').pop()?.split('.')[0])) {
      link.classList.add('active');
    }
  });
});