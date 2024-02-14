import fs from 'fs';
import Account from './Account.js';
import Statement from './Statement.js'

let account = new Account();

account.makeDeposit(1000, "10/01/2012")
account.makeDeposit(2000, "13/01/2012");
account.makeWithdrawal(500, "14/01/2012");

let statement = new Statement(account);

// asked chatGPT for help on how to store data to a file
const storedData = JSON.stringify(account.storeTransactions(), null, 2);
const filePath = 'transactions.json';
fs.writeFileSync(filePath, storedData, 'utf8');

statement.printStatement();