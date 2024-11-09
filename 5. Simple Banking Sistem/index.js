import bankAccount from "./bankAccount.js";

// BankAccount instances.
const account1 = new bankAccount (100000, "Wednesday Adams", 1000);
const account2 = new bankAccount (200000, "Thing", 100);
const account3 = new bankAccount (300000, "Morticia Adams", 800);

// Depositing.
account1.deposit(500);
account2.deposit(200);
account3.deposit(300);

//Withdrawing.
account1.withdraw(800);
account2.withdraw(500);
account3.withdraw(50);

//Checking Balance.
account1.checkBalance();
account2.checkBalance();
account3.checkBalance();
