document.getElementById("langSelector").addEventListener("change", function () {
    const selectedLang = this.value;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      el.textContent = translations[selectedLang][key];
    });
  });

  function changeLang(lang) {
    const langLabel = document.getElementById("currentLang");
    const langIcon = document.querySelector(".dropdown-toggle img");

    if (lang === "fr") {
      langLabel.innerText = "Français";
      langIcon.src = "https://flagcdn.com/w40/fr.png";
    } else if (lang === "en") {
      langLabel.innerText = "English";
      langIcon.src = "https://flagcdn.com/w40/gb.png";
    }

    // Appelle ici ta logique i18n Angular ou JS (par ex: translateService.use(lang))
    // translateService.use(lang); // pour Angular avec ngx-translate
  }

 