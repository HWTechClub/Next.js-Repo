<div align="center">
  <h1>Next.js Series</h1>
  <h2>Code your Own Web App</h2>
  <img alt="Next.js Badge" title="React Framework by Vercel" src="https://img.shields.io/badge/Next.js-informational?style=flat-sqaure&logo=next.js&logoColor=white&color=000000">
  <img alt="React" title="JavaScript Framework" src="https://img.shields.io/badge/React-informational?style=flat-sqaure&logo=react&logoColor=black&color=61DAFB">
</div>
<br>

This repository is a reference as part of the **[Coding your own Web App](https://youtube.com/playlist?list=PLYlB334TcbXGVBqG-7m_udB-QTWQXYCf8)** Series.

Where you will be creating your very own Web App using Next.js (React Framework by Vercel), a server-side React (JavaScript framework) framework.

To know more about the steps to setup your system, you can check out the [steps.md](steps.md) file to know more.

---

## Session 1

- [Setting up the coding environment](#setting-up-the-coding-environment)
  - [Node.js](#nodejs)
  - [Browser](#browser)
  - [Visual Studio Code (VS Code)](#visual-studio-code-vs-code)
    - [Recommended extensions:](#recommended-extensions)
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

You can use any browser of your choice.<br>
(Preferably a [Chromium](https://www.chromium.org/Home/)-based browser i.e. [Google Chrome](https://www.google.com/chrome/), [Microsoft Edge](https://www.microsoft.com/en-us/edge), [Opera](https://www.opera.com/), [Brave](https://brave.com/), etc.)

It is recommended to download the React Developer Tools extension
[React Developer Tools - Chrome Web Store (google.com)](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

## Visual Studio Code (VS Code)

[Setting up Visual Studio Code](https://code.visualstudio.com/docs/setup/setup-overview)


### Recommended extensions:
All the extensions above can be installed all at once by adding the following extension pack: 
### [Next.js Extension Pack](https://marketplace.visualstudio.com/items?itemName=gaurav-gosain.GDSC-nextjs)

The list of extensions are also listed below incase you wish to download certain ones only.

-   [**Auto Close Tag**](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag "https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag"): *Automatically add HTML/XML close tag, same as Visual Studio IDE or Sublime Text*
-   [**Auto Rename Tag**](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag "https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag"): *Auto rename paired HTML/XML tag*
-   [**Better Comments**](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments "https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments"): *The Better Comments extension will help you create more human-friendly comments in your code*
-   [**Bookmarks**](https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks "https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks"): *It helps you to navigate in your code, moving between important positions easily and quickly.*
-   [**DotENV**](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv "https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv"): *Support for dotenv file syntax*
-   [**Git Graph**](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph "https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph"): *View a Git Graph of your repository, and perform Git actions from the graph.*
-   [**GitLens --- Git supercharged**](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens "https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens"): *Supercharge the Git capabilities built into Visual Studio Code --- Visualize code authorship at a glance via Git blame annotations and code lens, seamlessly navigate and explore Git repositories, gain valuable insights via powerful comparison commands, and so much more*
-   [**ESLint**](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint "https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"): *Integrates ESLint JavaScript into VS Code.*
-   [**Next.js snippets**](https://marketplace.visualstudio.com/items?itemName=pulkitgangwar.nextjs-snippets "https://marketplace.visualstudio.com/items?itemName=pulkitgangwar.nextjs-snippets"): *snippets for nextjs*
-   [**Prettier - Code formatter**](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode "https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"): *Code formatter using prettier*
-   [**Sort JSON objects**](https://marketplace.visualstudio.com/items?itemName=richie5um2.vscode-sort-json "https://marketplace.visualstudio.com/items?itemName=richie5um2.vscode-sort-json"): *Sorts the keys within JSON objects*
-   [**Template String Converter**](https://marketplace.visualstudio.com/items?itemName=meganrogge.template-string-converter "https://marketplace.visualstudio.com/items?itemName=meganrogge.template-string-converter"): *Converts quotes to backticks when a `$` and `{` are entered within quotes in JavaScript and TypeScript files*
-   [**Thunder Client**](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client "https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client"): *Rest API Client for VS Code, GUI based Http Client*
-   [**Todo Tree**](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree "https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree"): *Show TODO, FIXME, etc. comment tags in a tree view*
-   [**Toggle Quotes**](https://marketplace.visualstudio.com/items?itemName=BriteSnow.vscode-toggle-quotes "https://marketplace.visualstudio.com/items?itemName=BriteSnow.vscode-toggle-quotes"): *`cmd '` (`ctrl '` on win/linux) will cycle the first quote pair found*
-   [**Material-UI Snippets**](https://marketplace.visualstudio.com/items?itemName=vscodeshift.material-ui-snippets): *Snippets for Material-UI*
-   [ES7 React/Redux/React-Native/JS Snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets "https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets"): *Snippets for creating react components and much more*

---

