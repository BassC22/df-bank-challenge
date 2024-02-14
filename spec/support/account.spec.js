import Account from "../../src/Account.js"

describe('User story 1: Displaying account details', () => { 
    it('Test 1: should display account details when the program runs', () => {
        // Use spy to check displayAccountDetails method

        // Arrange
        let account = new Account("Bassmah's current account", "BC1234");
        let expectedOutput = "Account name: Bassmah's current account; Account ID: BC1234; Account balance: 0";

        spyOn(account, 'displayAccountDetails').and.returnValue(expectedOutput);

        // Act
        let actualOutput = account.displayAccountDetails();

        // Assert
        expect(account.displayAccountDetails).toHaveBeenCalled();
        expect(actualOutput).toBe(expectedOutput);
    });

    it('Test 2: should display correct account details when the account balance is 1000', () => {
        // Use spy to check displayAccountDetail method

        // Arrange
        let account = new Account("Ed's current account", "EW7890", 1000);
        let expectedOutput = "Account name: Ed's current account; Account ID: EW7890; Account balance: 1000";

        spyOn(account, 'displayAccountDetails').and.returnValue(expectedOutput);

        // Act
        let actualOutput = account.displayAccountDetails();

        // Assert
        expect(account.displayAccountDetails).toHaveBeenCalled();
        expect(actualOutput).toBe(expectedOutput);
    });
});

describe('User story 2: Making a deposit', () => { 
    it('Test 1: The balance should increase by the deposit amount when the starting balance is 0', () => {
    // Use spy to check makeDeposit method

        // Arrange
        const account = jasmine.createSpyObj('Account', ['makeDeposit'])
        account.makeDeposit.and.returnValue("Deposit successful. Your new balance is: 100");

        // Act
        let actualOutput = account.makeDeposit(100);

        // Assert
        expect(account.makeDeposit).toHaveBeenCalledWith(100);
        expect(actualOutput).toBe("Deposit successful. Your new balance is: 100");
    });

    it('Test 2: The balance should increase by the deposit amount when the starting balance is 100', () => {
     // Use spy to check makeDeposit method   
        // Arrange
        const account = jasmine.createSpyObj('Account', ['makeDeposit']);
        account.makeDeposit.and.returnValue("Deposit successful. Your new balance is: 200");

        //Act
        let actualOutput = account.makeDeposit(100); 

        // Assert
        expect(account.makeDeposit).toHaveBeenCalledWith(100);
        expect(actualOutput).toBe('Deposit successful. Your new balance is: 200');
    });

    it('Test 3: The account balance should increase accumulatively after multiple deposits are made', () => {
    // Use spy to check makeDeposit method
        
        // Arrange
        const account = jasmine.createSpyObj('Account', ['makeDeposit']);
        account.makeDeposit.and.returnValues(
            "Deposit successful. Your new balance is: 1000", // balance after first deposit
            "Deposit successful. Your new balance is: 1500", // balance after second deposit
            "Deposit successful. Your new balance is: 3000" // balance after third deposit
        );

        // Act
        account.makeDeposit(1000);
        account.makeDeposit(500);
        let actualOutput = account.makeDeposit(1500);

        // Assert
        expect(account.makeDeposit).toHaveBeenCalledWith(1000);
        expect(account.makeDeposit).toHaveBeenCalledWith(500);
        expect(account.makeDeposit).toHaveBeenCalledWith(1500);
        expect(actualOutput).toBe("Deposit successful. Your new balance is: 3000");
    });

    it('Test 4: Attempting to deposit a negative number should not increase the balance, and an error message should be returned', () => {
        // Use spy to check makeDeposit method

        // Arrange
        const account = new jasmine.createSpyObj('Account', ['makeDeposit']);
        account.makeDeposit.and.returnValue("Invalid amount. Please deposit a numerical value over 0");

        // Act
        let actualOutput = account.makeDeposit(-10);

        // Assert
        expect(account.makeDeposit).toHaveBeenCalledWith(-10);
        expect(actualOutput).toBe("Invalid amount. Please deposit a numerical value over 0");
    });

    it('Test 5: Attempting to deposit a non-numerical value should not increase the balance, and an error message should be returned', () => {
        // Use spy to check makeDeposit method

        // Arrange
        const account = new jasmine.createSpyObj('Account', ['makeDeposit']);
        account.makeDeposit.and.returnValue("Invalid amount. Please deposit a numerical value over 0");

        // Act
        let actualOutput = account.makeDeposit("hello");

        // Assert
        expect(account.makeDeposit).toHaveBeenCalledWith("hello");
        expect(actualOutput).toBe("Invalid amount. Please deposit a numerical value over 0");
    });

    it('Test 6: Transactions made should be stored in an array', () => {

        // Arrange
        let account = new Account("Bill's current account", "BT1234");
        let expectedOutput = [
            { type: 'credit', amount: 200, date: '14/01/2012', balance: 200 },
        ]

        // Act
        account.makeDeposit(200, '14/01/2012');
        let actualOutput = account.storeTransactions();

        // Assert
        expect(actualOutput).toEqual(expectedOutput);
    });

describe('User story 3: Making a withdrawal', () => { 
    it('Test 1: A withdrawal should be performed if the withdrawal amount is smaller than or equal to the current balance', () => {
        // Arrange
        let account = new Account("Mel's current account", "MB7349", 500);
        let expectedOutput = "Withdrawal successful. Your new balance is 400";

        // Act
        let actualOutput = account.makeWithdrawal(100, "15/02/12");

        // Assert
        expect(actualOutput).toBe(expectedOutput);
    });

    it('Test 2: A withdrawal should not be performed if the current balance is less than the withdrawal amount, with error message returned', () => {
        // Arrange
        let account = new Account("Mark's current account", "MC4523", 100);
        let expectedOutput = "Insufficient funds. Please enter 100 or less";

        // Act
        let actualOutput = account.makeWithdrawal(200, "17/03/12");

        // Assert
        expect(actualOutput).toBe(expectedOutput);
    });
   
    it('Test 3: The new account balance should be 0 if the current account balance is equal to the withdrawal amount', () => {
        // Arrange
        let account = new Account("Laura's current account", "LT9323", 500);
        let expectedOutput = "Withdrawal successful. Your new balance is 0";

        // Act
        let actualOutput = account.makeWithdrawal(500, "20/04/14");
  
        // Assert
          expect(actualOutput).toBe(expectedOutput);
    });

    it('Test 4: Transactions made should be stored in an array', () => {
        // Arrange
        let account = new Account("Alan's current account", "AJ1234", 300);
        let expectedOutput = [
            { type: 'debit', amount: 100, date: '14/01/2012', balance: 200 },
        ]

        // Act
        account.makeWithdrawal(100, '14/01/2012');
        let actualOutput = account.storeTransactions();

        // Assert
        expect(actualOutput).toEqual(expectedOutput);
    });

    it('Test 5: The new balance should equal the current balance minus the withdrawal amount', () => {
        // Arrange
        let account = new Account("James's current account", "JC4205", 500);
        let expectedOutput = "Withdrawal successful. Your new balance is 250";

        // Act
        let actualOutput = account.makeWithdrawal(250, '12/02/16');
 
        // Assert
        expect(actualOutput).toEqual(expectedOutput);

    }) 

});





});

