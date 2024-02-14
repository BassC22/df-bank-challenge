# Domain Models and Test Plan

# User Story 1

As an account holder,

I want to be able to access my account details on program startup,

So that I can easily view my details.


# Domain Model

| Objects | Properties             | Messages                  | Outputs     |
|---------|------------------------|---------------------------|-------------|
| Account | accountName @String    | getAccountName()          | @String     |
|         | accountId @Number      | getAccountId()            | @Number     |
|         | accountBalance @Number | getAccountBalance()       | @Number     |

# Test List

1. Test that the account details are displayed when the program runs
2. Test that the correct account details are displayed when the account balance is 1000

----------------------------------------------------------------------------------------------

# User Story 2

As an account holder,

I want to be able to deposit funds into my bank account

So that I can increase my balance.


# Domain Model

| Objects     | Properties               | Messages                    | Outputs            |
|-------------|--------------------------|--------------------------------------------------|
| Account     | accountBalance @Number   | getAccountBalance()         | @Number            |
|-------------|--------------------------|-----------------------------|--------------------|
| Transaction | transactionType @String  | getTransactionType(@credit) | @String            |
|             | depositAmount @Number    | performDeposit()            | newBalance @Number |
|             | transactionId @String    | getTransactionId()          | @Void              |
|             | transactionDate @ String | getTransactionDate()        | @Void              |

# Test List

1. Test that the balance increases by the deposit amount when the starting balance is 0
2. Test that the balance increases by the deposit amount when the starting balance is 100
3. Test that the account balance increases accumulatively after multiple deposits are made
4. Test that attempting to deposit a negative number does not increase the balance, and an error message is returned
5. Test that attempting to deposit a non-numerical value does not increase the balance, and an error message is returned
6. Test that the transactions are being stored in an array

‌--------------------------------------------------------------------------------------------------

# User Story 3

As an account holder,

I want to be able to withdraw funds from my bank account if I have sufficient funds,

So that I can spend my money.


# Domain Model

| Objects     | Properties               | Messages                   | Outputs              |
|-------------|--------------------------|----------------------------|----------------------|
| Account     | accountBalance @Number   | getAccountBalance()        | @Number              |
|             |                          | areFundsSufficient()       | @Boolean             |
|-------------|--------------------------|----------------------------|----------------------|
| Transaction | transactionDate @String  | getTransactionDate()       | @Void                |
|             | transactionType @String  | getTransactionType(@debit) | @Void                |
|             | withdrawalAmount @Number | performWithdrawal()        | @newBalance @Number  |
|             | transactionId @String    | getTransactionId()         | @Void                |


# Test List

1. Test that withdrawal is performed if the withdrawal amount is smaller than or equal to the current balance
2. Test that the withdrawal is not performed if the current balance is less than the withdrawal amount, with error message returned
3. Test that the new account balance is 0 if the current account balance is equal to the withdrawal amount
4. Test that the transactions are being stored in an array
5. Test that the new balance is the current balance minus the withdrawal amount

‌--------------------------------------------------------------------------------------------------


# User Story 4

As an account holder,

I want to be able to print a statement showing my transactions,

So that I can keep track of my funds.

# Domain Model


| Objects   | Properties                | Messages               | Outputs  |
|-----------| --------------------------|------------------------|----------|
| Statement | accountName @String       | getAccountName()       | @Void    |
|           | accountId @Number         | getAccounId()          | @Void    |
|           | accountBalance @Number    | getAccountBalance()    | @Number  |
|           | transactionDate @String   | getTransactionDate()   | @String  |
|           | transactionType @String   | getTransactionType()   | @String  |
|           | transactionAmount @Number | getTransactionAmount() | @Number  |
|           | transactionId @String     | getTransactionId()     | @Void    |
|           |                           | printStatement()       | @Table   |

# Test List

1. Test that the statement prints date, credits, debits and balance
2. Test that details from the correct account have been printed
3. Test that a blank table is printed if no transactions have been performed yet
4. Test that the transactions are printed in chronological order, with the most recent at the top


