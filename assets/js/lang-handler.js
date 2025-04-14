document.getElementById("langSelector").addEventListener("change", function () {
    const selectedLang = this.value;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      el.textContent = translations[selectedLang][key];
    });
  });

