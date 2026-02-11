const output = document.getElementById("output");
const input = document.getElementById("commandInput");

const MASTER_PIN = "0218";
const SECRET_WORD = "matrix";
const UNIT_PRICE = 50;

let balance = 1000;
let attempts = 3;
let loggedIn = false;

// STATES:
// login
// main
// bank
// bank-deposit
// bank-withdraw
// shop
// vault
let currentState = "login";

function print(text) {
  output.innerHTML += text + "\n";
  output.scrollTop = output.scrollHeight;
}

// Boot sequence
print("=== SYSTEM BOOT INITIATED ===");
print("ENTER MASTER PIN:");

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const command = input.value.trim();
    input.value = "";
    handleInput(command);
  }
});

function handleInput(command) {

  // ---------------- LOGIN ----------------
  if (currentState === "login") {
    if (command === MASTER_PIN) {
      loggedIn = true;
      currentState = "main";
      print("\nACCESS GRANTED");
      print("Welcome to Virtual Core v1.0");
      print("Available commands: bank, shop, vault, exit");
    } else {
      attempts--;
      print("ACCESS DENIED. Attempts left: " + attempts);

      if (attempts === 0) {
        print("SYSTEM SELF-DESTRUCT");
        input.disabled = true;
      }
    }
    return;
  }

  // ---------------- MAIN MENU ----------------
  if (currentState === "main") {
    switch (command.toLowerCase()) {

      case "bank":
        currentState = "bank";
        print("\nBANK MODULE");
        print("Commands: deposit, withdraw, balance, back");
        break;

      case "shop":
        currentState = "shop";
        print("\nSMART SHOP");
        print("Enter quantity:");
        break;

      case "vault":
        currentState = "vault";
        print("\nVAULT ACCESS");
        print("HINT: Famous simulation movie.");
        print("Enter secret word:");
        break;

      case "exit":
        print("Shutting down Virtual Core...");
        input.disabled = true;
        break;

      default:
        print("UNKNOWN COMMAND");
    }
    return;
  }

  // ---------------- BANK MODULE ----------------
  if (currentState === "bank") {
    switch (command.toLowerCase()) {

      case "deposit":
        currentState = "bank-deposit";
        print("Enter deposit amount:");
        break;

      case "withdraw":
        currentState = "bank-withdraw";
        print("Enter withdrawal amount:");
        break;

      case "balance":
        print("Current Balance: " + balance.toFixed(2));
        break;

      case "back":
        currentState = "main";
        print("Returning to main menu.");
        break;

      default:
        print("UNKNOWN BANK COMMAND");
    }
    return;
  }

  // ----------- BANK DEPOSIT STATE -----------
  if (currentState === "bank-deposit") {
    const amount = parseFloat(command);

    if (isNaN(amount) || amount <= 0) {
      print("INVALID AMOUNT");
    } else {
      balance += amount;
      print("DEPOSIT SUCCESSFUL");
      print("New Balance: " + balance.toFixed(2));
    }

    currentState = "bank";
    return;
  }

  // ----------- BANK WITHDRAW STATE -----------
  if (currentState === "bank-withdraw") {
    const amount = parseFloat(command);

    if (isNaN(amount) || amount <= 0) {
      print("INVALID AMOUNT");
    } else if (amount > balance) {
      print("INSUFFICIENT FUNDS");
    } else {
      balance -= amount;
      print("WITHDRAWAL SUCCESSFUL");
      print("New Balance: " + balance.toFixed(2));
    }

    currentState = "bank";
    return;
  }

  // ---------------- SHOP MODULE ----------------
  if (currentState === "shop") {

    const quantity = parseInt(command);

    if (isNaN(quantity) || quantity <= 0) {
      print("INVALID QUANTITY");
      currentState = "main";
      return;
    }

    let discount = 0;

    if (quantity >= 6 && quantity <= 10) {
      discount = 0.10;
    } else if (quantity >= 11) {
      discount = 0.20;
    }

    const total = quantity * UNIT_PRICE;
    const finalPrice = total - (total * discount);

    if (finalPrice > balance) {
      print("INSUFFICIENT FUNDS FOR PURCHASE");
    } else {
      balance -= finalPrice;
      print("PURCHASE SUCCESSFUL");
      print("Items: " + quantity);
      print("Discount: " + (discount * 100) + "%");
      print("Total Paid: " + finalPrice.toFixed(2));
      print("Remaining Balance: " + balance.toFixed(2));
    }

    currentState = "main";
    return;
  }

  // ---------------- VAULT MODULE ----------------
  if (currentState === "vault") {

    if (command.toLowerCase() === SECRET_WORD) {
      print("ACCESS GRANTED");
      print("Secret Message: Welcome, Neo.");
    } else {
      print("ACCESS DENIED");
    }

    currentState = "main";
    return;
  }
}
