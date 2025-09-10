# 7. Search Transactions

## User Story

As a **user,**\
I want to **search for specific transactions,**\
so that **I can quickly find and review entries based on keywords, amounts, or categories.**

## Assets

- [Wireframe](./wireframe.png)
- [Layout](./layout.png)
- [Components](./components.png)

## Acceptance Criteria

- A search field is displayed below the account balance on the transactions list page
- The search field allows users to enter keywords, transaction amounts, or category names to filter transactions
- As the user types, the transaction list is filtered in real-time based on the search query
- The search results display only transactions that match the search criteria
- A clear button is available in the search field to reset the search and display all transactions again

## Edge Cases

- If no transactions match the search, a message should appear saying “No results found”
- If the user tries to search with an empty search field, display the full transaction list again
