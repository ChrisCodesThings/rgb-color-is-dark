// @ts-check

import yiqValue from '@chriscodesthings/rgb-color-yiq-value';
import * as Types from "@chriscodesthings/basic-color-types";

/**
 * Determines if a colour is dark based on the YIQ calculation
 * @param {Types.rgbColor | Types.rgbaColor} rgba Array containing red, green, blue and (optional) alpha values
 * @returns {boolean}
 */
export default function rgbColorIsDark(rgba) {
    return yiqValue(rgba) < 128;
}
