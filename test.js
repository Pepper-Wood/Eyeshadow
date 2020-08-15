var Color = require('color');
var DeltaE = require('delta-e');

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

orgy_palette = [];
for (let i = 0; i < orgy.length; i++) {
    orgy_palette.push(Color(orgy[i]));
}

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

function get_palette_html(palette, cols) {
    str = "";
    for (let i = 0; i < palette.length; i++) {
        if ((i != 0) && (i % cols == 0)) {
            str += "<br>";
        }
        str += "<div class='shade' style='background-color:" + palette[i].hex() + "'></div>";
    }
    return str;
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

function get_score_from_delta_default(delta) {
    // Ranges taken from http://zschuessler.github.io/DeltaE/learn/#toc-defining-delta-e.
    switch (true) {
        case (delta <= 1):
            // Not perceptible by human eyes.
            return 1000;
        case (delta <= 2):
            // Perceptible through close observation.
            return 1;
        case (delta <= 10):
            // Perceptible at a glance.
            return 0;
        case (delta <= 49):
            // Colors are more similar than opposite.
            return 0;
        case (delta <= 100):
            // Colors are exact opposite.
            return 0;
        default:
            return 0;
    }
}
function get_score_from_delta(delta, threshold) {
    // Ranges adjusted based on makeup perception.
    switch (true) {
        case (delta <= 1):
            return 1000;
        case (delta <= threshold):
            return 1;
        default:
            return 0;
    }
}

function get_reduced_palette(orgy_palette, threshold) {
    while (true) {
        scores = Array(orgy_palette.length).fill(0);
        for (let a = 0; a < orgy_palette.length; a++) {
            for (let b = 0; b < orgy_palette.length; b++) {
                if (a == b) {
                    continue;
                }
                var color1 = {
                    L: orgy_palette[a].l(),
                    A: orgy_palette[a].a(),
                    B: orgy_palette[a].b()
                };
                var color2 = {
                    L: orgy_palette[b].l(),
                    A: orgy_palette[b].a(),
                    B: orgy_palette[b].b()
                };

                // 2000 formula
                delta = DeltaE.getDeltaE00(color1, color2);
                scores[a] += get_score_from_delta(delta, threshold);
            }
        }
        max = Math.max( ...scores );
        
        console.log(scores);
        console.log("Max is = " + max);
        if (max == 0) {
            return orgy_palette;
        }
        var maxIndex = scores.reduce(function(highestIndex, element, index, array){
            return element > array[highestIndex] ? index : highestIndex;
        }, 0);
        
        console.log("Removing color at index: " + maxIndex + " with score " + scores[maxIndex]);
        
        orgy_palette.splice(maxIndex, 1);
        console.log("######");
    }
}

var orgy_palette_clone = orgy_palette.slice(0);
reduced = get_reduced_palette(orgy_palette_clone, 6);
$("#palette_reduced").html(get_palette_html(reduced, 6));

var slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [6],
    tooltips: [true],
    range: {
        'min': [1],
        'max': [50]
    }
});

slider.noUiSlider.on('set', function () {
    threshold = slider.noUiSlider.get();

    var orgy_palette_clone = orgy_palette.slice(0);
    reduced = get_reduced_palette(orgy_palette_clone, threshold);
    $("#palette_reduced").html(get_palette_html(reduced, 6));
});
