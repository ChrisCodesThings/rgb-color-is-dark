// @ts-check

import yiqValue from '@chriscodesthings/rgb-color-yiq-value';

/**
 * Determines if a colour is dark based on the YIQ calculation
 * @param {[number, number, number] | [number, number, number, number]} rgb Array containing red, green, blue and (optional) alpha values
 * @returns {boolean}
 */
export default function rgbColorIsDark(rgb) {
    return yiqValue(rgb) < 128;
}
