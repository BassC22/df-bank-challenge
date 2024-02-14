import Account from './Account.js';

export default class Statement {
    #account;

    constructor(account) {
        this.#account = account;
    }

    formatStatement() {
        let statementTable = "date       ||  credit  ||  debit   ||  balance\n";

        // I asked chatGPT for help figuring out how to reverse the table using the rest operator

        let reversedTransactions = [...this.#account.storeTransactions()].reverse();

        reversedTransactions.forEach(transaction => {
            transaction.date;
            let formattedCredit = transaction.type === 'credit' ? transaction.amount.toFixed(2) : '';
            let formattedDebit = transaction.type === 'debit' ? transaction.amount.toFixed(2) : '';
            let formattedBalance = transaction.balance.toFixed(2)

            statementTable += `${transaction.date} || ${formattedCredit.padStart(8)} || ${formattedDebit.padStart(7)}  || ${formattedBalance.padStart(8)}\n`;
        
        });

        return statementTable
    }

    printStatement() {
        console.log(this.formatStatement());
    }
}