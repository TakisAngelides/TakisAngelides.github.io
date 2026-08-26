(function () {
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");
  const stored = localStorage.getItem("theme");
  if (stored) root.setAttribute("data-theme", stored);

  toggle.addEventListener("click", () => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const current = root.getAttribute("data-theme") || (prefersDark ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  const dialog = document.getElementById("photo-dialog");
  const photoBtn = document.getElementById("photo-btn");
  const closeBtn = document.getElementById("photo-close");
  photoBtn.addEventListener("click", () => dialog.showModal());
  closeBtn.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) dialog.close();
  });
})();
