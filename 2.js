function Account(accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
}

Account.prototype.deposit = function(amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited: $${amount}. New balance: $${this.balance}`);
    } else {
        console.log("Deposit amount must be positive.");
    }
};

Account.prototype.withdraw = function(amount) {
    if (amount > 0) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew: $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Insufficient funds.");
        }
    } else {
        console.log("Withdrawal amount must be positive.");
    }
};

Account.prototype.calculateCompoundInterest = function(rate, timesCompounded, years) {
    
    const principal = this.balance;
    const rateDecimal = rate / 100;
    const amount = principal * Math.pow((1 + rateDecimal / timesCompounded), timesCompounded * years);
    const interestEarned = amount - principal;
    console.log(`Interest earned after ${years} years: $${interestEarned.toFixed(2)}`);
    return interestEarned;
};

const myAccount = new Account("123456", 1000, "John Doe");

myAccount.deposit(500);
myAccount.withdraw(200);
myAccount.calculateCompoundInterest(5, 12, 10);


console.log("Initial Account Details:");
console.log(`Account Number: ${myAccount.accountNumber}`);
console.log(`Owner: ${myAccount.owner}`);
console.log(`Balance: $${myAccount.balance}`);
myAccount.deposit(500);


myAccount.withdraw(200); 

const interestEarned = myAccount.calculateCompoundInterest(5, 12, 10); // 5% interest compounded monthly for 10 years

console.log("Final Account Details:");
console.log(`Account Number: ${myAccount.accountNumber}`);
console.log(`Owner: ${myAccount.owner}`);
console.log(`Balance: $${myAccount.balance}`);
console.log(`Interest Earned: $${interestEarned.toFixed(2)}`);