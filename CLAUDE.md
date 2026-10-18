# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Create React App (react-scripts 5) project — no custom build config.

- `npm start` — dev server at http://localhost:3000
- `npm run build` — production build into `build/`
- `npm test` — Jest + Testing Library in watch mode
- Single test file, no watch: `npm test -- --watchAll=false src/App.test.js` (or `-t "<test name>"`)
- Linting is CRA's built-in ESLint (`react-app` config); warnings appear in `npm start` / `npm run build` output. There is no separate lint script.

- `CI=true npm run build` treats ESLint warnings as errors and currently fails on an unused `useContext` import in `src/Store/ThemeContext.js`. Run the build without `CI` to check that it compiles.

Note: `src/App.test.js` is still the CRA placeholder ("learn react") and renders `<App />` without the `Router`/`ThemeProvider` wrappers, so it fails as written.

## Architecture

Personal portfolio for a Salesforce developer: React 19 + react-router-dom 7 + Sass, bilingual (English/Vietnamese) with light/dark themes.

**App shell.** `src/index.js` wraps `<App />` in `BrowserRouter` → `ThemeProvider`, and imports `Store/i18next.js` for its side effect (i18n init). `App.js` renders the fixed shell: `FunctionButtons` (theme + language toggles), `Layouts/Header`, `Layouts/Body`, `Layouts/Footer`. `Layouts/Body/body.js` holds the `<Routes>` mapping paths to components in `src/Pages/`.

**Navigation.** `Layouts/Header/header.js` derives the active index from `location.pathname` matched against `navItems`, and passes `--nav-count` / `--active-index` as inline CSS variables on the `<ul>`. The sliding `.navbar_list-active` indicator is positioned entirely in `layouts/_header.scss` from those variables plus per-breakpoint `--nav-pad` / `--nav-gap` / `--nav-item-w` / `--nav-item-h`. Adding a page means adding it to both `body.js` routes and `navItems`. `/testimonials` appears in the nav but has no route yet.

**Theming.** `Store/ThemeContext.js` holds `theme` (`'light' | 'dark'`, not persisted) and `toggleTheme`. The theme is applied by adding the theme string as a CSS class to elements: `App` puts it on the root `.myPortfolio` div, and most components also append `${context.theme}` to their own class names. Sass then styles `&.light` / `&.dark` modifiers per element. New themed elements must consume `ThemeContext` and append the class themselves. Theme colors live in `abstracts/_variables.scss` as `$color-*-light` / `$color-*-dark` pairs. Two shared values are not variables yet and are repeated as literals: the dark card background `#131b32` and the card border `#2563eb20` (hover `#2563eb60`).

**i18n.** All translations are inline in `Store/i18next.js` under `en` and `vi` (no JSON files, no language detector, default `en`). Keys are namespaced by page (`navbar.*`, `heroPage.*`, `aboutPage.*`, `skillPage.*`, `experiencePage.*`, `contactPage.*`). Every new key needs both an `en` and a `vi` entry. Arrays and structured lists (for example `experiencePage.detail`) are read with `t(key, { returnObjects: true })`. Some static, non-translated content (`aboutMeText`, `skillPageText`, `footerText`) is still in `Components/const.js`.

**Styles (Sass 7-1).** `src/Assets/sass/main.scss` `@use`s each folder. Each folder's `_index.scss` `@forward`s its partials, so a new partial must be added to that folder's `_index.scss`. Partials pull in shared tokens with `@use '../abstracts' as *;`. Class names follow a BEM-like `block_element-modifier` pattern (e.g. `aboutPage_card_social-list_item`). `App.css` and `index.css` are CRA leftovers; real styling goes in the Sass tree. `bootstrap` and `react-bootstrap` are installed but not wired in.

**Responsive pages.** `pages/_heroPage.scss`, `_aboutPage.scss`, `_skillPage.scss`, and `_experiencePage.scss` share one mobile-first pattern, and new or reworked pages should follow it. The page block declares its sizes as `--<page>-*` custom properties (gap, padding, title size, card size) and the rules consume them. Each `@include respond-to(sm | md | lg | xl)` block at the bottom of the block then mostly just overrides the variables, plus the few structural changes for that breakpoint (for example the switch to two columns at `lg`). `respond-to` is min-width only (576 / 768 / 992 / 1200px, from `abstracts/_mixins.scss`). From `lg` up a page sets `min-height: calc(100vh - 130px)`, where 130px is the header plus footer. Pages render inside `.body_container` (`width: 100%; max-width: 1300px`), and `.myPortfolio` adds `2rem` of side padding. Hover styles go inside `@media (hover: hover)`, and transitions are switched off under `prefers-reduced-motion`.

## Filename case pitfall

The repo is developed on Windows (`core.ignorecase=true`). Git tracks some files with different casing than the imports use. For example, git has `src/Pages/aboutPage.js`, `contactPage.js`, and `projectPage.js`, while `body.js` imports `AboutPage`, `ContactPage`, and `ProjectPage`. These work locally but break on case-sensitive systems (Linux CI and deploys). The Sass partials currently match their `@forward` names. For Sass partials, a case mismatch between an `@forward` name and the filename also stops the dev server from picking up edits to that file on Windows, because webpack's watcher compares paths case-sensitively. To fix the casing, use `git mv` (via a temp name if only the case changes), and keep import paths, `@forward` names, and filenames identical.
