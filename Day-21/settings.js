const STORAGE_KEY = "userSettings";

// Load settings from localStorage
export function loadSettings() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : { theme: "light", language: "en" };
}

// Save settings to localStorage
export function saveSettings(settings) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
}
