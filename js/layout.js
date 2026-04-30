// ─── HEADER MODULE ──────────────────────────────────────────────────────────
const headerHTML = `
<header class="site-header" id="site-header">
  <div class="header-inner">
    <a class="logo-wrap" href="../index.html">
      <img class="logo-img" src="../images/logo.png" alt="Meds Express Pharmacy" />
    </a>
    <nav class="site-nav" id="site-nav">
      <div class="nav-item">
        <a class="nav-link" href="../index.html">Home</a>
      </div>
      <div class="nav-item">
        <a class="nav-link" href="../pages/about.html">About Us</a>
      </div>
      <div class="nav-item">
        <a class="nav-link has-dropdown" href="../pages/services.html">
          Pharmacy Services
          <svg viewBox="0 0 10 6" fill="currentColor"><path d="M0 0l5 6 5-6z"/></svg>
        </a>
        <div class="dropdown">
          <span style="display:block;padding:0.75rem 1.25rem;color:var(--text);font-size:0.95rem;border-bottom:1px solid var(--border);cursor:default;">Retail</span>
          <span style="display:block;padding:0.75rem 1.25rem;color:var(--text);font-size:0.95rem;border-bottom:1px solid var(--border);cursor:default;">Non-Sterile Compounding</span>
          <span style="display:block;padding:0.75rem 1.25rem;color:var(--text);font-size:0.95rem;border-bottom:1px solid var(--border);cursor:default;">Sterile Compounding</span>
          <span style="display:block;padding:0.75rem 1.25rem;color:var(--text);font-size:0.95rem;cursor:default;">Delivery</span>
        </div>
      </div>
      <div class="nav-item">
        <a class="nav-link" href="../pages/contact.html">Contact</a>
      </div>
    </nav>
    <button class="hamburger" id="hamburger" aria-label="Menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>
`;

// ─── FOOTER MODULE ──────────────────────────────────────────────────────────
const footerHTML = `
<footer class="site-footer">
  <div class="footer-top">
    <div class="footer-left">
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
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>230 W Parker Rd Suite 210-B, Plano TX 75075</span>
        </div>
        <div class="contact-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1 19.79 19.79 0 0 1 1.62 4.48 2 2 0 0 1 3.59 2.28h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17z"/></svg>
          <span>(469) 366-9367</span>
        </div>
        <div class="contact-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span>Mon–Fri: 9:00 AM – 5:30 PM | Sat: 9:00 AM – 5:00 PM</span>
        </div>
        <div class="contact-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          <span>medsexpresspharmacyrx@gmail.com</span>
        </div>
      </div>
    </div>

    <div class="footer-form">
      <h4>Patient Inquiry Form</h4>
      <div class="footer-form-row">
        <input type="text" id="ft-first" placeholder="First name" />
        <input type="text" id="ft-last" placeholder="Last name" />
      </div>
      <div class="footer-form-row">
        <input type="email" id="ft-email" placeholder="Email address" />
        <input type="tel" id="ft-phone" placeholder="Phone number" />
      </div>
      <select id="ft-reason">
        <option value="" disabled selected>Reason for inquiry</option>
        <option value="Prescription Refill">Prescription Refill</option>
        <option value="New Prescription">New Prescription</option>
        <option value="Compounding Inquiry">Compounding Inquiry</option>
        <option value="HRT / Hormone Therapy">HRT / Hormone Therapy</option>
        <option value="Weight Loss Program">Weight Loss Program</option>
        <option value="General Question">General Question</option>
        <option value="Other">Other</option>
      </select>
      <textarea id="ft-msg" placeholder="Additional details or questions..."></textarea>
      <button onclick="footerSubmit()">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        Submit Inquiry
      </button>
      <p id="ft-success" style="display:none; color:rgba(255,255,255,0.85); font-size:0.82rem; margin-top:0.5rem;">✓ Inquiry submitted! We'll be in touch shortly.</p>
      <p id="ft-error"   style="display:none; color:#f9a8a8; font-size:0.82rem; margin-top:0.5rem;">✗ Something went wrong. Please call us or try again.</p>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© ${new Date().getFullYear()} Meds Express Pharmacy. All rights reserved. | 230 W Parker Rd Suite 210-B, Plano TX 75075</p>
  </div>
</footer>
`;

// ─── INJECT ─────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const headerTarget = document.getElementById('header-placeholder');
  const footerTarget = document.getElementById('footer-placeholder');
  if (headerTarget) headerTarget.innerHTML = headerHTML;
  if (footerTarget) footerTarget.innerHTML = footerHTML;

  // Hamburger toggle with animated X
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('#hamburger');
    const nav = document.getElementById('site-nav');
    if (btn && nav) {
      const isOpen = nav.classList.toggle('open');
      btn.classList.toggle('is-open', isOpen);
      btn.setAttribute('aria-expanded', isOpen);
    }
  });

  // Close nav when a nav link is clicked (mobile)
  document.addEventListener('click', (e) => {
    const link = e.target.closest('.site-nav a');
    if (link) {
      const nav = document.getElementById('site-nav');
      const btn = document.getElementById('hamburger');
      if (nav && nav.classList.contains('open')) {
        nav.classList.remove('open');
        if (btn) { btn.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); }
      }
    }
  });

  // Close nav when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#site-header')) {
      const nav = document.getElementById('site-nav');
      const btn = document.getElementById('hamburger');
      if (nav && nav.classList.contains('open')) {
        nav.classList.remove('open');
        if (btn) { btn.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); }
      }
    }
  });

  // Select placeholder color
  document.addEventListener('change', (e) => {
    if (e.target && e.target.id === 'ft-reason') {
      e.target.classList.toggle('placeholder', e.target.value === '');
    }
  });

  const sel = document.getElementById('ft-reason');
  if (sel) sel.classList.add('placeholder');

  // Active nav link
  const links = document.querySelectorAll('.nav-link');
  const path = window.location.pathname;
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href) {
      const page = href.split('/').pop().split('.')[0];
      if (page && path.includes(page)) link.classList.add('active');
    }
  });
});

// ─── EMAILJS ─────────────────────────────────────────────────────────────────
// Fill in your three EmailJS credentials below, then save.
const EMAILJS_PUBLIC_KEY  = 'bokVaZCEYsy7cxDKg';   // emailjs.com → Account → API Keys
const EMAILJS_SERVICE_ID  = 'service_b20c99o';   // emailjs.com → Email Services
const EMAILJS_TEMPLATE_ID = 'template_rx07yf2';  // emailjs.com → Email Templates

function footerSubmit() {
  const first  = document.getElementById('ft-first').value.trim();
  const last   = document.getElementById('ft-last').value.trim();
  const email  = document.getElementById('ft-email').value.trim();
  const phone  = document.getElementById('ft-phone').value.trim();
  const reason = document.getElementById('ft-reason').value;
  const msg    = document.getElementById('ft-msg').value.trim();

  if (!first || !last || !email || !reason) {
    alert('Please fill in your name, email, and reason for inquiry.');
    return;
  }

  const btn        = document.querySelector('.footer-form button');
  const successMsg = document.getElementById('ft-success');
  const errorMsg   = document.getElementById('ft-error');

  btn.disabled    = true;
  btn.textContent = 'Sending…';
  errorMsg.style.display = 'none';

  const now = new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' });

  emailjs.init(EMAILJS_PUBLIC_KEY);

  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
    to_email:     'medsexpresspharmacyintake@gmail.com',
    from_name:    first + ' ' + last,
    from_email:   email,
    phone:        phone || 'Not provided',
    reason:       reason,
    message:      msg   || 'None provided',
    submitted_at: now
  })
  .then(() => {
    successMsg.style.display = 'block';
    ['ft-first', 'ft-last', 'ft-email', 'ft-phone', 'ft-msg'].forEach(id => {
      document.getElementById(id).value = '';
    });
    const sel = document.getElementById('ft-reason');
    sel.selectedIndex = 0;
    sel.classList.add('placeholder');
  })
  .catch((err) => {
    console.error('EmailJS error:', err);
    errorMsg.style.display = 'block';
  })
  .finally(() => {
    btn.disabled  = false;
    btn.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Submit Inquiry';
  });
}