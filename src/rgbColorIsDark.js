// @ts-check

import yiqValue from '@chriscodesthings/rgb-color-yiq-value';

/**
 * Determines if a colour is dark based on the YIQ calculation
 * @param {[number, number, number, number|undefined]} rgba Array containing red, green, blue and (optional) alpha values
 * @returns {boolean}
 */
export default function rgbColorIsDark(rgba) {
    return yiqValue(rgba) < 128;
}
