(function () {
  const root = document.documentElement;
  const stored = localStorage.getItem("igfox-lang");
  const lang = stored === "ru" ? "ru" : "en";

  function setLang(next) {
    root.lang = next;
    localStorage.setItem("igfox-lang", next);
    document.querySelectorAll(".ru").forEach(function (el) {
      el.hidden = next !== "ru";
    });
    document.querySelectorAll(".en").forEach(function (el) {
      el.hidden = next !== "en";
    });
    document.querySelectorAll("[data-lang-label]").forEach(function (el) {
      el.textContent = next === "ru" ? "EN" : "RU";
    });
  }

  setLang(lang);

  document.querySelectorAll("[data-toggle-lang]").forEach(function (el) {
    el.addEventListener("click", function () {
      setLang(root.lang === "ru" ? "en" : "ru");
    });
  });

  const panel = document.getElementById("mobile-panel");
  const openBtn = document.getElementById("open-menu");
  const closeBtn = document.getElementById("close-menu");
  function setMenu(open) {
    if (!panel) return;
    panel.classList.toggle("open", open);
    panel.setAttribute("aria-hidden", open ? "false" : "true");
    document.body.style.overflow = open ? "hidden" : "";
  }
  if (openBtn) openBtn.addEventListener("click", function () { setMenu(true); });
  if (closeBtn) closeBtn.addEventListener("click", function () { setMenu(false); });
  if (panel) {
    panel.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () { setMenu(false); });
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setMenu(false);
  });
})();
