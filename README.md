# My Portfolio

Personal portfolio site for a Salesforce developer. It is a single-page React app with English/Vietnamese content and light/dark themes.

## Features

- **Bilingual**: English and Vietnamese, switched at runtime with a toggle button (default is English).
- **Light and dark themes**: switched with a toggle button. The choice is not saved between visits.
- **Animated navigation**: a sliding indicator follows the active route.
- **Responsive layout**: styled with Sass using the [7-1 pattern](https://sass-guidelin.es/#the-7-1-pattern).

## Pages

| Route | Page | Status |
| --- | --- | --- |
| `/` | Home (hero) | Built |
| `/about` | About | Built |
| `/skills` | Skills (certifications) | Built, not yet translated |
| `/experience` | Experience | Built, not yet translated |
| `/projects` | Projects | Placeholder |
| `/contact` | Contact | Placeholder |
| `/testimonials` | Testimonials | In the nav, but no route or page yet |

## Tech stack

- [React 19](https://react.dev/) and [react-router-dom 7](https://reactrouter.com/)
- [i18next](https://www.i18next.com/) and [react-i18next](https://react.i18next.com/)
- [Sass](https://sass-lang.com/) and [normalize.css](https://necolas.github.io/normalize.css/)
- [react-icons](https://react-icons.github.io/react-icons/)
- [Create React App](https://create-react-app.dev/) (`react-scripts` 5) for build tooling

## Getting started

You need [Node.js](https://nodejs.org/) and npm.

```bash
git clone https://github.com/ThangLuu0110/My-Portfolio.git
cd My-Portfolio
npm install
npm start
```

The dev server runs at [http://localhost:3000](http://localhost:3000) and reloads on changes.

## Scripts

| Command | Description |
| --- | --- |
| `npm start` | Runs the dev server |
| `npm run build` | Builds for production into `build/` |
| `npm test` | Runs Jest and Testing Library in watch mode |
| `npm test -- --watchAll=false src/App.test.js` | Runs one test file once |

Linting is CRA's built-in ESLint (`react-app` config). Warnings show up in the `npm start` and `npm run build` output; there is no separate lint script.

`src/App.test.js` is still the CRA placeholder test and fails as written, because it renders `<App />` without the router and theme providers.

## Project structure

```
src/
├── index.js              # Entry point: BrowserRouter → ThemeProvider → App
├── App.js                # Fixed shell: toggles, header, body, footer
├── Components/
│   ├── FunctionButtons.js    # Theme and language toggles
│   └── const.js              # Static content that is not translated yet
├── Layouts/
│   ├── Header/header.js      # Navigation
│   ├── Body/body.js          # Route table
│   └── Footer/footer.js
├── Pages/                # One component per route
├── Store/
│   ├── ThemeContext.js       # theme + toggleTheme
│   └── i18next.js            # i18n setup and all translations
└── Assets/
    ├── images/
    └── sass/
        ├── abstracts/        # Variables, functions, mixins
        ├── base/             # Reset, base elements, typography
        ├── components/       # Reusable component styles
        ├── layouts/          # Header, body, footer
        ├── pages/            # Page-specific styles
        ├── themes/
        ├── vendors/          # normalize
        └── main.scss         # @uses every folder
```

## How to

### Add a page

1. Create the component in `src/Pages/`.
2. Add a `<Route>` for it in `src/Layouts/Body/body.js`.
3. Add an entry to `navItems` in `src/Layouts/Header/header.js`. The sliding indicator adjusts to the number of items automatically.
4. Add its nav label under `navbar.*` in `src/Store/i18next.js`, for both `en` and `vi`.

### Add or change text

Translations live inline in `src/Store/i18next.js`, with keys namespaced by page (`navbar.*`, `heroPage.*`, `aboutPage.*`). Every key needs both an `en` and a `vi` entry. Read arrays with `t(key, { returnObjects: true })`.

Social links, experience entries, certifications, and footer text are still plain constants in `src/Components/const.js`.

### Add styles

1. Create a partial in the matching folder under `src/Assets/sass/`.
2. Add it to that folder's `_index.scss` with `@forward`. `main.scss` only `@use`s the folders.
3. Pull in shared tokens with `@use '../abstracts' as *;`.

Class names follow a BEM-like `block_element-modifier` pattern, for example `aboutPage_card_social-list_item`.

### Theme an element

The theme is applied as a CSS class (`light` or `dark`), not through CSS variables. A themed component reads `theme` from `ThemeContext`, appends it to its own `className`, and the Sass styles the `&.light` and `&.dark` modifiers. Colors come in `$color-*-light` / `$color-*-dark` pairs in `abstracts/_variables.scss`.

## Known issues

- **Filename casing.** The repo is developed on Windows, where git ignores case. Git tracks `src/Pages/aboutPage.js`, `contactPage.js`, and `projectPage.js`, but `body.js` imports `AboutPage`, `ContactPage`, and `ProjectPage`. Likewise, `pages/_index.scss` forwards `skillPage` while the file is `_skillpage.scss`. This works locally but will break the build on case-sensitive systems such as Linux CI and most hosts. Fix it with `git mv`, going through a temporary name when only the case changes.
- **Unused dependencies.** `bootstrap` and `react-bootstrap` are installed but not used.
- **CRA leftovers.** `src/App.css` and `src/index.css` are not where styling happens; use the Sass tree.
