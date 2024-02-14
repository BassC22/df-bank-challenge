export default class Account {
    #name;
    #id;
    #balance;
    #transactions;

    constructor(name, id, balance = 0,) {
        this.#name = name;
        this.#id = id;
        this.#balance = balance;
        this.#transactions = [];
    }

    getName() {
        return this.#name;    
    }

    setName(newName) {
        this.#name = newName;
    }

    getId() {
        return this.#id;
    }

    setId(newId) {
        this.#id = newId;
    }
  
    getBalance() {
        return this.#balance;    
    }

    setBalance(newBalance) {
        this.#balance = newBalance;
    }

    displayAccountDetails() {
        return `Account name: ${this.#name}; Account ID: ${this.#id}; Account balance: ${this.#balance}`;
    }

    makeDeposit(amount, date) {
        if (isNaN(amount) || amount <= 0) {
            return "Invalid amount. Please deposit a numerical value over 0";
        }
        this.#balance += amount;
        let transaction = { type: "credit", amount, date, balance: this.#balance };
        this.#transactions.push(transaction);
        return `Deposit successful. Your new balance is: ${this.#balance}`;
    }

    makeWithdrawal(amount, date) {
        if (amount > this.#balance) {
            return `Insufficient funds. Please enter ${this.#balance} or less`
        }
        this.#balance -= amount;
        let transaction = { type: "debit", amount, date, balance: this.#balance };
        this.#transactions.push(transaction);
        return `Withdrawal successful. Your new balance is ${this.#balance}`;
    }

    storeTransactions() {
       return this.#transactions;
    }

    runningBalance() {
        return this.#balance;
    }


   
}