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
- `src/styles.css`: zachowany system hero, nawigacja i wspólne kontrolki.
- `src/styles/sections.css`: jasny editorialowy design sekcji poniżej hero i responsywność.
- `src/styles/materials.css` oraz `src/components/materials.js`: współdzielone ilustracje materiałów.
- `src/motion.js`: subtelne wejścia i obsługa preferencji ograniczonego ruchu.
- `src/main.js`: menu, wybór poziomu, dialogi, animacje i sticky CTA.
- `src/index.html`: metadane oraz szablon dokumentu.
- `public/images/teacher-hero-lavender.webp`, `teacher-about.webp`: zdjęcia. Dla nowego kadru dostosuj CSS `.hero-portrait > img` i `.teacher-photo img`. Układ oraz dekoracje hero są zachowane; nowy portret ma tylko skalowanie i kadrowanie w dotychczasowej ramce.

Wybrany poziom zmienia etykietę na stronie; nie jest przekazywany do Stripe. Każde CTA zakupowe pobiera ten sam adres z konfiguracji. Nie wykonano rzeczywistego zakupu.

## Dane wymagające uzupełnienia

W `src/config.js` wyszukaj `UZUPEŁNIJ`: imię i nazwisko prowadzącej, biografia, kwalifikacje, doświadczenie, osobisty cytat; autentyczne opinie i ewentualne wyniki; regulamin, polityka prywatności, kontakt oraz dane firmy. Regulamin powinien określać rzeczywiste zasady rezygnacji, płatności i nieobecności. Puste dane prawne otwierają wyraźnie opisane dialogi, nie fikcyjne dokumenty. Nie dodano trackerów ani formularzy zbierających dane.

## Zdjęcia

Zdjęcie w hero: dostarczony `ChatGPT Image Sep 18, 2026, 07_37_19 PM.png`, przekonwertowany do WebP z zachowaniem przezroczystości. Portret nie był regenerowany ani retuszowany; transparentne marginesy kadruje CSS. Drugie zdjęcie: dostarczony `IMG_3099.png`.
