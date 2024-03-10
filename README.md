# rgb-color-is-dark &middot; [![Test workflow status](https://github.com/ChrisCodesThings/rgb-color-is-dark/actions/workflows/test.yml/badge.svg)](../../actions/workflows/test.yml) [![NPM Version](https://img.shields.io/npm/v/@chriscodesthings/rgb-color-is-dark)](https://www.npmjs.com/package/@chriscodesthings/rgb-color-is-dark) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> **Determine if a color in RGB format is dark using YIQ calculation**

## Install

```sh
npm install --save @chriscodesthings/rgb-color-is-dark
```

## Use

```js
import colorIsDark from '@chriscodesthings/rgb-color-is-dark';

console.log(colorIsDark(100,149,237)); // cornflowerblue
// => false
```

## Syntax

```js
colorIsDark(r, g, b);
```

### Parameters

- *r, g, b*: red green and blue color components

### Return Value

Returns true if color is dark based on YIQ calculation, false otherwise.

## Description

Does what it says on the tin.