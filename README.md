# rgb-color-is-dark <br> [![Test workflow status](https://github.com/ChrisCodesThings/rgb-color-is-dark/actions/workflows/test.yml/badge.svg)](../../actions/workflows/test.yml) [![NPM Version](https://img.shields.io/npm/v/@chriscodesthings/rgb-color-is-dark)](https://www.npmjs.com/package/@chriscodesthings/rgb-color-is-dark) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> **Determine if a color in RGB format is dark using YIQ calculation**

## Description

Determine if a colour is dark using the YIQ calculation.

### See...
- [Install/Usage](#install "Install and Usage")
- [Syntax](#syntax "Syntax")
- [Examples](#examples "Examples")
- [See Also](#see-also "See Also")

---

## Install

```sh
npm install --save @chriscodesthings/rgb-color-is-dark
```

## Usage

```js
import rgbColorIsDark from '@chriscodesthings/rgb-color-is-dark';

console.log(rgbColorIsDark([100, 149, 237])); // cornflowerblue
// => false
```

## Syntax

```js
rgbColorIsDark([r, g, b, (a)]);
```

### Parameters

- *r, g, b*: Red, green and blue color components
- *a* (optional): Alpha value is ignored if present

### Return Value

Returns boolean `true` if color is dark based on YIQ calculation, `false` otherwise.

## Examples

```js
// get contrasting text colour for a given background colour
function getTextColourForBackground(r, g, b) {
    if( rgbColorIsDark([r, g, b])) {
        // colour is dark, return white
        return [255, 255, 255];
    }

    // colour is light, return black
    return [0, 0, 0];
} 
```

## See Also...

- [**Calculating Color Contrast**](https://24ways.org/2010/calculating-color-contrast/ "Calculating Color Contrast")
- [**rgb-color-yiq-value**: Function to calculate the YIQ value of a color in RGB format](https://github.com/ChrisCodesThings/rgb-color-yiq-value "Function to calculate the YIQ value of a color in RGB format")
- [**color-object**: Simple, lightweight class to store and manipulate a color, and convert between formats](https://github.com/ChrisCodesThings/color-object "Simple, lightweight class to store and manipulate a color, and convert between formats")
- [**random-css-hex-color**: Generates a random color in CSS hex format](https://github.com/ChrisCodesThings/random-css-hex-color "Generates a random color in CSS hex format")
