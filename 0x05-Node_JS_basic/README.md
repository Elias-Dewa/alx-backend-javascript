# 0x05. NodeJS Basics

![image](<https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2020/1/82692897e15d9f03256f.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20230613%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230613T123156Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=3a21fffff41055652aaa928db2d1bea0dba95032a08023d6cafcde95159f8d93>
)

## Resources

- [Node JS getting started](https://nodejs.org/en/docs/guides/getting-started-guide)
- [Process API doc](https://node.readthedocs.io/en/latest/api/process/)
- [Child process](https://nodejs.org/api/child_process.html)
- [Express getting started](https://expressjs.com/en/starter/installing.html)
- [Mocha documentation](https://mochajs.org)
- [Nodemon documentation](https://github.com/remy/nodemon#nodemon)

## database.csv

    firstname,lastname,age,field
    Johann,Kerbrou,30,CS
    Guillaume,Salou,30,SWE
    Arielle,Salou,20,CS
    Jonathan,Benou,30,CS
    Emmanuel,Turlou,40,CS
    Guillaume,Plessous,35,CS
    Joseph,Crisou,34,SWE
    Paul,Schneider,60,SWE
    Tommy,Schoul,32,SWE
    Katie,Shirou,21,CS

## package.json

    {
      "name": "node_js_basics",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "lint": "./node_modules/.bin/eslint",
        "check-lint": "lint [0-9]*.js",
        "test": "./node_modules/mocha/bin/mocha --require babel-register --exit",
        "dev": "nodemon --exec babel-node --presets babel-preset-env ./server.js ./database.csv"
      },
      "author": "",
      "license": "ISC",
      "dependencies": {
        "chai-http": "^4.3.0",
        "express": "^4.17.1"
      },
      "devDependencies": {
        "babel-cli": "^6.26.0",
        "babel-preset-env": "^1.7.0",
        "nodemon": "^2.0.2",
        "eslint": "^6.4.0",
        "eslint-config-airbnb-base": "^14.0.0",
        "eslint-plugin-import": "^2.18.2",
        "eslint-plugin-jest": "^22.17.0",
        "chai": "^4.2.0",
        "mocha": "^6.2.2",
        "request": "^2.88.0",
        "sinon": "^7.5.0"
      }
    }

## babel.config.js

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

## .eslintrc.js

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
        'max-classes-per-file': 'off',
        'no-underscore-dangle': 'off',
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

and…

Don’t forget to run $ npm install when you have the package.json

## Solutions for mandatory and advanced tasks...