import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import palettes from '../../assets/palettes.json';
import Color from 'color';
import * as DeltaE from 'delta-e';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.css']
})
export class PaletteComponent implements OnInit {
  slug: string;
  im: number;
  error: any;

  palettes: any = palettes;
  palette: any;
  sorted: any;
  reduced: any;
  reduced_remainder_count: number;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.slug = params.get('slug');
      this.im = +params.get('im') || 0;
      if (!this.palettes.hasOwnProperty(this.slug)) {
        this.error = "error: slug not found";
      } else {
        this.palette = this.palettes[this.slug];
        let color_objects = this.convert_hex_codes_to_colors(this.palette.colors[this.im].hex_codes);
        this.sorted = this.get_sorted_hex_codes(color_objects);

        this.reduced = this.get_reduced_palette(color_objects, 6);
        this.reduced_remainder_count = this.palette.columns - (this.reduced.length % this.palette.columns);
        if (this.reduced_remainder_count == this.palette.columns) {
          this.reduced_remainder_count = 0;
        }
      }
    });
  }

  hue_compare(color_a, color_b) {
    if (color_a.hsl().array()[0] < color_b.hsl().array()[0]) return 1;
    return -1;
  }
  saturation_compare(color_a: Color, color_b: Color) {
    if (color_a.hsl().array()[1] < color_b.hsl().array()[1]) return 1;
    return -1;
  }
  lightness_compare(color_a, color_b) {
    if (color_a.hsl().array()[2] < color_b.hsl().array()[2]) return 1;
    return -1;
  }

  convert_hex_codes_to_colors(hex_codes) {
    let colors = [];
    for (let i = 0; i < hex_codes.length; i++) {
        colors.push(new Color(hex_codes[i]));
    }
    return colors;
  }

  convert_colors_to_hex_codes(colors) {
    let hex_codes = [];
    for (let i = 0; i < colors.length; i++) {
        hex_codes.push(colors[i].hex());
    }
    return hex_codes;
  }

  get_sorted_hex_codes(color_objects) {
    return {
      "original": this.convert_colors_to_hex_codes(Array.prototype.slice.call(color_objects)),
      "hue": this.convert_colors_to_hex_codes(Array.prototype.slice.call(color_objects).sort(this.hue_compare)),
      "saturation": this.convert_colors_to_hex_codes(Array.prototype.slice.call(color_objects).sort(this.saturation_compare)),
      "lightness": this.convert_colors_to_hex_codes(Array.prototype.slice.call(color_objects).sort(this.lightness_compare)),
    };
  }

  get_score_from_delta(delta, threshold) {
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

  get_reduced_palette(color_objects, threshold) {
    while (true) {
      let scores = Array(color_objects.length).fill(0);
      for (let a = 0; a < color_objects.length; a++) {
        for (let b = 0; b < color_objects.length; b++) {
          if (a == b) {
            continue;
          }
          var color1 = {
            L: color_objects[a].l(),
            A: color_objects[a].a(),
            B: color_objects[a].b()
          };
          var color2 = {
            L: color_objects[b].l(),
            A: color_objects[b].a(),
            B: color_objects[b].b()
          };

          // 2000 formula
          let delta = DeltaE.getDeltaE00(color1, color2);
          scores[a] += this.get_score_from_delta(delta, threshold);
        }
      }
      let max = Math.max( ...scores );
      if (max == 0) {
        return this.convert_colors_to_hex_codes(color_objects);
      }
      var maxIndex = scores.reduce(function(highestIndex, element, index, array){
        return element > array[highestIndex] ? index : highestIndex;
      }, 0);
      color_objects.splice(maxIndex, 1);
    }
  }

}
