# 1. Transactions List

## User Story

As a **user,**\
I want to **browse a list of transactions,**\
so that **I can easily track my spending and income to manage my finances.**

## Assets

- [Wireframe](./wireframe.png)
- [Layout](./layout.png)
- [Components](./components.png)

## Acceptance Criteria

- The homepage displays a scrollable list of transactions
- The transaction list has a clear header indicating its purpose
- The transactions are grouped by date
- Each transaction listing includes:
    - Transaction Category
    - Transaction Name
    - Transaction Amount
- Clicking on a transaction listing redirects the user to the transaction details page
- Income and expense transactions are visually differentiated by color-coding
- The list supports vertical scrolling for easy navigation through multiple entries
- A button that redirects the user to the create transaction form is displayed on the top of the transactions list

## Edge Cases

- If the transaction list is empty, a message should appear saying “No transactions recorded yet” and suggest adding a
  new transaction
