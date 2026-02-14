class Pet {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this._health = 80;
        this._energy = 80;
    }

    // Getter for health
    get health() {
        return this._health;
    }

    // Setter for health (keeps between 0–100)
    set health(value) {
        this._health = Math.max(0, Math.min(100, value));
    }

    // Getter for energy
    get energy() {
        return this._energy;
    }

    // Setter for energy (keeps between 0–100)
    set energy(value) {
        this._energy = Math.max(0, Math.min(100, value));
    }

    feed() {
        this.health += 10;
        this.energy += 5;
        return `${this.name} enjoyed the meal! 🍖`;
    }

    play() {
        if (this.energy <= 10) {
            return `${this.name} is too tired to play! 😴`;
        }

        this.energy -= 15;
        this.health += 5;
        return `${this.name} had fun playing! 🎾`;
    }

    getStatus() {
        if (this.health <= 0) {
            return `${this.name} needs urgent care! 🚑`;
        }
        if (this.energy <= 20) {
            return `${this.name} is feeling sleepy. 😴`;
        }
        return `${this.name} is happy and healthy! 😊`;
    }
}

// Create pet instance
const myPet = new Pet("Buddy", "Dog");

// DOM Elements
const petName = document.getElementById("petName");
const petType = document.getElementById("petType");
const healthBar = document.getElementById("healthBar");
const energyBar = document.getElementById("energyBar");
const healthValue = document.getElementById("healthValue");
const energyValue = document.getElementById("energyValue");
const statusMessage = document.getElementById("statusMessage");

function updateUI(message = "") {
    petName.textContent = myPet.name;
    petType.textContent = `Type: ${myPet.type}`;

    healthBar.style.width = `${myPet.health}%`;
    energyBar.style.width = `${myPet.energy}%`;

    healthValue.textContent = `${myPet.health}%`;
    energyValue.textContent = `${myPet.energy}%`;

    statusMessage.textContent = message || myPet.getStatus();
}

// Event Listeners
document.getElementById("feedBtn").addEventListener("click", () => {
    const message = myPet.feed();
    updateUI(message);
});

document.getElementById("playBtn").addEventListener("click", () => {
    const message = myPet.play();
    updateUI(message);
});

// Initial UI Load
updateUI();
