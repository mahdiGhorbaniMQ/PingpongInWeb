import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameViewComponent } from './game-view/game-view.component';
import { BlockComponent } from './block/block.component';
import { UserBlockComponent } from './user-block/user-block.component';
import { BallComponent } from './ball/ball.component';


@NgModule({
  declarations: [
    GameViewComponent,
    BlockComponent,
    UserBlockComponent,
    BallComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GameViewComponent
  ]
})
export class GameModule { }
