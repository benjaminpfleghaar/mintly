# 6. Update Transaction

## User Story

As a **user,**\
I want to **update the details of existing transactions,**\
so that **they reflect the most accurate and relevant information.**

## Assets

|        Wireframe        |        Layout        |        Components        |
| :---------------------: | :------------------: | :----------------------: |
| [Link](./wireframe.png) | [Link](./layout.png) | [Link](./components.png) |

## Acceptance Criteria

-   Clicking the edit button on the transaction details page redirects the user to the edit transaction form
-   A header shows the transaction name
-   The form is pre-filled with the transaction’s existing details
-   The form allows for edits to all transaction details, including:
    -   Transaction Amount
    -   Transaction Name
    -   Transaction Category
    -   Transaction Type
    -   Transaction Date
-   All fields are mandatory
-   The amount field displays the placeholder text "0.00" when the user has not entered any value
-   The form includes options to Save or Cancel the edit
-   If the user cancels the editing, they are returned to the transaction details page without changes
-   The Save button is disabled until there are changes in the form
-   Form submission is blocked if any required field is empty, and validation messages clearly indicate the incomplete fields
-   After form submission, a success message is displayed

## Edge Cases

-   If the user attempts to submit the form with invalid input (e.g., non-numeric amount), a validation message appears indicating the issue
-   If the user cancels the edit, all changes are discarded and the user is redirected back to the transaction details page
