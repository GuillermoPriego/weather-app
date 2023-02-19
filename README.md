# Weather App

## How to Run and Install Dependencies

1.  Clone the Repository.

    To get started, clone the repository from GitHub by running the following command in your terminal:

    ```bash
    git clone https://github.com/GuillermoPriego/weather-app.git
    ```

2.  Install Dependencies.

    Once you have cloned the repository, navigate into the project directory by running the following command:

    ```
    cd weather-app
    ```

3.  Install the project dependencies.

    ```bash
    npm install
    ```

4.  Run the Next.js App

    ```bash
    npm run dev
    ```

    This command will start the development server and the app will be available at http://localhost:3000. Any changes you make to the code will automatically be reflected in the app.

    If you want to build the app for production, run the following command:

    ```bash
    npm run build
    ```

    To start the production server, run the following command:

    ```bash
    npm start
    ```

## Folder structure

The Next.js project has the following folders hanging from the root:

### \_\_tests\_\_

This folder contains tests for the application using Jest and React Testing Library. Tests for individual components should be located in a folder with the same name as the component.

### cypress

This folder contains end-to-end (E2E) tests using Cypress. Tests should be organized into folders by feature or page.

### lib

This folder contains functions to call external APIs and the database. It should be organized by external service or database table.

### models

This folder contains the models for the application. It should be organized by entity or feature.

### public

This folder contains static files such as images and fonts. These files are served as-is and do not go through the Next.js server.

### src

- _components_:This folder contains reusable components used throughout the application. Components should be organized by feature or function. Each component should have its own folder with an index.js file for the component and a styles.module.css file for the component styles.

- _hooks_:This folder contains reusable hooks used throughout the application. Hooks should be organized by feature or function.

- _pages_:This folder contains the pages for the application. Each file in this folder corresponds to a page in the application. Pages can be organized into subfolders to reflect the structure of the application.

- _styles_:This folder contains global styles and SCSS files. It should be organized by component or feature.

## Libraries

### Jest and react-testing-library

These libraries are being used for unit testing. Jest is a JavaScript testing framework that is commonly used for testing React applications. react-testing-library is a library that provides utilities for testing React components.

### Cypress

This library is being used for end-to-end (E2E) testing. Cypress is a JavaScript end-to-end testing framework that makes it easy to write and run automated tests that simulate user interactions with the application.

### Swr

This library is being used for making async calls in the application. swr is a React Hooks library for remote data fetching that makes it easy to handle data loading and caching.

### Tailwind

This library is being used for styling the application. tailwind is a utility-first CSS framework that provides a set of pre-defined CSS classes that can be used to quickly and easily style components.
