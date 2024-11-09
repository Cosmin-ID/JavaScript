export default class bankAccount {
    constructor (accountNumber, accountHolder, balance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit (amount) {
        this.balance = this.balance + amount;
        console.log(`Amount deposited: £${amount}`);
        console.log(`Availiable balance: £${this.balance}`);
    }

    withdraw (amount) {
        if (this.balance < amount) {
            console.log("Insufficient funds.");
        } else {
            this.balance -= amount;
            console.log(`withdrawn: £${amount}`);
            console.log(`Availiable balace: £${this.balance}`);
        }
    }

    checkBalance() {
        console.log(`${this.accountHolder}`)
        console.log(`Availiable balace for account number ${this.accountNumber}: £${this.balance}`);
    }
}

