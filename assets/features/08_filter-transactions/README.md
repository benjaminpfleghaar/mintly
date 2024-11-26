# 8. Filter Transactions

## User Story

As a **user,**\
I want to **filter transactions by category,**\
so that **I can quickly find transactions that match my preferences and needs.**

## Assets

|        Wireframe        |        Layout        |        Components        |
| :---------------------: | :------------------: | :----------------------: |
| [Link](./wireframe.png) | [Link](./layout.png) | [Link](./components.png) |

## Acceptance Criteria

-   The transactions list includes a scrollable section of filter options
-   Users can filter transactions by category
-   Only one category filter can be selected at a time
-   Selecting a new category filter automatically deselects the previously selected category filter
-   The applied filter is clearly displayed on the transactions list, allowing users to see which filter is currently active
-   Users can clear all filters with a single click, returning the list to its unfiltered state
-   The transactions list and balance updates in real-time as filters are applied or removed

## Edge Cases

-   If the user selects a category with no matching transactions, a message should appear saying "No transactions in this category" and offer an option to clear the filter
