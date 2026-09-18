# Angielski. — Matura 2027

Lekki landing page: semantyczny HTML, CSS i modułowy JavaScript bez zależności. Node 20+.

- `npm run dev` — podgląd na http://127.0.0.1:4173.
- `npm run lint` — sprawdzenie składni wszystkich modułów JavaScript (nie ESLint).
- `npm run build` — produkcyjny katalog `dist/`, z pełnym HTML wyrenderowanym podczas budowania dla SEO.
- `npm run preview` — podgląd wersji produkcyjnej, na tym samym porcie (najpierw zatrzymaj dev).

## Edycja

- `src/config.js`: cena, jeden link Stripe, poziomy, zawartość pakietu, zdjęcia, dane prowadzącej, opinie, wyniki i dane prawne.
- `src/components/hero.js`: nawigacja i hero.
- `src/components/story.js`: narracja, program, materiały, prowadząca i prawdziwe opinie.
- `src/components/offer.js`: oferta, FAQ, końcowe CTA i stopka.
- `src/styles.css`: system wizualny i responsywność.
- `src/main.js`: menu, wybór poziomu, dialogi, animacje i sticky CTA.
- `src/index.html`: metadane oraz szablon dokumentu.
- `public/images/teacher-hero.webp`, `teacher-about.webp`: zdjęcia. Dla nowego kadru dostosuj CSS `.hero-portrait` i `.teacher-photo img`.

Wybrany poziom zmienia etykietę na stronie; nie jest przekazywany do Stripe. Każde CTA zakupowe pobiera ten sam adres z konfiguracji. Nie wykonano rzeczywistego zakupu.

## Dane wymagające uzupełnienia

W `src/config.js` wyszukaj `UZUPEŁNIJ`: imię i nazwisko prowadzącej, biografia, kwalifikacje, doświadczenie, osobisty cytat; autentyczne opinie i ewentualne wyniki; regulamin, polityka prywatności, kontakt oraz dane firmy. Regulamin powinien określać rzeczywiste zasady rezygnacji, płatności i nieobecności. Puste dane prawne otwierają wyraźnie opisane dialogi, nie fikcyjne dokumenty. Nie dodano trackerów ani formularzy zbierających dane.

## Zdjęcia

Zdjęcie w hero: wbudowany imagegen, usunięcie tła z dostarczonego `IMG_5322.png`; wynik zoptymalizowany do WebP. Drugie zdjęcie: dostarczony `IMG_3099.png`, bez generowania nowej twarzy. Prompt operacji zapisany w `public/images/portrait-prompt.txt`.
