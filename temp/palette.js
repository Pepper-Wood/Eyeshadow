var Color = require('color');
var DeltaE = require('delta-e');

function color_compare(index, color_a, color_b) {
    if (color_a.hsl().color[index] < color_b.hsl().color[index]) return 1;
    return -1;
}
function hue_compare(color_a, color_b) {
    return color_compare(0, color_a, color_b);
}
function saturation_compare(color_a, color_b) {
    return color_compare(1, color_a, color_b);
}
function lightness_compare(color_a, color_b) {
    return color_compare(2, color_a, color_b);
}

function convert_hex_codes_to_colors(hex_codes) {
    colors = [];
    for (let i = 0; i < hex_codes.length; i++) {
        colors.push(new Color(hex_codes[i]));
    }
    return colors;
}

function convert_colors_to_hex_codes(colors) {
    hex_codes = [];
    for (let i = 0; i < colors.length; i++) {
        hex_codes.push(colors[i].hex());
    }
    return hex_codes;
}

function get_sorted_hex_codes(hex_codes) {
    let colors = convert_hex_codes_to_colors(hex_codes);
    return {
        "original": convert_colors_to_hex_codes(Array.prototype.slice.call(colors)),
        "hue": convert_colors_to_hex_codes(Array.prototype.slice.call(colors).sort(hue_compare)),
        "saturation": convert_colors_to_hex_codes(Array.prototype.slice.call(colors).sort(saturation_compare)),
        "lightness": convert_colors_to_hex_codes(Array.prototype.slice.call(colors).sort(lightness_compare)),
    };
}
