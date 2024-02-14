import Account from "../../src/Account.js";

import { assertEquals } from "../test-framework.js";

// User story 1, test 1: Test that the account details are displayed when the program runs

let testName = "User story 1, test 1: Test that the account details are displayed when the program runs";

// Arrange
let account = new Account("Bassmah's current account", "BC1234");
let expectedOutput = "Account name: Bassmah's current account; Account ID: BC1234; Account balance: 0";
let actualOutput, testResult;

// Act
actualOutput = account.displayAccountDetails(account);


// Assert
testResult = assertEquals(expectedOutput, actualOutput);

// Report

console.log(`${testName} passes: ${testResult}; expected: ${expectedOutput}; actual: ${actualOutput}`);

// User story 2, test 1: Test that the balance increases by the deposit amount when the starting balance is 0

testName = "User story 2, test 1: Test that the balance increases by the deposit amount when the starting balance is 0";

// Arrange
account = new Account("John's current account", "JS5673");
expectedOutput = "Deposit successful. Your new balance is: 100"
actualOutput, testResult;

// Act
account.makeDeposit(100);

// Assert
testResult = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`${testName} passes: ${testResult}; expected: ${expectedOutput}; actual: ${actualOutput}`);



