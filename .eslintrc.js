module.exports = {
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended", 
        "airbnb-base"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "quotes": 0,
        "linebreak-style": 0,
        "no-unused-vars": 1,
        "object-curly-spacing": 0,
        "comma-spacing": 0,
        "indent": 0,
        "arrow-spacing": 0,
        "key-spacing": 0,
        "space-before-function-paren": 0,
        "prefer-destructuring": 0,
        "no-trailing-spaces": 0,
        "prefer-arrow-callback": 0,
        "semi": 1,
        "import/newline-after-import": 0,
        "import/order": 1,
        "vars-on-top": 1,
        "padded-blocks": 0,
        "prefer-const": 0,
        "no-console": 0

    }
};