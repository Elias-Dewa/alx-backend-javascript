# 0x01. ES6 Promises
![image](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/75862d67ca51a042003c.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230418T134037Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=f46284b38d2327ba70547f55406b214cbe9ad5edeee17d31796581c958e257da)

## Resources

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript Promise: An introduction]()
- [Await]()
- [Async]()
- [Throw / Try]()


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

<b>utils.js</b>

Use when you get to tasks requiring uploadPhoto and createUser.

    export function uploadPhoto() {
    return Promise.resolve({
        status: 200,
        body: 'photo-profile-1',
    });
    }

    export function createUser() {
    return Promise.resolve({
        firstName: 'Guillaume',
        lastName: 'Salva',
    });
    }

<b>.eslintrc.js</b>

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

## and…

Don’t forget to run <b>$ npm install</b> when you have the package.json

## Response Data Format

uploadPhoto returns a response with the format

    {
    status: 200,
    body: 'photo-profile-1',
    }

createUser returns a response with the format

    {
    firstName: 'Guillaume',
    lastName: 'Salva',
    }

## Solutions for mandatory and advanced tasks...