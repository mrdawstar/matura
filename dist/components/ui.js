import { course } from '../config.js';
export const esc = (value) => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const arrow = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>';
export const check = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m5 12 4 4L19 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
export function purchase(label='Zapisuję się na kurs', className='button-primary') { return `<a class="button ${className}" data-purchase href="${course.stripeUrl}" target="_blank" rel="noopener noreferrer">${label}${arrow}</a>`; }
export const eyebrow = (number, label) => `<p class="eyebrow"><span>${number}</span>${label}</p>`;
export const brand = '<a class="brand" href="#top" aria-label="Angielski. — początek strony">angielski<span>.</span><small>MATURA 2027</small></a>';
