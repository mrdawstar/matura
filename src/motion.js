/** Progressive enhancement: content remains visible without JavaScript or motion. */
export function initSectionMotion(preference) {
  if (preference.matches || !("IntersectionObserver" in window)) return;

  const elements = [...document.querySelectorAll(".reveal")];
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.08, rootMargin: "0px 0px -18px 0px" },
  );

  for (const element of elements) {
    element.classList.add("will-reveal");
    observer.observe(element);
  }

  // Respect a change to the OS preference while the page is already open.
  preference.addEventListener("change", (event) => {
    if (!event.matches) return;
    observer.disconnect();
    elements.forEach((element) => element.classList.add("is-visible"));
  });
}
