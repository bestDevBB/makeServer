<<<<<<< HEAD
=======
// {
//     "env": {
//       "commonjs": true,
//       "es6": true,
//       "node": true
//     },
//     "extends": [
//       "airbnb-base"
//     ],
//     "globals": {
//       "Atomics": "readonly",
//       "SharedArrayBuffer": "readonly"
//     },
//     "parserOptions": {
//       "ecmaVersion": 2018
//     },
//     "rules": {
//       "linebreak-style": 0,
//       "no-unused-vars": ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }]
//     }
//   }

>>>>>>> dae7ab200864ee11604ecda1119a83eab23a647c
module.exports = {
  root: true,
  env: {
    node: true,
  },
  // extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  extends: ["plugin:vue/recommended", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "prettier/prettier": [
      "error", {
        singleQuote: true,
        semi: false,
        useTabs: false,
        tabWidth: 2,
        trailingComma: "none",
        printWidth: 120,
        bracketSpacing: true,
        arrowParens: "avoid",
        endOfLine: "auto",
      }
    ],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-unused-vars": ["warn", { vars: "all", args: "after-used", ignoreRestSiblings: false }],
  },
};