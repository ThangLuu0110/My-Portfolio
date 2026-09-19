# My Portfolio

A personal portfolio site built with [Create React App](https://github.com/facebook/create-react-app) and Sass, organized using the [7-1 architecture](https://sass-guidelin.es/#the-7-1-pattern) pattern.

> **Status:** early scaffolding. The app shell and Sass structure are in place; pages and components are still to be built out.

## Tech Stack

- [React 19](https://react.dev/) with [react-router-dom](https://reactrouter.com/)
- [Sass](https://sass-lang.com/) (7-1 architecture)
- [normalize.css](https://necolas.github.io/normalize.css/)
- [react-scripts](https://www.npmjs.com/package/react-scripts) (CRA tooling)

## Project Structure

```
src/
├── App.js                 # Root component
├── index.js                # Entry point
└── Assets/
    └── sass/
        ├── abstracts/       # Variables, functions, mixins
        ├── base/            # Reset, base element styles, typography
        ├── components/      # Reusable UI component styles
        ├── layouts/         # Structural/layout styles
        ├── pages/           # Page-specific styles
        ├── themes/          # Theming (colors, dark/light, etc.)
        ├── vendors/         # Third-party styles (normalize, etc.)
        └── main.scss        # Entry point that @uses all partials
```

Each folder has an `_index.scss` that forwards its partials, so `main.scss` only needs to `@use` the folder itself.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page reloads on changes.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm start` | Runs the app in development mode |
| `npm test` | Launches the test runner in watch mode |
| `npm run build` | Builds the app for production into the `build` folder |
| `npm run eject` | Ejects CRA's build configuration (one-way, rarely needed) |

## Learn More

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://react.dev/)
- [Sass 7-1 pattern](https://sass-guidelin.es/#the-7-1-pattern)
