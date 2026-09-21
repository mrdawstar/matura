# Angielski. — Matura 2027

Lekki landing page: semantyczny HTML, CSS i modułowy JavaScript bez zależności. Node 20+.

- `npm run dev` — podgląd na http://127.0.0.1:4173.
- `npm run lint` — sprawdzenie składni wszystkich modułów JavaScript (nie ESLint).
- `npm run build` — produkcyjny katalog `dist/`, z pełnym HTML wyrenderowanym podczas budowania dla SEO.
- `npm run preview` — podgląd wersji produkcyjnej, na tym samym porcie (najpierw zatrzymaj dev).

## Edycja

- `src/config.js`: cena, jeden link Stripe, poziomy, zawartość pakietu, zdjęcia, dane prowadzącej, kontakt i odnośniki prawne.
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

## Opinie i dokumenty

- `src/testimonials.js`: osiem autentycznych wiadomości dostarczonych przez organizatorkę, bez dopisywania nazwisk. Pełna transkrypcja i oryginalny obraz dostępne w dialogu.
- `public/images/reviews/`: zoptymalizowane wersje WebP dostarczonych PNG.
- `src/regulamin.html`: treść regulaminu z dostarczonego DOCX, wraz z formularzem zgody rodzica. Linie formularza są miejscem na dane uczestnika, nie brakującymi danymi organizatora.
- `src/polityka-prywatnosci.html`: treść dostarczonej polityki z uzupełnionym e-mailem, datą z dokumentu oraz informacjami o aktualnym kodzie strony (bez trackerów i zapisywania cookies w kodzie, płatność na zewnętrznym Stripe).
- `src/styles/refinement.css`: Instagram, spójne gwiazdki SVG, responsywne opinie.
- `src/styles/legal.css`: podstrony dokumentów i wydruk.

Polityka wymaga odpowiedzi organizatorki przed publikacją: platformy zajęć, przechowywanie materiałów i nagrań, podstawa prawna nagrywania, faktyczni dostawcy i transfery danych, ewentualny newsletter/marketing oraz profilowanie. Robocze zapisy dotyczące tych kwestii pochodzą z dostarczonego dokumentu; nie zastąpiono ich wymyślonymi informacjami. Pozostałe dane firmy, biografia, opinie i regulamin są uzupełnione.

Opłata miesięczna i okres wypowiedzenia na stronie odpowiadają § 5 i § 8 dostarczonego regulaminu. Warunki oraz linki są widoczne przy ofercie. Konfiguracja zgód i cyklicznych płatności w zewnętrznym panelu Stripe nie była zmieniana ani testowana zakupem.

## Zdjęcia

Zdjęcie w hero: dostarczony `ChatGPT Image Sep 18, 2026, 07_37_19 PM.png`, przekonwertowany do WebP z zachowaniem przezroczystości. Portret nie był regenerowany ani retuszowany; transparentne marginesy kadruje CSS. Drugie zdjęcie: dostarczony `IMG_3099.png`.
