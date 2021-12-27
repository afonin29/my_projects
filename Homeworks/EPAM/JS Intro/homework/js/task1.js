let initialAmount = +prompt('Enter the initial amount of money');
let years = +prompt('Enter the number of years');
let percentage = +prompt('Enter the percentage');
let totalAmount = initialAmount;
let totalProfit = 0;
const coefForPercentage = 100, minInitialAmount = 1000, maxPercentage = 100, minYears = 1, numbersAfterComma = 2;

for (let i = 0; i < years; i++) {
    let profit = totalAmount * percentage / coefForPercentage;
    totalProfit += profit;
    totalAmount += profit;
}

if (Number.isFinite(initialAmount) && Number.isInteger(years) && Number.isFinite(percentage) && 
initialAmount >= minInitialAmount && years >= minYears && percentage <= maxPercentage) {
    alert(`Initial amount: ${initialAmount}\nNumber of years: ${years}\nPercentage of year: ${percentage}\n\n` +
    `Total profit: ${totalProfit.toFixed(numbersAfterComma)}\n` + 
    `Total amount: ${totalAmount.toFixed(numbersAfterComma)}`);
} else {
    alert(`Invalid input data`);
}