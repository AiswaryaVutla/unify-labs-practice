const themeToggle = document.getElementById("themeToggle");
const languageSelect = document.getElementById("languageSelect");
const welcomeText = document.getElementById("welcomeText");

const STORAGE_KEY = "userSettings";

function loadSettings() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : { theme: "light", language: "en" };
}

function saveSettings(settings) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
}

function applyTheme(theme) {
  document.body.classList.remove("light", "dark");
  document.body.classList.add(theme);
  themeToggle.checked = theme === "dark";
}

function applyLanguage(lang) {
  const messages = {
    en: "Welcome!",
    es: "¡Bienvenido!",
    fr: "Bienvenue!"
  };

  languageSelect.value = lang;
  welcomeText.textContent = messages[lang];
}

// Initialize
let settings = loadSettings();
applyTheme(settings.theme);
applyLanguage(settings.language);

// Events
themeToggle.addEventListener("change", () => {
  settings.theme = themeToggle.checked ? "dark" : "light";
  applyTheme(settings.theme);
  saveSettings(settings);
});

languageSelect.addEventListener("change", () => {
  settings.language = languageSelect.value;
  applyLanguage(settings.language);
  saveSettings(settings);
});
