import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyModule } from './body/body.module';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { BodyViewComponent } from './body/body-view/body-view.component';
import { NavBarViewComponent } from './nav-bar/nav-bar-view/nav-bar-view.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BodyModule,
    NavBarModule,
  ],
  exports:[
    BodyViewComponent,
    NavBarViewComponent,
  ]
})
export class CoreModule { }
