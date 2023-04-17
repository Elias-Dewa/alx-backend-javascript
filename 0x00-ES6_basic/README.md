# 0x00. ES6 Basics

## Concepts

For this project, we expect you to look at these concepts:

- [Modern Javascript]()
- [Software Linter](https://intranet.alxswe.com/concepts/542)

![image](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/08806026ef621f900121.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20230417%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230417T060928Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=dc34354548738f0f742f6d02d0b30d2beb70b6517e23dee7dd90600e4ea3d1a7)

## Resources

- [ECMAScript 6 - ECMAScript 2015](https://www.w3schools.com/js/js_es6.asp)
- [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Javascript ES6 — Iterables and Iterators](https://towardsdatascience.com/javascript-es6-iterables-and-iterators-de18b54f4d4)

# Setup

## Install NodeJS 12.11.x
(in your home directory):

    curl -sL <https://deb.nodesource.com/setup_12.x> -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt install nodejs -y

See the version

    $ nodejs -v
    v12.11.1
    $ npm -v
    6.11.3
## Install Jest, Babel, and ESLint
in your project directory:

- Install Jest using: <b>npm install --save-dev jest</b>
- Install Babel using: <b>npm install --save-dev babel-jest @babel/core @babel/preset-env</b>
- Install ESLint using: <b>npm install --save-dev eslint</b>

# Configuration files

<b>package.json</b>

Click to show/hide file contents

    {
    "scripts": {
        "lint": "./node_modules/.bin/eslint",
        "check-lint": "lint [0-9]*.js",
        "dev": "npx babel-node",
        "test": "jest",
        "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
        },
    "devDependencies": {
        "@babel/core": "^7.6.0",
        "@babel/node": "^7.8.0",
        "@babel/preset-env": "^7.6.0",
        "eslint": "^6.4.0",
        "eslint-config-airbnb-base": "^14.0.0",
        "eslint-plugin-import": "^2.18.2",
        "eslint-plugin-jest": "^22.17.0",
        "jest": "^24.9.0"
    }
    }

<b>babel.config.js</b>

Click to show/hide file contents

    module.exports = {
    presets: [
        [
        '@babel/preset-env',
        {
            targets: {
            node: 'current',
            },
        },
        ],
    ],
    };

<b>.eslintrc.js</b>

Click to show/hide file contents

    module.exports = {
    env: {
        browser: false,
        es6: true,
        jest: true,
    },
    extends: [
        'airbnb-base',
        'plugin:jest/all',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['jest'],
    rules: {
        'no-console': 'off',
        'no-shadow': 'off',
        'no-restricted-syntax': [
        'error',
        'LabeledStatement',
        'WithStatement',
        ],
    },
    overrides:[
        {
        files: ['*.js'],
        excludedFiles: 'babel.config.js',
        }
    ]
    };


## Finally…

Don’t forget to run npm install from the terminal of your project folder to install all necessary project dependencies.

## Solutions for mandatory and advanced tasks...
