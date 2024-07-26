//Task - 09: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

class Account {
    #balance;
  
    constructor(initialBalance) {
      this.#balance = initialBalance;
    }
  
    // Method to deposit money
    deposit(amount) {
      this.#balance += amount;
    }
  
    // Method to withdraw money
    withdraw(amount) {
      if (amount > this.#balance) {
        throw new Error('Insufficient funds');
      }
      this.#balance -= amount;
    }
  
    // Method to get the current balance
    getBalance() {
      return this.#balance;
    }
}
  
//Task - 10: Create a instance of the Account class and test the deposit and withdraw methods, logging balance after each operation.
try {
    const myAccount = new Account(1000);
  
    console.log(`Initial Balance: ${myAccount.getBalance()}`); // Initial Balance: 1000
  
    myAccount.deposit(500);
    console.log(`After depositing 500: ${myAccount.getBalance()}`); // After depositing 500: 1500
  
    myAccount.withdraw(200);
    console.log(`After withdrawing 200: ${myAccount.getBalance()}`); // After withdrawing 200: 1300
  
    myAccount.withdraw(2000); // This will throw an error
} catch (error) {
    console.error(error.message);
}
  


