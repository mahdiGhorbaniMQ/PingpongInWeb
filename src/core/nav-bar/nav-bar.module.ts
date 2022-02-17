import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarViewComponent } from './nav-bar-view/nav-bar-view.component';



@NgModule({
  declarations: [
    NavBarViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavBarViewComponent,
  ]
})
export class NavBarModule { }
