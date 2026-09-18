export const course = {
  name: "Kurs maturalny z angielskiego",
  year: 2027,
  price: 299,
  stripeUrl: "https://buy.stripe.com/14A7sN9gU48r7pt4Fb6Na0Z",
  facts: ["Online", "do 6 osób", "1× w tygodniu", "60 minut"],
  levels: [
    {
      id: "podstawa",
      name: "Matura podstawowa",
      description:
        "Uporządkuj podstawy. Oswój arkusz. Zbuduj pewność w pisaniu i mówieniu.",
    },
    {
      id: "rozszerzenie",
      name: "Matura rozszerzona",
      description:
        "Pracuj nad precyzją języka, bardziej złożonymi zadaniami i rozbudowanymi wypowiedziami.",
    },
  ],
  includes: [
    "Zajęcia online raz w tygodniu",
    "60 minut wspólnej pracy",
    "Maksymalnie 6 osób w grupie",
    "Wszystkie materiały edukacyjne",
    "Regularne prace domowe",
    "Feedback z pisania i mówienia",
    "Konwersacje i praktyczne ćwiczenia",
    "Przygotowanie do wybranego poziomu matury",
  ],
  confirmation:
    "Po płatności skontaktujemy się z Tobą, aby potwierdzić poziom i dopasować termin grupy.",
  heroImage: "/images/teacher-hero-lavender.webp",
  aboutImage: "/images/teacher-about.webp",
};
export const teacher = {
  // UZUPEŁNIJ: wyłącznie prawdziwe, zweryfikowane dane prowadzącej.
  name: "[Imię i nazwisko prowadzącej]",
  bio: "[Krótki opis prowadzącej — do uzupełnienia]",
  qualifications: "[Kwalifikacje — do uzupełnienia]",
  experience: "[Doświadczenie — do uzupełnienia]",
  quote: "[Osobisty cytat prowadzącej — do uzupełnienia]",
};
// UZUPEŁNIJ: dodaj wyłącznie autentyczne opinie i wyniki za zgodą autorów.
export const testimonials = []; // { quote, name, context }
export const results = []; // { value, label }
export const legal = {
  terms: null,
  privacy: null,
  contact: null,
  company: null,
  // Uzupełnij teksty powyżej albo docelowe adresy dokumentów poniżej.
  termsUrl: null,
  privacyUrl: null,
  contactEmail: null,
};
export const seo = {
  title: `${course.name} ${course.year} | ${course.price} zł miesięcznie`,
  description: `Przygotuj się do matury podstawowej lub rozszerzonej z angielskiego ${course.year}. Kurs online, maks. 6 osób, 60 minut tygodniowo i indywidualny feedback. ${course.price} zł/mies.`,
  socialTitle: `Angielski. Matura ${course.year} — Twój następny krok.`,
  socialDescription: `Kurs online w małej grupie. Podstawa lub rozszerzenie. Cotygodniowa praktyka, materiały i feedback za ${course.price} zł miesięcznie.`,
};
