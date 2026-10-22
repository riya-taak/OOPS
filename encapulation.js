class BankAccount {
    #balance = 0; // private property

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }

    withdraw(amount)
    {
        this.#balance -= amount;
    }
}

const account = new BankAccount();
const account2 = new BankAccount();

account2.deposit(1500);
account2.withdraw(200);


account.deposit(500);


console.log(account.getBalance()); 


account.deposit(500);
console.log(account.getBalance()); 

account.withdraw(200);
console.log(account.getBalance()); 
console.log(account2.getBalance()); 



// Data and methods together; control access