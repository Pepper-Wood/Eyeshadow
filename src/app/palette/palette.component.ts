import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import palettes from '../../assets/palettes.json';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.css']
})
export class PaletteComponent implements OnInit {
  slug: string;
  palettes: any = palettes;
  palette: any;
  error: any;

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
      }
    });
  }

}
