class Color {
    constructor(hex) {
        this.hex = hex;
        let hsl_array = toHSL(hex);
        this.hue = hsl_array[0];
        this.saturation = hsl_array[1];
        this.lightness = hsl_array[2];
    }
    toHexHTML() {
        return "<div class='shade' style='background-color:" + this.hex + "'></div>";
    }
    toHSLHTML() {
        return "<div class='shade' style='background-color:hsl(" + this.hue + ", " + this.saturation + "%, " + this.lightness + "%)'></div>";
    }
    toHTML() {
        return this.toHSLHTML();
    }
}

/* --------------------------------------- */

function get_palette_html(palette, cols) {
    str = "";
    for (let i = 0; i < palette.length; i++) {
        if ((i != 0) && (i % cols == 0)) {
            str += "<br>";
        }
        str += palette[i].toHTML();
    }
    return str;
}

var orgy = [
    "#feece2",
    "#fdf2de",
    "#fee5d1",
    "#f8e1cf",
    "#fddcc9",
    "#f6d8cd",
    "#fee6c2",
    "#ffd9c4",
    "#ffccad",
    "#fdc9a4",
    "#eec5a3",
    "#ecb9a6",
    "#e8bb9e",
    "#e4a187",
    "#edac86",
    "#db9f85",
    "#d79477",
    "#d08c5d",
    "#c97d4c",
    "#c28f70",
    "#ca9a8e",
    "#b1633c",
    "#af583f",
    "#ad7d73",
    "#a65c43",
    "#aa7a63",
    "#985939",
    "#77402c",
    "#7a4b38",
    "#463130"
];

function toHSL(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    var r = parseInt(result[1], 16);
    var g = parseInt(result[2], 16);
    var b = parseInt(result[3], 16);

    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if (max == min) {
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    s = s*100;
    s = Math.round(s);
    l = l*100;
    l = Math.round(l);
    h = Math.round(360*h);
    return [h, s, l];
}

function hue_compare(color_a, color_b) {
    if (color_a.hue < color_b.hue) {
        return 1;
    }
    return -1;
}
function saturation_compare(color_a, color_b) {
    if (color_a.saturation < color_b.saturation) {
        return 1;
    }
    return -1;
}
function lightness_compare(color_a, color_b) {
    if (color_a.lightness < color_b.lightness) {
        return 1;
    }
    return -1;
}


orgy_palette = [];
for (let i = 0; i < orgy.length; i++) {
    orgy_palette.push(new Color(orgy[i]));
}

$("#palette").html(get_palette_html(orgy_palette, 6));
orgy_palette.sort(hue_compare);
$("#palette_sorted_hue").html(get_palette_html(orgy_palette, 6));
orgy_palette.sort(saturation_compare);
$("#palette_sorted_saturation").html(get_palette_html(orgy_palette, 6));
orgy_palette.sort(lightness_compare);
$("#palette_sorted_lightness").html(get_palette_html(orgy_palette, 6));


