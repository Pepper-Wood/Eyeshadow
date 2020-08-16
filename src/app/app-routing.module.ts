import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaletteComponent } from './palette/palette.component';

const routes: Routes = [
  { path: 'palette/:slug', component: PaletteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
