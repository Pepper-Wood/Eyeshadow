import { Component } from '@angular/core';
import palettes from '../assets/palettes.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eyeshadow';
  palettes: any = palettes;
}
