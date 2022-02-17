import { Component, OnInit } from '@angular/core';
import { BallControllerService } from '../ball/controller/ball-controller.service';
import { BlocksControllerService } from '../block/controller/blocks-controller.service';
import { UserBlockControllerService } from '../user-block/controller/user-block-controller.service';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css']
})
export class GameViewComponent implements OnInit {

  constructor(private blocksController:BlocksControllerService,
              private userBlockController:UserBlockControllerService,
              private ballcontroller:BallControllerService) { }

  ngOnInit(): void {
  }
  onResize($event:any){
    this.blocksController.onResize();
    this.userBlockController.onResize();
    this.ballcontroller.onResize();
  }
}
