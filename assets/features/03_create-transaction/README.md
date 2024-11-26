# 3. Create Transaction

## User Story

As a **user,**\
I want to **create and store new transactions,**\
so that **I can keep track of my expenses and income effectively.**

## Assets

|        Wireframe        |        Layout        |        Components        |
| :---------------------: | :------------------: | :----------------------: |
| [Link](./wireframe.png) | [Link](./layout.png) | [Link](./components.png) |

## Acceptance Criteria

-   The create transaction form has a clear header indicating its purpose
-   The form includes labeled, mandatory fields for:
    -   Transaction Amount
    -   Transaction Name
    -   Transaction Category
    -   Transaction Date
-   The amount field displays the placeholder text "0.00" when the user has not entered any value
-   The category field uses a drop-down menu with existing categories, with the first category already preselected
-   The type field uses radio buttons to allow a choice between “Income” and “Expense”
-   The date field uses a drop-down menu that displays the current day, date and year
-   The Transaction Amount field provides suggestions with pre-filled amounts, such as "$50", "$100", and other common values
-   Form submission is blocked if any required field is empty, and validation messages clearly indicate the incomplete fields
-   After form submission, the user is redirected back to the transactions list and a success message is displayed

## Edge Cases

-   If the user attempts to submit the form with invalid input (e.g., non-numeric amount), a validation message appears indicating the issue
