<!-- omit from toc -->
# Steps to setup Next.js App

**NOTE:** Make sure that you have [**setup your coding environment**](README.md#setting-up-the-coding-environment) before following the steps below.

💡 Alternatively, you can also easily setup your environment using [GitHub Codespaces](https://github.com/features/codespaces) to setup your environment in seconds and get going.

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=511237834)

<!-- omit from toc -->
# Index
- [Creating your first Next.js app](#creating-your-first-nextjs-app)
  - [Choosing how to style your app](#choosing-how-to-style-your-app)
    - [Material-UI](#material-ui)
    - [Tailwind CSS](#tailwind-css)
  - [Choosing a backend (Database)](#choosing-a-backend-database)

---

> The following steps are optional

# Creating your first Next.js app

Create your first [Next.js](https://nextjs.org/) app by running the following command:

```bash
npx create-next-app <app-name>
```

Replacing `<app-name>` with the name of your app.

## Choosing how to style your app

Two popular ways to style your app are by using:

- [Material UI](#material-ui)
- [Tailwind CSS](#tailwind-css)

### Material-UI

**Material-UI** is a React UI library for building user interfaces.

You can add Material-UI and [Material Icons](https://fonts.google.com/icons?icon.set=Material+Icons) to your project by running the following command:

```bash
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
```

### Tailwind CSS

**Tailwind CSS** is a utility-first CSS framework for styled-components.

To add Tailwind CSS to your project, run the following command:

```bash
npm install -D tailwindcss postcss autoprefixer
```

Initialize Tailwind CSS by running the following command:

```bash
npx tailwindcss init -p
```

Initializing tailwindcss will create a `tailwind.config.js` file in your project. By default, Tailwind CSS will watch only html files in your project.<br>
You can extend the default configuration by adding your own customizations to the `tailwind.config.js` file and editing the `content` property like so:

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

> If you are a beginner, using **Material-UI** is a good starting point.<br>
For more advanced use cases where more control is needed, **Tailwind CSS** is a good option.

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

**Firebase** is a good place to start. Firebase is commonly referred to as "**B**ackend **a**s **a** **S**ervice" (BaaS).<br>
Firebase provides you with virtually everything you need to build a backend for your app from user authentication, storage, and realtime database. It automatically scales to meet your needs and has a very generous free plan.


Thats it! You can now start building your app.

Navigate to your project directory and run the following command to start the development server:

```bash
npm run dev
```
