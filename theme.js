(function () {
  var STORAGE_KEY = "theme";
  var root = document.documentElement;

  function label(theme) {
    return theme === "dark" ? "Light mode" : "Dark mode";
  }

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;

    btn.textContent = label(root.getAttribute("data-theme"));

    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem(STORAGE_KEY, next);
      btn.textContent = label(next);
    });
  });
})();
