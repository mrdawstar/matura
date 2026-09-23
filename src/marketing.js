const PIXEL_ID = '1421858570043345';
const KEY = 'matura:marketing-consent:v1';
const MAX_AGE = 180 * 24 * 60 * 60 * 1000;
let initialized = false;
function savedConsent() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY));
    return saved && Date.now() - saved.time < MAX_AGE && typeof saved.accepted === 'boolean' ? saved.accepted : null;
  } catch { return null; }
}
function startPixel() {
  if (initialized) return;
  initialized = true;
  // Meta Pixel base code, loaded only after marketing consent.
  if (!window.fbq) {
    const n = window.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!window._fbq) window._fbq = n;
    n.push = n; n.loaded = true; n.version = '2.0'; n.queue = [];
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.append(script);
  }
  window.fbq('consent', 'grant');
  window.fbq('set', 'autoConfig', false, PIXEL_ID);
  window.fbq('init', PIXEL_ID);
  window.fbq('track', 'PageView');
}
const panel = document.createElement('section');
panel.className = 'cookie-panel';
panel.setAttribute('aria-label', 'Ustawienia prywatności');
panel.innerHTML = `<div><h2>Twoja prywatność</h2><p>Za Twoją zgodą używamy Meta Pixel do pomiaru skuteczności reklam i remarketingu. Możesz odmówić i nadal korzystać z całej strony. <a href="/polityka-prywatnosci.html#section-15">Polityka prywatności</a></p></div><div class="cookie-actions"><button type="button" data-consent="no">Odrzucam marketingowe</button><button type="button" data-consent="yes">Akceptuję marketingowe</button></div>`;
const settings = document.createElement('button');
settings.type = 'button'; settings.className = 'cookie-settings'; settings.textContent = 'Ustawienia cookies';
(document.querySelector('footer') || document.body).append(settings);
document.body.append(panel);
function showPanel(show) {
  panel.hidden = !show;
  document.body.classList.toggle('cookie-panel-open', show);
  settings.setAttribute('aria-expanded', String(show));
}
settings.addEventListener('click', () => { showPanel(true); panel.querySelector('button').focus(); });
panel.addEventListener('click', event => {
  const button = event.target.closest('[data-consent]');
  if (!button) return;
  const accepted = button.dataset.consent === 'yes';
  try { localStorage.setItem(KEY, JSON.stringify({accepted, time: Date.now()})); } catch { /* Choice still applies to this page. */ }
  showPanel(false);
  if (accepted) startPixel();
  else if (initialized) {
    window.fbq('consent', 'revoke');
    for (const name of ['_fbp', '_fbc']) {
      const domains = ['', location.hostname, ...location.hostname.split('.').map((_,i,a)=>'.'+a.slice(i).join('.'))];
      for (const domain of domains) document.cookie = `${name}=; Max-Age=0; path=/;${domain ? ` domain=${domain};` : ''}`;
    }
    // Unload the already-running third-party script after withdrawing consent.
    location.reload();
  }
});
const consent = savedConsent();
showPanel(consent === null);
if (consent === true) startPixel();
