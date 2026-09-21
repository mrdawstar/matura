import { testimonials } from "./testimonials.js";
import { initSectionMotion } from "./motion.js";
import { renderPage } from "./page.js";
import { course, legal, seo } from "./config.js";
document.title = seo.title;
for (const [selector, content] of [
  ["meta[name=description]", seo.description],
  ['meta[property="og:title"]', seo.socialTitle],
  ['meta[property="og:description"]', seo.socialDescription],
])
  document.querySelector(selector).content = content;
const app = document.querySelector("#app");
if (!app.children.length) app.innerHTML = renderPage();
const toggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");
function closeMenu() {
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Otwórz menu");
  navigation.classList.remove("open");
}
toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") !== "true";
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Zamknij menu" : "Otwórz menu");
  navigation.classList.toggle("open", open);
});
navigation
  .querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
    closeMenu();
    toggle.focus();
  }
});
document.addEventListener("click", (e) => {
  if (!e.target.closest(".header")) closeMenu();
});
document.querySelectorAll('input[name="level"]').forEach((input) =>
  input.addEventListener("change", () => {
    document.querySelector(".selected-level").textContent = course.levels.find(
      (level) => level.id === input.value,
    ).name;
  }),
);
const dialog = document.querySelector("#legal-dialog");
const legalLabels = {
  terms: "Regulamin",
  privacy: "Polityka prywatności",
  contact: "Kontakt",
  company: "Dane firmy",
};
dialog.setAttribute("aria-labelledby", "legal-title");
document.querySelectorAll("[data-legal]").forEach((button) =>
  button.addEventListener("click", () => {
    const key = button.dataset.legal;
    document.querySelector("#legal-title").textContent = legalLabels[key];
    document.querySelector("#legal-content").textContent = legal[key];
    dialog.showModal();
  }),
);
dialog
  .querySelectorAll("button")
  .forEach((button) => button.addEventListener("click", () => dialog.close()));
dialog.addEventListener("click", (e) => {
  if (e.target === dialog) {
    const box = dialog.getBoundingClientRect();
    if (
      e.clientX < box.left ||
      e.clientX > box.right ||
      e.clientY < box.top ||
      e.clientY > box.bottom
    )
      dialog.close();
  }
});
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
initSectionMotion(reduceMotion);
const hero = document.querySelector(".hero");
const art = document.querySelector(".hero-art");
hero.addEventListener("pointermove", (e) => {
  if (
    reduceMotion.matches ||
    !window.matchMedia("(min-width:1101px) and (pointer:fine)").matches
  )
    return;
  const rect = hero.getBoundingClientRect();
  art.style.setProperty(
    "--mx",
    `${(e.clientX - rect.left - rect.width / 2) / 150}px`,
  );
  art.style.setProperty(
    "--my",
    `${(e.clientY - rect.top - rect.height / 2) / 160}px`,
  );
});
hero.addEventListener("pointerleave", () => {
  art.style.setProperty("--mx", "0px");
  art.style.setProperty("--my", "0px");
});
const sticky = document.querySelector(".mobile-sticky");
if ("IntersectionObserver" in window) {
  const stickyObserver = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        sticky.classList.toggle("show", !entry.isIntersecting);
      }),
    { threshold: 0 },
  );
  stickyObserver.observe(document.querySelector(".hero-actions"));
}

// Three copies let native touch/trackpad scrolling loop seamlessly in both directions.
const reviewsTrack = document.querySelector(".reviews-track");
const originals = [...reviewsTrack.querySelectorAll(".review-card")];
const count = originals.length;
function copyReviews() {
  return originals.map((card) => {
    const copy = card.cloneNode(true);
    copy.setAttribute("aria-hidden", "true");
    copy.querySelectorAll("button").forEach((button) => (button.tabIndex = -1));
    return copy;
  });
}
reviewsTrack.prepend(...copyReviews());
reviewsTrack.append(...copyReviews());
const reviewCards = [...reviewsTrack.querySelectorAll(".review-card")];
const position = (index) =>
  reviewCards[index].offsetLeft - reviewCards[0].offsetLeft;
const step = () => position(1);
let settling;
let touching = false;
function jump(left) {
  reviewsTrack.style.scrollSnapType = "none";
  reviewsTrack.scrollTo({ left, behavior: "instant" });
  requestAnimationFrame(() => {
    reviewsTrack.style.scrollSnapType = "";
  });
}
function normalizeReviews() {
  if (touching) return;
  const cycle = step() * count;
  if (reviewsTrack.scrollLeft < cycle - 1)
    jump(reviewsTrack.scrollLeft + cycle);
  else if (reviewsTrack.scrollLeft >= cycle * 2 - 1)
    jump(reviewsTrack.scrollLeft - cycle);
}
function moveReview(direction) {
  normalizeReviews();
  const index = Math.round(reviewsTrack.scrollLeft / step());
  reviewsTrack.scrollTo({
    left: position(index + direction),
    behavior: reduceMotion.matches ? "instant" : "smooth",
  });
}
document
  .querySelector("[data-review-prev]")
  .addEventListener("click", () => moveReview(-1));
document
  .querySelector("[data-review-next]")
  .addEventListener("click", () => moveReview(1));
reviewsTrack.addEventListener(
  "scroll",
  () => {
    clearTimeout(settling);
    settling = setTimeout(normalizeReviews, 160);
  },
  { passive: true },
);
reviewsTrack.addEventListener("scrollend", normalizeReviews);
reviewsTrack.addEventListener(
  "touchstart",
  () => {
    touching = true;
  },
  { passive: true },
);
reviewsTrack.addEventListener(
  "touchend",
  () => {
    touching = false;
    clearTimeout(settling);
    settling = setTimeout(normalizeReviews, 160);
  },
  { passive: true },
);
reviewsTrack.addEventListener(
  "touchcancel",
  () => {
    touching = false;
    normalizeReviews();
  },
  { passive: true },
);
reviewsTrack.addEventListener("keydown", (event) => {
  if (event.target !== reviewsTrack) return;
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    event.preventDefault();
    moveReview(event.key === "ArrowLeft" ? -1 : 1);
  }
});
let trackWidth = reviewsTrack.clientWidth;
new ResizeObserver(() => {
  if (trackWidth !== reviewsTrack.clientWidth) {
    trackWidth = reviewsTrack.clientWidth;
    jump(position(count));
  }
}).observe(reviewsTrack);
jump(position(count));

const reviewDialog = document.querySelector("#review-dialog");
document.querySelectorAll("[data-review-open]").forEach((button) =>
  button.addEventListener("click", () => {
    const review = testimonials[Number(button.dataset.reviewOpen)];
    document.querySelector("#review-dialog-title").textContent = review.title;
    const original = document.querySelector("#review-original");
    original.src = `/images/reviews/${review.id}.webp`;
    original.alt = `Oryginalna wiadomość kursantki: ${review.title}`;
    document.querySelector("#review-transcript").textContent = review.quote;
    reviewDialog.showModal();
  }),
);
reviewDialog
  .querySelector(".dialog-close")
  .addEventListener("click", () => reviewDialog.close());
reviewDialog.addEventListener("click", (event) => {
  if (event.target === reviewDialog) {
    const r = reviewDialog.getBoundingClientRect();
    if (
      event.clientX < r.left ||
      event.clientX > r.right ||
      event.clientY < r.top ||
      event.clientY > r.bottom
    )
      reviewDialog.close();
  }
});

await import("./return-position.js");
