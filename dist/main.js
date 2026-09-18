import { renderPage } from './page.js';
import { course, legal, seo } from './config.js';
document.title = seo.title;
for (const [selector, content] of [['meta[name=description]',seo.description],['meta[property="og:title"]',seo.socialTitle],['meta[property="og:description"]',seo.socialDescription]]) document.querySelector(selector).content=content;
const app = document.querySelector('#app');
if (!app.children.length) app.innerHTML = renderPage();
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { toggle.setAttribute('aria-expanded','false'); toggle.setAttribute('aria-label','Otwórz menu'); navigation.classList.remove('open'); }
toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); toggle.setAttribute('aria-label',open ? 'Zamknij menu' : 'Otwórz menu'); navigation.classList.toggle('open', open); });
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if(e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { closeMenu(); toggle.focus(); } });
document.addEventListener('click', e => { if (!e.target.closest('.header')) closeMenu(); });
document.querySelectorAll('input[name="level"]').forEach(input => input.addEventListener('change', () => { document.querySelector('.selected-level').textContent = course.levels.find(level => level.id === input.value).name; }));
const dialog = document.querySelector('#legal-dialog');
const legalLabels = { terms:'Regulamin', privacy:'Polityka prywatności', contact:'Kontakt', company:'Dane firmy' };
dialog.setAttribute('aria-labelledby','legal-title');
document.querySelectorAll('[data-legal]').forEach(button=>button.addEventListener('click',()=>{const key=button.dataset.legal; document.querySelector('#legal-title').textContent=legalLabels[key]; document.querySelector('#legal-content').textContent=legal[key] || `${legalLabels[key]} — do uzupełnienia przez organizatora kursu przed rozpoczęciem sprzedaży. Dane nie zostały jeszcze udostępnione.`; dialog.showModal(); }));
dialog.querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>dialog.close()));
dialog.addEventListener('click',e=>{if(e.target===dialog){ const box=dialog.getBoundingClientRect(); if(e.clientX<box.left||e.clientX>box.right||e.clientY<box.top||e.clientY>box.bottom)dialog.close(); }});
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
if (!reduceMotion.matches && 'IntersectionObserver' in window) {
 const reveal=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');reveal.unobserve(entry.target);}}),{threshold:.08});
 document.querySelectorAll('.reveal').forEach(el=>{el.classList.add('will-reveal');reveal.observe(el);});
}
const hero=document.querySelector('.hero');
const art=document.querySelector('.hero-art');
hero.addEventListener('pointermove',e=>{if(reduceMotion.matches||!window.matchMedia('(min-width:1101px) and (pointer:fine)').matches)return; const rect=hero.getBoundingClientRect(); art.style.setProperty('--mx',`${(e.clientX-rect.left-rect.width/2)/150}px`); art.style.setProperty('--my',`${(e.clientY-rect.top-rect.height/2)/160}px`);});
hero.addEventListener('pointerleave',()=>{art.style.setProperty('--mx','0px');art.style.setProperty('--my','0px');});
const sticky=document.querySelector('.mobile-sticky');
if('IntersectionObserver' in window){const stickyObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{sticky.classList.toggle('show',!entry.isIntersecting);}),{threshold:0}); stickyObserver.observe(document.querySelector('.hero-actions'));}
