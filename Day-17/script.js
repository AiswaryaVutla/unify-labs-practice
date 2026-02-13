function processData() {

    // Mock Database
    const tasks = [
        { id: 1, name: "Design Landing Page", status: "Completed" },
        { id: 2, name: "Fix Login Bug", status: "Pending" },
        { id: 3, name: "API Integration", status: "Completed" },
        { id: 4, name: "Database Optimization", status: "Pending" }
    ];

    const prices = [500, 1200, 750, 300];

    const expenses = [2000, 3500, 1800, 4000];

    // 1️⃣ FILTER - Separate Completed & Pending
    const completedTasks = tasks.filter(task => task.status === "Completed");
    const pendingTasks = tasks.filter(task => task.status === "Pending");

    // 2️⃣ MAP - Add 18% Tax
    const taxRate = 0.18;
    const pricesWithTax = prices.map(price => price + (price * taxRate));

    // 3️⃣ REDUCE - Calculate Total Budget
    const totalBudget = expenses.reduce((total, expense) => total + expense, 0);

    // Display Results
    const completedList = document.getElementById("completedList");
    const pendingList = document.getElementById("pendingList");
    const priceList = document.getElementById("priceList");
    const totalBudgetDisplay = document.getElementById("totalBudget");

    completedList.innerHTML = "";
    pendingList.innerHTML = "";
    priceList.innerHTML = "";

    completedTasks.forEach(task => {
        completedList.innerHTML += `<li>${task.name}</li>`;
    });

    pendingTasks.forEach(task => {
        pendingList.innerHTML += `<li>${task.name}</li>`;
    });

    pricesWithTax.forEach(price => {
        priceList.innerHTML += `<li>₹${price.toFixed(2)}</li>`;
    });

    totalBudgetDisplay.textContent = `₹${totalBudget}`;
}
