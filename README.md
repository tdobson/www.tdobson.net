# James Day Mantine Single Page App

This is a single page app built with [Next.js](https://nextjs.org/) using the pages router and [Mantine](https://mantine.dev/).

## Features

This app comes with the following features:

- [PostCSS](https://postcss.org/) with [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [Jest](https://jestjs.io/) setup with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- ESLint setup with [eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine)

## Project Layout

### Root Directory

- **README.md**: This file, providing an overview and documentation for the project.
- **LICENCE**: The license under which the project is distributed.
- **package.json**: Contains project metadata and dependencies.
- **tsconfig.json**: TypeScript configuration file.
- **next.config.js**: Next.js configuration file.
- **postcss.config.cjs**: Configuration for PostCSS.
- **jest.config.cjs**: Configuration for Jest.
- **jest.setup.cjs**: Setup file for Jest.
- **yarn.lock**: Lockfile for Yarn package manager.

### Directories

- **components/**: Contains React components used throughout the application.
  - **Layout/**: Contains layout components, such as `Layout.tsx`.
- **pages/**: Contains Next.js pages.
  - **_app.tsx**: Custom App component to initialize pages.
  - **_document.tsx**: Custom Document component for SSR.
  - **index.tsx**: The main landing page of the application.
  - **JamesDay.tsx**: A specific page for James Day.
- **public/**: Static assets like images, icons, etc.
  - **favicon.svg**: The favicon for the application.
- **test-utils/**: Utilities for testing.
  - **index.ts**: Entry point for test utilities.
  - **render.tsx**: Custom render function for testing.
- **.idea/**: Configuration files for JetBrains IDEs.

## npm scripts

### Build and dev scripts

- `dev` – start the development server
- `build` – bundle the application for production
- `export` – export the static website to the `out` folder
- `analyze` – analyze the application bundle with [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

### Testing scripts

- `typecheck` – check TypeScript types
- `lint` – run ESLint
- `prettier:check` – check files with Prettier
- `jest` – run Jest tests
- `jest:watch` – start Jest in watch mode
- `test` – run `jest`, `prettier:check`, `lint`, and `typecheck` scripts

### Other scripts

- `storybook` – start the Storybook development server
- `storybook:build` – build the production Storybook bundle to `storybook-static`
- `prettier:write` – format all files with Prettier

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies**:
   ```sh
   yarn install
   ```

3. **Run the development server**:
   ```sh
   yarn dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to see the application running.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. **Fork the repository**.
2. **Create a new branch** for your feature or bugfix:
   ```sh
   git checkout -b feature-name
   ```
3. **Make your changes**.
4. **Commit your changes**:
   ```sh
   git commit -m "Description of your changes"
   ```
5. **Push to your branch**:
   ```sh
   git push origin feature-name
   ```
6. **Create a Pull Request**.

We appreciate your contributions!

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Layout

The project is structured as follows:

- **components/**: Contains reusable React components.
  - **Layout/**: Contains layout components, such as `Layout.tsx`.
- **pages/**: Contains Next.js pages.
  - **_app.tsx**: Custom App component to initialize pages.
  - **_document.tsx**: Custom Document component for SSR.
  - **index.tsx**: The main landing page of the application.
  - **JamesDay.tsx**: A specific page for James Day.
- **public/**: Static assets like images, icons, etc.
  - **favicon.svg**: The favicon for the application.
- **test-utils/**: Utilities for testing.
  - **index.ts**: Entry point for test utilities.
  - **render.tsx**: Custom render function for testing.
- **.idea/**: Configuration files for JetBrains IDEs.

### Root Directory

- **README.md**: This file, providing an overview and documentation for the project.
- **LICENCE**: The license under which the project is distributed.
- **package.json**: Contains project metadata and dependencies.
- **tsconfig.json**: TypeScript configuration file.
- **next.config.js**: Next.js configuration file.
- **postcss.config.cjs**: Configuration for PostCSS.
- **jest.config.cjs**: Configuration for Jest.
- **jest.setup.cjs**: Setup file for Jest.
- **yarn.lock**: Lockfile for Yarn package manager.

### npm scripts

- `dev` – start the development server
- `build` – bundle the application for production
- `export` – export the static website to the `out` folder
- `analyze` – analyze the application bundle with [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- `typecheck` – check TypeScript types
- `lint` – run ESLint
- `prettier:check` – check files with Prettier
- `jest` – run Jest tests
- `jest:watch` – start Jest in watch mode
- `test` – run `jest`, `prettier:check`, `lint`, and `typecheck` scripts
- `storybook` – start the Storybook development server
- `storybook:build` – build the production Storybook bundle to `storybook-static`
- `prettier:write` – format all files with Prettier

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/tdobson/james.tdobson.net.git
   cd james.tdobson.net
   ```

2. **Install dependencies**:
   ```sh
   yarn install
   ```

3. **Run the development server**:
   ```sh
   yarn dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to see the application running.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. **Fork the repository**.
2. **Create a new branch** for your feature or bugfix:
   ```sh
   git checkout -b feature-name
   ```
3. **Make your changes**.
4. **Commit your changes**:
   ```sh
   git commit -m "Description of your changes"
   ```
5. **Push to your branch**:
   ```sh
   git push origin feature-name
   ```
6. **Create a Pull Request**.

We appreciate your contributions!

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
