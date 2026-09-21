// Functional, tab-local state: restore the reading position after visiting legal pages.
const key = "matura:return-position";
const isCourse =
  location.pathname === "/" || location.pathname === "/index.html";
function readPosition() {
  try {
    return JSON.parse(sessionStorage.getItem(key));
  } catch {
    return null;
  }
}
if (isCourse) {
  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");
    if (
      !link ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey ||
      event.altKey ||
      link.target === "_blank"
    )
      return;
    const url = new URL(link.href);
    if (
      url.origin !== location.origin ||
      !["/regulamin.html", "/polityka-prywatnosci.html"].includes(url.pathname)
    )
      return;
    try {
      sessionStorage.setItem(
        key,
        JSON.stringify({ y: scrollY, time: Date.now() }),
      );
    } catch {
      /* Browser history still restores position when storage is unavailable. */
    }
  });
  async function restorePosition() {
    const saved = readPosition();
    if (
      !saved ||
      !Number.isFinite(saved.y) ||
      Date.now() - saved.time > 30 * 60 * 1000
    )
      return;
    const previous = history.scrollRestoration;
    history.scrollRestoration = "manual";
    await document.fonts.ready;
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        window.scrollTo({ top: saved.y, behavior: "instant" });
        try {
          sessionStorage.removeItem(key);
        } catch {
          /* Storage may be disabled. */
        }
        history.scrollRestoration = previous;
      }),
    );
  }
  window.addEventListener("pageshow", restorePosition);
  restorePosition();
}
