# Steps to setup Next.js App

**NOTE:** Make sure that you have [**setup your coding environment**](README.md#setting-up-the-coding-environment) before following the steps below.
  - [Visual Studio Code (VSCode)](#visual-studio-code-vscode)
    - [Next.js Extension Pack](#nextjs-extension-pack)
- [Creating your first Next.js app](#creating-your-first-nextjs-app)
  - [Chosing how to style your app](#chosing-how-to-style-your-app)
    - [Material-UI](#material-ui)
    - [Tailwind CSS](#tailwind-css)
  - [Choosing a backend (Database)](#choosing-a-backend-database)

# Setting up the coding environment

## Node.js

[Node.js (nodejs.org)](https://nodejs.org/en/)

[Download | Node.js (nodejs.org)](https://nodejs.org/en/download/)

Verify the installation of node and npm on your system by running the following command:

```bash
node -v
```

```bash
npm -v
```

## Browser

Please install any browser of your choice. (Preferably any chromium-browser)

[React Developer Tools - Chrome Web Store (google.com)](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

## Visual Studio Code (VSCode)

[Setting up Visual Studio Code](https://code.visualstudio.com/docs/setup/setup-overview)


Recommended extensions:

-   [**Auto Close Tag**](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag "https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag"): *Automatically add HTML/XML close tag, same as Visual Studio IDE or Sublime Text*
-   [**Auto Rename Tag**](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag "https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag"): *Auto rename paired HTML/XML tag*
-   [**Better Comments**](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments "https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments"): *The Better Comments extension will help you create more human-friendly comments in your code*
-   [**Bookmarks**](https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks "https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks"): *It helps you to navigate in your code, moving between important positions easily and quickly.*
-   [**DotENV**](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv "https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv"): *Support for dotenv file syntax*
-   [**Git Graph**](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph "https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph"): *View a Git Graph of your repository, and perform Git actions from the graph.*
-   [**GitLens --- Git supercharged**](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens "https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens"): *Supercharge the Git capabilities built into Visual Studio Code --- Visualize code authorship at a glance via Git blame annotations and code lens, seamlessly navigate and explore Git repositories, gain valuable insights via powerful comparison commands, and so much more*
-   [**ESLint**](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint "https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"): *Integrates ESLint JavaScript into VS Code.*
-   [**Next.js snippets**](https://marketplace.visualstudio.com/items?itemName=pulkitgangwar.nextjs-snippets "https://marketplace.visualstudio.com/items?itemName=pulkitgangwar.nextjs-snippets"): *snippets for nextjs*
-   [**Prettier - Code formatter**](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode "https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"): *Code formatter using prettier*
-   [**Sort JSON objects**](https://marketplace.visualstudio.com/items?itemName=richie5um2.vscode-sort-json "https://marketplace.visualstudio.com/items?itemName=richie5um2.vscode-sort-json"): *Sorts the keys within JSON objects*
-   [**Template String Converter**](https://marketplace.visualstudio.com/items?itemName=meganrogge.template-string-converter "https://marketplace.visualstudio.com/items?itemName=meganrogge.template-string-converter"): *Converts quotes to backticks when a `$` and `{` are entered within quotes in JavaScript and TypeScript files*
-   [**Thunder Client**](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client "https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client"): *Rest API Client for VS Code, GUI based Http Client*
-   [**Todo Tree**](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree "https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree"): *Show TODO, FIXME, etc. comment tags in a tree view*
-   [**Toggle Quotes**](https://marketplace.visualstudio.com/items?itemName=BriteSnow.vscode-toggle-quotes "https://marketplace.visualstudio.com/items?itemName=BriteSnow.vscode-toggle-quotes"): *`cmd '` (`ctrl '` on win/linux) will cycle the first quote pair found*
-   [**Material-UI Snippets**](https://marketplace.visualstudio.com/items?itemName=vscodeshift.material-ui-snippets): *Snippets for Material-UI*
-   [ES7 React/Redux/React-Native/JS Snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets "https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets"): *Snippets for creating react components and much more*

All the extensions above can be installed all at once by adding the following extension pack: 
### [Next.js Extension Pack](https://marketplace.visualstudio.com/items?itemName=gaurav-gosain.GDSC-nextjs)

---

> The following steps are optional

# Creating your first Next.js app

Create your first [Next.js](https://nextjs.org/) app by running the following command:

```bash
npx create-next-app <app-name>
```

Replacing `<app-name>` with the name of your app.

## Chosing how to style your app

Two popular ways to style your app are:

### Material-UI

Material-UI is a React UI library for building user interfaces.

You can add Material-UI and Material Icons to your project by running the following command:

```bash
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
```

### Tailwind CSS

Tailwind CSS is a utility-first CSS framework for styled-components.

To add Tailwind CSS to your project, run the following command:

```bash
npm install -D tailwindcss postcss autoprefixer
```

Initialize Tailwind CSS by running the following command:

```bash
npx tailwindcss init -p
```

Initializing tailwindcss will create a `tailwind.config.js` file in your project. By default, Tailwind CSS will watch only html files in your project. You can extend the default configuration by adding your own customizations to the `tailwind.config.js` file and editing the `content` property like so:

```js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Finally, add the following Taiwind directives to your CSS file:

`./styles/globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

> If you are a beginner, using Material-UI is a good starting point. For more advanced use cases where more control is needed, Tailwind CSS is a good option.

---

## Choosing a backend (Database)

When it comes to building a backend for your app, you need to decide which database you want to use.

A few popular databases/backend solutions are:
  - [MongoDB](https://www.mongodb.com/)
  - [PostgreSQL](https://www.postgresql.org/)
  - [MySQL](https://www.mysql.com/)
  - [Firebase](https://firebase.google.com/)
  - [Firestore](https://firebase.google.com/docs/firestore)
  - [GraphQL](https://graphql.org/)
  - [Apollo](https://www.apollographql.com/)
  - [Relay](https://relay.dev/)

And many many more.

Firebase is a good place to start. Firebase is commonly referred to as "Backend as a Service" (BaaS). Firebase provides you with virtually everything you need to build a backend for your app from user authentication, storage, and realtime database. It automatically scales to meet your needs and has a very generous free plan.


Thats it! You can now start building your app.

Navigate to your project directory and run the following command to start the development server:

```bash
npm run dev
```
