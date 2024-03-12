import looksLikeRGBA from '@chriscodesthings/color-looks-like-rgba';
import yiqValue from '@chriscodesthings/rgb-color-yiq-value';

export default function (col) {
    if (!looksLikeRGBA(col)) {
        return;
    }

    return yiqValue(col) < 128;
}
