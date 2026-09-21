import { course } from "../config.js";
export const esc = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
export const arrow =
  '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>';
export const check =
  '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m5 12 4 4L19 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
export function purchase(
  label = "Zapisuję się na kurs",
  className = "button-primary",
) {
  return `<a class="button ${className}" data-purchase href="${course.stripeUrl}" target="_blank" rel="noopener noreferrer">${label}${arrow}</a>`;
}
export const eyebrow = (number, label) =>
  `<p class="eyebrow"><span>${number}</span>${label}</p>`;
export const brand =
  '<a class="brand" href="#top" aria-label="Angielski. — początek strony">angielski<span>.</span><small>MATURA 2027</small></a>';

export const star = `<svg class="decor-star" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true" focusable="false"><path d="M44 2h12v30l21-21 9 9-21 24h33v12H65l21 24-9 9-21-21v30H44V68L23 89l-9-9 21-24H2V44h33L14 20l9-9 21 21Z"/></svg>`;
export const sparkle = `<svg class="decor-star" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true" focusable="false"><path d="M50 2C56 34 66 44 98 50 66 56 56 66 50 98 44 66 34 56 2 50 34 44 44 34 50 2Z"/></svg>`;
export const instagram = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>`;
