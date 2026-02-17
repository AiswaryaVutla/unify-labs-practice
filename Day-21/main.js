import { loadSettings, saveSettings } from "./settings.js";

const themeToggle = document.getElementById("themeToggle");
const languageSelect = document.getElementById("languageSelect");
const welcomeText = document.getElementById("welcomeText");

let settings = loadSettings();

// Apply theme
function applyTheme(theme) {
  document.body.classList.remove("light", "dark");
  document.body.classList.add(theme);
  themeToggle.checked = theme === "dark";
}

// Apply language
function applyLanguage(lang) {
  const messages = {
    en: "Welcome!",
    es: "¡Bienvenido!",
    fr: "Bienvenue!"
  };

  languageSelect.value = lang;
  welcomeText.textContent = messages[lang];
}

// Initialize UI
applyTheme(settings.theme);
applyLanguage(settings.language);

// Event: Theme Toggle
themeToggle.addEventListener("change", () => {
  settings.theme = themeToggle.checked ? "dark" : "light";
  applyTheme(settings.theme);
  saveSettings(settings);
});

// Event: Language Change
languageSelect.addEventListener("change", () => {
  settings.language = languageSelect.value;
  applyLanguage(settings.language);
  saveSettings(settings);
});
