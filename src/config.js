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
export const instagramUrl =
  "https://www.instagram.com/nika.wise?igsh=MWhjYXg2YWo1NG4wdQ%3D%3D&utm_source=qr";
export const teacher = {
  name: "Veronika Wise",
  bio: "Języki obce i komunikacja międzynarodowa od zawsze były ogromną częścią mojego życia. Od kilku lat pomagam kursantom mówić swobodnie, pewnie i bez strachu przed popełnianiem błędów.",
  background:
    "Ukończyłam studia filologiczne i lingwistyczne, znam 6 języków obcych i pracowałam jako tłumaczka międzynarodowa oraz stewardessa. Wiem, jak wiele daje angielski, z którego naprawdę potrafisz korzystać.",
  approach:
    "Razem z moim zespołem nauczycielek pomagamy Ci przygotować się do matury: oswoić arkusze, uporządkować gramatykę, ćwiczyć słuchanie i pisać zgodnie z wymaganiami egzaminu. A przy tym przełamywać barierę w mówieniu — żeby angielski został z Tobą również po maturze.",
};
export const legal = {
  contact:
    "Veronika Bubnova\nveronikawise.school@gmail.com\nInstagram: @nika.wise",
  company:
    "Veronika Bubnova\nNIP: 5361995484\nTargowa 2\n05-120 Legionowo\nE-mail: veronikawise.school@gmail.com\nInstagram: @nika.wise",
  termsUrl: "/regulamin.html",
  privacyUrl: "/polityka-prywatnosci.html",
  contactEmail: "veronikawise.school@gmail.com",
};
export const seo = {
  title: `${course.name} ${course.year} | ${course.price} zł miesięcznie`,
  description: `Przygotuj się do matury podstawowej lub rozszerzonej z angielskiego ${course.year}. Kurs online, maks. 6 osób, 60 minut tygodniowo i indywidualny feedback. ${course.price} zł/mies.`,
  socialTitle: `Angielski. Matura ${course.year} — Twój następny krok.`,
  socialDescription: `Kurs online w małej grupie. Podstawa lub rozszerzenie. Cotygodniowa praktyka, materiały i feedback za ${course.price} zł miesięcznie.`,
};
