import yiqValue from "@chriscodesthings/rgb-color-yiq-value";

export default function (r, g, b) {
    return yiqValue(r, g, b) < 128;
}
