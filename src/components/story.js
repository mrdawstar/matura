import { testimonials } from "../testimonials.js";
import { course, teacher } from "../config.js";
import { eyebrow, purchase, arrow, check, esc, star, sparkle } from "./ui.js";
import { Worksheet, Feedback, Speaking } from "./materials.js";

export function Story() {
  const changes = [
    ["Nie wiesz, od czego zacząć.", "Masz jasny plan aż do matury."],
    [
      "Na myśl o maturze czujesz stres.",
      "Wiesz, czego spodziewać się w arkuszu.",
    ],
    ["Znasz słowa, ale trudno Ci mówić.", "Ćwiczysz mówienie, krok po kroku."],
    [
      "Pisanie zajmuje Ci wieczność.",
      "Znasz schematy wypowiedzi i wiesz, jak zdobywać punkty za pisanie.",
    ],
    ["Wciąż wracają te same błędy.", "Rozumiesz błędy dzięki feedbackowi."],
    ["Kolejny arkusz? Może jutro.", "Regularność zastępuje odkładanie."],
  ];
  return `<section id="zaczynamy" class="section problem-section">
    <div class="container problem-layout">
      <div class="problem-heading sticky-heading reveal">
        ${eyebrow("01", "BRZMI ZNAJOMO?")}
        <h2>Dużo materiału, <br>mało pewności. <br><span class="purple ink-underline">Co dalej?</span></h2>
        <p>Nie musisz ogarniać wszystkiego samodzielnie. Potrzebujesz planu, praktyki i kogoś, kto Cię poprowadzi.</p>
        <span class="handwritten margin-note">Spokojnie. Da się to poukładać.</span>
      </div>
      <div class="change-sheet">
        <div class="change-labels"><span>TERAZ BYWA TAK</span><span>Z KURSEM ZACZYNA SIĘ ZMIANA</span></div>
        <ol class="change-list">${changes
          .map(
            ([before, after], i) => `
          <li class="change-row reveal" style="--stagger:${i % 3}">
            <p class="change-before">${before}</p><span class="change-direction" aria-hidden="true">${arrow}</span><p class="change-after">${after}</p>
          </li>`,
          )
          .join("")}
        </ol>
        <p class="sheet-note reveal"><span class="tiny-note-star" aria-hidden="true">${star}</span> Mniej chaosu. Więcej kroków do przodu.</p>
      </div>
    </div>
  </section>`;
}

export function Program() {
  const steps = [
    [
      "Sprawdzamy, gdzie teraz jesteś",
      "Zaczynamy od sprawdzenia poziomu i Twoich potrzeb. To punkt wyjścia do wspólnej pracy.",
    ],
    [
      "Wybieramy kierunek",
      "Podstawa czy rozszerzenie? Potwierdzamy poziom matury i dopasowujemy grupę oraz termin.",
    ],
    [
      "Łapiemy regularny rytm",
      "Spotykamy się online raz w tygodniu. Pracujesz z zadaniami, mówisz i pytasz — aktywnie.",
    ],
    [
      "Zamieniamy błędy w postęp",
      "Między zajęciami wykonujesz zadania. Otrzymujesz konkretne wskazówki i powtarzasz materiał przed maturą.",
    ],
  ];
  const lesson = [
    [
      "10",
      "Rozgrzewka językowa",
      "Krótka rozmowa, powtórka, wejście w angielski.",
    ],
    [
      "20",
      "Zadania maturalne",
      "Praca z formatem egzaminu i strategiami rozwiązywania.",
    ],
    [
      "20",
      "Angielski w praktyce",
      "Mówienie, słuchanie, słownictwo i gramatyka w kontekście.",
    ],
    [
      "10",
      "Feedback i dalszy plan",
      "Analiza błędów i konkretne kroki na kolejny tydzień.",
    ],
  ];
  return `<section id="program" class="section program-section">
    <div class="container">
      <div class="split-heading reveal">
        <div>${eyebrow("02", "TWÓJ PLAN DO MATURY")}<h2>Jeden cel. <br><span class="purple">Małe, regularne kroki.</span></h2></div>
        <p>Bez nauki na ostatnią chwilę. Z harmonogramem, który prowadzi Cię przez przygotowania do matury ${course.year}.</p>
      </div>
      <div class="steps">${steps
        .map(
          ([title, text], i) => `
        <article class="step reveal" style="--stagger:${i}">
          <span class="step-number">0${i + 1}<span aria-hidden="true">↗</span></span>
          <h3>${title}</h3><p>${text}</p>
        </article>`,
        )
        .join("")}
      </div>
      <div class="lesson-board">
        <div class="lesson-intro reveal">
          <p class="small-label">TAK WYGLĄDA NASZE SPOTKANIE</p>
          <h3><span class="lesson-duration"><strong>60</strong><span>MINUT</span></span>Całkiem dużo <br><span class="purple">dla Twojego angielskiego.</span></h3>
          <p>Przykładowy plan zajęć. Proporcje dopasowujemy do tematu i potrzeb grupy.</p>
          <span class="lesson-bookmark" aria-hidden="true">LET’S GET TO WORK ↗</span>
        </div>
        <div class="lesson-timeline">${lesson
          .map(
            ([minutes, title, text], i) => `
          <article class="reveal" style="--stagger:${i}"><div class="minute"><b>${minutes}</b><span>MIN</span></div><div><h4>${title}</h4><p>${text}</p></div></article>`,
          )
          .join("")}
        </div>
      </div>
    </div>
  </section>`;
}

function Feature({ number, label, title, description, artwork }) {
  return `<article class="value-item">
    <div class="feature-visual reveal">${artwork()}<span class="feature-index" aria-hidden="true">${number}</span></div>
    <div class="feature-copy reveal"><span class="small-label">${number} / ${label}</span><h3>${title}</h3><p>${description}</p></div>
  </article>`;
}

export function Value() {
  const features = [
    {
      number: "01",
      label: "DOBRZE DOBRANE MATERIAŁY",
      title: 'Otwierasz. <br><span class="purple">I działasz.</span>',
      description:
        "Zadania w formacie maturalnym, słownictwo i gramatyka w praktyce. Materiały masz w cenie kursu.",
      artwork: Worksheet,
    },
    {
      number: "02",
      label: "KONKRETNY FEEDBACK",
      title: 'Wiesz, <br><span class="purple">co poprawić.</span>',
      description:
        "Szczegółowe wskazówki do pisania i mówienia. Zauważasz powtarzające się błędy i pracujesz nad nimi.",
      artwork: Feedback,
    },
    {
      number: "03",
      label: "PRZESTRZEŃ NA MÓWIENIE",
      title: 'Twój głos <br><span class="purple">ma znaczenie.</span>',
      description:
        "Maksymalnie 6 osób w grupie to przestrzeń na konwersacje, pytania i indywidualne wskazówki.",
      artwork: Speaking,
    },
  ];
  return `<section id="w-kursie" class="section value-section"><div class="container">
    <div class="split-heading reveal"><div>${eyebrow("03", "WIĘCEJ NIŻ SAMO SPOTKANIE")}<h2>Wszystko, czego potrzebujesz. <br><span class="purple ink-underline">W jednym rytmie.</span></h2></div><p>Przychodzisz na zajęcia. Wiesz, co robić pomiędzy nimi. I nie zostajesz z błędami bez odpowiedzi.</p></div>
    <div class="value-grid">${features.map(Feature).join("")}</div>
    <div class="value-bottom reveal"><p>${check} Regularne prace domowe <span>+</span> materiały <span>+</span> wskazówki do dalszej nauki</p>${purchase("Chcę tak się uczyć")}</div>
  </div></section>
  <section class="beyond-section"><div class="container beyond-inner">
    <div class="beyond-heading reveal"><p class="eyebrow">MATURA TO POCZĄTEK</p><h2>Angielski zostaje. <br><span class="purple">Dużo dłużej niż wynik.</span></h2><span class="beyond-star" aria-hidden="true">${star}</span></div>
    <div class="beyond-content reveal"><p>Na wyjeździe. Na studiach. W pierwszej pracy. Uczysz się języka, z którego naprawdę korzystasz również po egzaminie.</p><div class="word-tags"><span>swobodne rozmowy ↗</span><span>podróże</span><span>studia za granicą</span><span>filmy bez napisów</span><span>nowe możliwości</span></div></div>
  </div></section>`;
}

export function Teacher() {
  return `<section id="prowadzaca" class="section teacher-section"><div class="container teacher-grid">
    <div class="teacher-visual reveal"><div class="teacher-photo"><img src="${course.aboutImage}" alt="Prowadząca kurs uśmiechająca się podczas pracy z laptopem" width="1300" height="1733" loading="lazy"></div><span class="teacher-sticker">Po Twojej stronie.<span aria-hidden="true">${star}</span></span><span class="handwritten teacher-note">Najpierw człowiek. <br>Potem podręcznik.</span></div>
    <div class="teacher-copy reveal">${eyebrow("04", "POZNAJMY SIĘ")}<h2>Poznaj osobę, która pomoże Ci przejść przez przygotowania <span class="purple ink-underline">krok po kroku.</span></h2>
      <div class="teacher-details"><h3>${esc(teacher.name)}</h3><p>${esc(teacher.bio)}</p><p>${esc(teacher.background)}</p><p>${esc(teacher.approach)}</p></div>
      <p class="teacher-signature handwritten">Dobry wynik. I angielski na życie.</p>
    </div>
  </div></section>`;
}

export function SocialProof() {
  return `<section id="opinie" class="proof-section" aria-labelledby="opinie-title"><div class="container">
 <div class="reviews-heading reveal"><div><p class="small-label">WIADOMOŚCI OD KURSANTEK</p><h2 id="opinie-title">Małe kroki. <br><span class="purple">Wielkie „udało się”.</span></h2></div><p>Więcej pewności, mniej stresu i angielski, który zaczyna mieć sens. Zobacz, co piszą o naszych zajęciach.</p></div>
 <div class="reviews-toolbar"><span>Przesuń i poznaj kolejne historie <span aria-hidden="true">↔</span></span><div class="reviews-controls"><button type="button" data-review-prev aria-label="Poprzednia opinia" aria-controls="reviews-track">${arrow}</button><span class="reviews-count" aria-live="polite" aria-atomic="true">1 / ${testimonials.length}</span><button type="button" data-review-next aria-label="Następna opinia" aria-controls="reviews-track">${arrow}</button></div></div>
 <div class="reviews-track" id="reviews-track" tabindex="0" role="region" aria-label="Opinie kursantek — przewijaj strzałkami lub przesuń palcem">${testimonials.map((t, i) => `<figure class="review-card" role="group" aria-label="Opinia ${i + 1} z ${testimonials.length}"><figcaption><span class="review-index">0${i + 1}</span><strong>${esc(t.title)}</strong>${sparkle}</figcaption><blockquote class="review-excerpt">„${esc(t.quote.length > 210 ? t.quote.slice(0, t.quote.lastIndexOf(" ", 210)) + "…" : t.quote)}”</blockquote><button type="button" class="review-image" data-review-open="${i}" aria-label="Otwórz pełną opinię: ${esc(t.title)}"><img src="/images/reviews/${t.id}.webp" alt="${esc(t.quote)}" width="${t.width}" height="${t.height}" style="aspect-ratio:${t.width}/${t.height}" loading="lazy"></button><button type="button" class="review-source" data-review-open="${i}">Zobacz całą wiadomość ↗</button></figure>`).join("")}</div>
 <p class="reviews-note">Indywidualne doświadczenia kursantek. Wynik egzaminu zależy także od własnej pracy i zaangażowania.</p>
 </div><dialog id="review-dialog" aria-labelledby="review-dialog-title"><button class="dialog-close" aria-label="Zamknij opinię" autofocus>×</button><h2 id="review-dialog-title"></h2><img id="review-original" alt=""><p id="review-transcript"></p></dialog></section>`;
}
