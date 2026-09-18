import { course, legal } from "../config.js";
import { purchase, eyebrow, check, brand, esc } from "./ui.js";
export function Offer() {
  return `<section id="cena" class="section offer-section grid-paper"><div class="container"><div class="offer-heading reveal">${eyebrow("05", "TWÓJ NASTĘPNY KROK")}<h2>Twoja matura. <br>Twój poziom. <span class="purple">Jeden kurs.</span></h2><p>Wybierz kierunek. Cena i zakres wsparcia pozostają takie same.</p></div><div class="offer-layout reveal"><div class="level-choice"><fieldset><legend>Do której matury się przygotowujesz?</legend>${course.levels.map((l, i) => `<label class="level-option"><input type="radio" name="level" value="${l.id}" ${i === 0 ? "checked" : ""}><span class="radio-display" aria-hidden="true"></span><span><strong>${l.name}</strong><span>${l.description}</span></span></label>`).join("")}</fieldset><div class="choice-note"><span aria-hidden="true">↳</span><p>Ten wybór pomaga Ci zobaczyć ofertę. <br>Poziom i termin grupy potwierdzimy po zakupie — wybór na stronie nie jest przekazywany do Stripe.</p></div><div class="price-note"><span class="handwritten">Mała grupa, duża różnica.</span><p>To mniej niż 75 zł za jedno spotkanie <br>przy czterech zajęciach miesięcznie.</p></div></div><div class="price-card"><div class="price-top"><span>CENA STARTOWA</span><span class="price-label">MATURA ${course.year}</span></div><p class="selected-level" aria-live="polite">${course.levels[0].name}</p><p class="price"><strong>${course.price}<span> zł</span></strong><span>/ miesiąc</span></p><div class="price-divider"></div><ul>${course.includes.map((v) => `<li>${check}${v}</li>`).join("")}</ul>${purchase(`Wybieram kurs za ${course.price} zł/mies.`)}<p class="stripe-note">Płatność online przez <b>stripe</b> <span aria-hidden="true">↗</span></p><p class="confirmation">${course.confirmation}</p></div></div></div></section>`;
}
export const faqItems = [
  [
    "Czy kurs jest dla podstawy czy rozszerzenia?",
    "Dla obu poziomów. Wybierasz maturę podstawową lub rozszerzoną, a poziom oraz grupę potwierdzamy po zakupie. Cena i zakres wsparcia są takie same.",
  ],
  [
    "Jak i kiedy odbywają się zajęcia?",
    "Zajęcia odbywają się online raz w tygodniu i trwają 60 minut. Grupy liczą maksymalnie 6 osób. Dostępne są terminy wieczorowe i weekendowe — konkretny termin dopasowujemy po zakupie.",
  ],
  [
    "Czy muszę już dobrze mówić po angielsku?",
    "Nie musisz mówić bezbłędnie. Zaczynamy od sprawdzenia poziomu i dopasowania grupy. Podczas zajęć regularnie ćwiczysz wypowiedzi, pytasz i otrzymujesz wskazówki.",
  ],
  [
    `Co obejmuje cena ${course.price} zł miesięcznie?`,
    "Cotygodniowe zajęcia online, materiały edukacyjne, regularne prace domowe, konwersacje oraz szczegółowy feedback do pisania i mówienia. Pracujesz też nad gramatyką, słownictwem i zadaniami w formacie matury.",
  ],
  [
    "Co dzieje się po płatności?",
    course.confirmation +
      " Wybór poziomu na tej stronie nie jest automatycznie przekazywany do Stripe. Obie opcje prowadzą do tego samego linku płatności.",
  ],
  [
    "Czy będą prace domowe i sprawdzanie wypowiedzi?",
    "Tak. Regularne prace domowe i szczegółowy feedback są częścią kursu. Otrzymujesz indywidualne wskazówki dotyczące błędów, pisania, mówienia i dalszych kroków.",
  ],
  [
    "Do kiedy trwa przygotowanie?",
    "Przygotowanie jest prowadzone według harmonogramu do matury 2027. Dokładny terminarz swojej grupy otrzymasz po jego potwierdzeniu.",
  ],
  [
    "Gdzie sprawdzę zasady płatności i rezygnacji?",
    "Informacje o płatności zobaczysz w Stripe. Szczegółowe zasady uczestnictwa, rezygnacji i obsługi nieobecności wymagają uzupełnienia w regulaminie przez organizatora. Nie deklarujemy warunków, które nie zostały jeszcze podane.",
  ],
];
export function FAQ() {
  return `<section id="faq" class="section faq-section"><div class="container faq-layout"><div class="faq-heading reveal">${eyebrow("06", "JASNE OD POCZĄTKU")}<h2>Masz pytania? <br><span class="purple">Let’s clear it up.</span></h2><p>Najważniejsze informacje <br>przed Twoim pierwszym krokiem.</p><span class="faq-scribble" aria-hidden="true">?</span></div><div class="faq-list reveal">${faqItems.map((f, i) => `<details class="faq-item"><summary><span class="faq-number">0${i + 1}</span><span>${f[0]}</span><span class="faq-plus" aria-hidden="true">+</span></summary><div class="faq-answer"><p>${f[1]}</p></div></details>`).join("")}</div></div></section>`;
}
export function Footer() {
  const links = [
    ["terms", "Regulamin", legal.termsUrl],
    ["privacy", "Polityka prywatności", legal.privacyUrl],
    [
      "contact",
      "Kontakt",
      legal.contactEmail ? `mailto:${legal.contactEmail}` : null,
    ],
    ["company", "Dane firmy", null],
  ];
  return `<section class="final-cta"><div class="container final-inner reveal"><div><p class="small-label">ZACZNIJ OD JEDNEGO DOBREGO KROKU</p><h2>Matura przed Tobą. <br><span>Angielski z Tobą.</span></h2><p>Mała grupa. Jasny plan. Regularna praktyka.</p></div><div>${purchase()}<span class="final-price">Cena startowa: ${course.price} zł / miesiąc</span><span class="handwritten">See you in class!</span></div><span class="final-star" aria-hidden="true">✳</span></div></section><footer class="footer"><div class="container"><div class="footer-top">${brand}<p>Angielski na maturę. <br>I na to, co potem.</p><div class="footer-links">${links.map(([id, label, url]) => (url ? `<a href="${esc(url)}">${label}</a>` : `<button type="button" data-legal="${id}">${label}<span class="sr-only"> — informacje do uzupełnienia</span></button>`)).join("")}</div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} · Angielski. Matura ${course.year}</span><span>Online. Razem. Krok po kroku.</span></div></div></footer><div class="mobile-sticky"><span>Matura ${course.year}<b>${course.price} zł/mies.</b></span>${purchase("Zapisuję się")}</div><dialog id="legal-dialog"><button class="dialog-close" aria-label="Zamknij" autofocus>×</button><span class="small-label">INFORMACJE ORGANIZATORA</span><h2 id="legal-title"></h2><p id="legal-content"></p><button class="button dialog-done">Rozumiem</button></dialog>`;
}
