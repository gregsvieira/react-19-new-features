# React 19 + TypeScript + Vite

## Using React 19 + TS
To use Typescript with React 19 add this on package.json:

  ``"overrides": {
    "@types/react": "npm:types-react@beta",
    "@types/react-dom": "npm:types-react-dom@beta"
  },
  "devDependencies": {
    "@types/react": "npm:types-react@beta",
    "@types/react-dom": "npm:types-react-dom@beta",
  ...
  }``

To understand more you can read on [@types/react/canary.d.ts](node_modules/@types/react/canary.d.ts)

To install React Compiler on Vite you can check if your app is following React Rules
runing:
``npx react-compiler-healthcheck@latest``

You can install eslint to help on coding with React Rules:
``npm install eslint-plugin-react-compiler``

And to install React Compiler on Vite add this lines on vite.config.ts and install:
``plugins: [
            ["babel-plugin-react-compiler", ReactCompilerConfig],
          ]``

Read more: [React Compiler](https://react.dev/learn/react-compiler)

Thanks!