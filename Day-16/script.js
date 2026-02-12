// 1️⃣ Title Case Function
const toTitleCase = (text) => {
    return text
        .trim()
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};

// 2️⃣ Vowel Count Function
const countVowelsInText = (text) => {
    const vowels = "aeiou";
    let count = 0;

    for (let char of text.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
};

// 3️⃣ Secret Message Generator
const secretMessage = (text) => {
    const bannedWords = ["bad", "secret", "hide", "dumb"];
    let words = text.split(" ");

    let filteredWords = words.map(word => {
        if (bannedWords.includes(word.toLowerCase())) {
            return "***";
        }
        return word;
    });

    return filteredWords.join(" ");
};

// UI Functions
function formatTitleCase() {
    const input = document.getElementById("userText").value;
    document.getElementById("result").innerText = toTitleCase(input);
}

function countVowels() {
    const input = document.getElementById("userText").value;
    const count = countVowelsInText(input);
    document.getElementById("result").innerText = `Vowel Count: ${count}`;
}

function generateSecret() {
    const input = document.getElementById("userText").value;
    document.getElementById("result").innerText = secretMessage(input);
}
