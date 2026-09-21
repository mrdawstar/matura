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

// Native scroll snapping works with touch, trackpads and keyboard controls.
const reviewsTrack = document.querySelector(".reviews-track");
const reviewCards = [...reviewsTrack.querySelectorAll(".review-card")];
const reviewPrev = document.querySelector("[data-review-prev]");
const reviewNext = document.querySelector("[data-review-next]");
let activeReview = 0;
function reviewPosition(card) {
  return Math.min(
    card.offsetLeft - reviewCards[0].offsetLeft,
    reviewsTrack.scrollWidth - reviewsTrack.clientWidth,
  );
}
function updateReviewControls() {
  activeReview = reviewCards.reduce(
    (best, card, index) =>
      Math.abs(reviewPosition(card) - reviewsTrack.scrollLeft) <
      Math.abs(reviewPosition(reviewCards[best]) - reviewsTrack.scrollLeft)
        ? index
        : best,
    0,
  );
  reviewPrev.disabled = reviewsTrack.scrollLeft < 2;
  reviewNext.disabled =
    reviewsTrack.scrollLeft >=
    reviewsTrack.scrollWidth - reviewsTrack.clientWidth - 2;
  document.querySelector(".reviews-count").textContent =
    `${activeReview + 1} / ${reviewCards.length}`;
}
function goToReview(index) {
  const card =
    reviewCards[Math.max(0, Math.min(index, reviewCards.length - 1))];
  reviewsTrack.scrollTo({
    left: reviewPosition(card),
    behavior: reduceMotion.matches ? "instant" : "smooth",
  });
}
reviewPrev.addEventListener("click", () => goToReview(activeReview - 1));
reviewNext.addEventListener("click", () => goToReview(activeReview + 1));
reviewsTrack.addEventListener("scroll", updateReviewControls, {
  passive: true,
});
reviewsTrack.addEventListener("keydown", (event) => {
  const keys = {
    ArrowLeft: activeReview - 1,
    ArrowRight: activeReview + 1,
    Home: 0,
    End: reviewCards.length - 1,
  };
  if (event.key in keys) {
    event.preventDefault();
    goToReview(keys[event.key]);
  }
});
window.addEventListener("resize", updateReviewControls);
updateReviewControls();

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
