import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import palettes from '../../assets/palettes.json';
import Color from 'color';
// import * as DeltaE from 'delta-e';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.css']
})
export class PaletteComponent implements OnInit {
  slug: string;
  error: any;

  palettes: any = palettes;
  palette: any;
  sorted: any;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.slug = params.get('slug');
      if (!this.palettes.hasOwnProperty(this.slug)) {
        this.error = "error: slug not found";
      } else {
        this.palette = this.palettes[this.slug];
        this.sorted = this.get_sorted_hex_codes(this.palette.colors[0].hex_codes);
        console.log(this.sorted);
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

  get_sorted_hex_codes(hex_codes) {
    let colors = this.convert_hex_codes_to_colors(hex_codes);
    return {
      "original": this.convert_colors_to_hex_codes(Array.prototype.slice.call(colors)),
      "hue": this.convert_colors_to_hex_codes(Array.prototype.slice.call(colors).sort(this.hue_compare)),
      "saturation": this.convert_colors_to_hex_codes(Array.prototype.slice.call(colors).sort(this.saturation_compare)),
      "lightness": this.convert_colors_to_hex_codes(Array.prototype.slice.call(colors).sort(this.lightness_compare)),
    };
  }

}
