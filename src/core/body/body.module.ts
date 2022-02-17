import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyRoutingModule } from './body-routing.module';
import { BodyViewComponent } from './body-view/body-view.component';
import { GameModule } from '../game/game.module';


@NgModule({
  declarations: [
    BodyViewComponent
  ],
  imports: [
    CommonModule,
    BodyRoutingModule,
    GameModule
  ],
  exports:[
    BodyViewComponent,
  ]
})
export class BodyModule { }
