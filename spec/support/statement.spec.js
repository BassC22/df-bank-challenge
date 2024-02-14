import Account from "../../src/Account.js"
import Statement from "../../src/Statement.js"

describe('Statement printing', () => {
    it('should print the statement with correct formatting', () => {
        // Arrange
        const account = new Account("John's current account", "JD5678", 1000);

        spyOn(account, 'storeTransactions').and.returnValue([
            { type: 'credit', amount: 200, date: '14/01/2012', balance: 1200 },
            { type: 'debit', amount: 300, date: '15/01/2012', balance: 900 },
        ]);

        const statement = new Statement(account);

        spyOn(console, 'log');

        // Act
        statement.printStatement();

        // Assert
        expect(console.log.calls.count()).toBe(3); 
        expect(console.log.calls.argsFor(0)[0]).toContain('date       ||  credit  ||  debit   ||  balance');
        expect(console.log.calls.argsFor(1)[0]).toContain('15/01/2012 ||           ||    300   ||      900');
        expect(console.log.calls.argsFor(2)[0]).toContain('14/01/2012 ||    200    ||           ||     1200');
    });
});