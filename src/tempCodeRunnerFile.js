import Account from './Account.js';
import Statement from './Statement.js'

// New account is created
const account1 = new Account("John Smith's Current Account", "JS1234");



// Account details are displayed when program is run
console.log(account1.displayAccountDetails());

console.log(account1.runningBalance());

// Deposit made when account balance is 0, and new balance returned
console.log(account1.makeDeposit(200, "14/01/2012"));

// Deposit made to existing balance, and cumulative balance is returned
console.log(account1.makeDeposit(100, "13/01/2012"));

// Invalid deposit returns error message
console.log(account1.makeDeposit(-20));

// Deposit is being added to an array of transactions
console.log(account1.storeTransactions());

// More transactions
account1.makeDeposit(500, "15/02/2015");
account1.makeWithdrawal(50, "17/03/2016");
account1.makeWithdrawal(120, "20/04/2017");
account1.makeDeposit(750, "18/05/2018");

console.log(account1.storeTransactions());

// Display running balance
// const totalTransactions = account1.storeTransactions();
// console.log(totalTransactions);
console.log(account1.runningBalance());


let statement = new Statement(account1);
console.log(statement.formatStatement());

