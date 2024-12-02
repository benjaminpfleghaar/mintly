# 5. Delete Transaction

## User Story

As a **user,**\
I want to **delete incorrect transactions,**\
so that **I can maintain an accurate and organized transactions list.**

## Assets

|        Wireframe        |        Layout        |        Components        |
| :---------------------: | :------------------: | :----------------------: |
| [Link](./wireframe.png) | [Link](./layout.png) | [Link](./components.png) |

## Acceptance Criteria

-   Clicking the delete button on the transaction details page triggers a confirmation dialog
-   The dialog prevents accidental deletions by asking the user to confirm their intention
-   The dialog provides options to either confirm the deletion or cancel the action
-   If the user cancels the deletion, they are returned to the transaction details page without changes
-   After confirming the deletion, the transaction is removed from the list
-   After deletion, the user is redirected back to the transactions list and a success message is displayed

## Edge Cases

-   If all transactions are deleted, a message appears indicating there are no transactions and provides an option to add a new one
