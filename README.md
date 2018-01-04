# fnc-args
> Get a function's arguments in JS

[GitHub](https://github.com/ethanent/fnc-args) | [NPM](https://www.npmjs.com/package/fnc-args)

## Install

```shell
npm i fnc-args
```

## Use

```js
const fncArgs = require('fnc-args')

fncArgs((hey, hi) => {}) // ['hey', 'hi']

fncArgs(function (hey, hi) {}) // ['hey', 'hi']

fncArgs(async (hey, hi) => {}) // ['hey', 'hi']
```