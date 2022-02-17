import { Component, OnInit } from '@angular/core';
import { BallControllerService } from './controller/ball-controller.service';
import { BallModel } from './model/ball-model';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.css']
})
export class BallComponent implements OnInit {

  ballData!:BallModel;
  constructor(private ballController:BallControllerService) { }

  ngOnInit(): void {
    this.ballController.createBall()
    this.ballData = this.ballController.getBallData();
    this.ballController.setMovingBall()
  }

}
