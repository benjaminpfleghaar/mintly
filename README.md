# Mintly

A **Next.js** application built as a feature-driven learning project, focused on mastering CRUD operations through
expense and savings management. The app supports recording, editing, deleting, and filtering transactions.

![Mockup](./assets/mockup.jpg)

## Design

The complete styleguide including fonts, colors, icons and general design principles can be found in this Figma
file: [Styleguide](https://www.figma.com/design/DimQ0kYK6oqva5Zy1L4Hzv/Mintly-Styleguide?node-id=2062-350)

## Features

| Id | User Story                                                                |                           Wireframe                            |                           Layout                            |                           Components                            |
|:--:|---------------------------------------------------------------------------|:--------------------------------------------------------------:|:-----------------------------------------------------------:|:---------------------------------------------------------------:|
| 1  | [Transactions List](./assets/features/01_transactions-list/README.md)     |  [Link](./assets/features/01_transactions-list/wireframe.png)  |  [Link](./assets/features/01_transactions-list/layout.png)  |  [Link](./assets/features/01_transactions-list/components.png)  |
| 2  | [Account Balance](./assets/features/02_account-balance/README.md)         |   [Link](./assets/features/02_account-balance/wireframe.png)   |   [Link](./assets/features/02_account-balance/layout.png)   |   [Link](./assets/features/02_account-balance/components.png)   |
| 3  | [Create Transaction](./assets/features/03_create-transaction/README.md)   | [Link](./assets/features/03_create-transaction/wireframe.png)  | [Link](./assets/features/03_create-transaction/layout.png)  | [Link](./assets/features/03_create-transaction/components.png)  |
| 4  | [Transaction Details](./assets/features/04_transaction-details/README.md) | [Link](./assets/features/04_transaction-details/wireframe.png) | [Link](./assets/features/04_transaction-details/layout.png) | [Link](./assets/features/04_transaction-details/components.png) |
| 5  | [Delete Transaction](./assets/features/05_delete-transaction/README.md)   | [Link](./assets/features/05_delete-transaction/wireframe.png)  | [Link](./assets/features/05_delete-transaction/layout.png)  | [Link](./assets/features/05_delete-transaction/components.png)  |
| 6  | [Update Transaction](./assets/features/06_update-transaction/README.md)   | [Link](./assets/features/06_update-transaction/wireframe.png)  | [Link](./assets/features/06_update-transaction/layout.png)  | [Link](./assets/features/06_update-transaction/components.png)  |
| 7  | [Search Transactions](./assets/features/07_search-transactions/README.md) | [Link](./assets/features/07_search-transactions/wireframe.png) | [Link](./assets/features/07_search-transactions/layout.png) | [Link](./assets/features/07_search-transactions/components.png) |
| 8  | [Filter Transactions](./assets/features/08_filter-transactions/README.md) | [Link](./assets/features/08_filter-transactions/wireframe.png) | [Link](./assets/features/08_filter-transactions/layout.png) | [Link](./assets/features/08_filter-transactions/components.png) |

## Technologies

This project is built with:

- **Framework**: [Next.js](https://nextjs.org)
- **Styling**: [Styled-Components](https://styled-components.com/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Slider**: [Embla Carousel](https://www.embla-carousel.com/)
- **Icons**: [Google](https://fonts.google.com/icons)
- **Testing**: [Jest](https://jestjs.io/)

## Getting Started

Ensure you have **Node.js** installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/benjaminpfleghaar/mintly.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the application:
   ```bash
   npm run dev
   ```