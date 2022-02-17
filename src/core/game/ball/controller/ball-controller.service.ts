import { Injectable } from '@angular/core';
import { GameViewControllerService } from '../../game-view/controller/game-view-controller.service';
import { UserBlockControllerService } from '../../user-block/controller/user-block-controller.service';
import { BallInformationService } from '../information/ball-information.service';
import { BallModel } from '../model/ball-model';

@Injectable({
  providedIn: 'root'
})
export class BallControllerService {

  constructor(private ballInformation:BallInformationService,
              private gameViewController:GameViewControllerService,
              private userBLockController:UserBlockControllerService) { }
  createBall(){
    this.ballInformation.ballData={
      x:(this.gameViewController.getGameContainerWidth()-this.getBallWidth())/2,
      y:0,
      relationalX:this.calculateX((this.gameViewController.getGameContainerWidth()-this.getBallWidth())/2),
      relationalY:this.calculateY(0),
      vX:0,
      vY:0,
      color:"red",
      mood:"",
      state:"still",
      lvl:0,
      style:{}
    }
    this.setBallStyle();
  }
  getBallData():BallModel{
    return this.ballInformation.ballData;
  }
  setMovingBall(){
    setInterval(this.moveBall,10,this.ballInformation.ballData,this.gameViewController.getGameContainerWidth,this.gameViewController.getGameContainerHeight)
  }
  moveBall(ballData:BallModel,getGameContainerWidth:any,getGameContainerHeight:any){
    const width=getGameContainerWidth();
    const height=getGameContainerHeight();
    ballData.x+=ballData.vX;
    ballData.y+=ballData.vY;
    ballData.relationalX=ballData.x/width;
    ballData.relationalY=ballData.y/height;
    ballData.style["bottom"]=ballData.relationalY*height+18+"px";
    ballData.style["left"]=ballData.relationalX*width+"px";
  }
  setBallStyle(){
    this.ballInformation.ballData.style={
      "width":this.getBallWidth()+"px",
      "height":this.getBallWidth()+"px",
      "left":this.getBallX()+"px",
      "bottom":this.getBallY()+18+"px",
      "background-color":this.ballInformation.ballData.color,
    }
  }
  calculateX(x:number):number{
    var width=this.gameViewController.getGameContainerWidth();
    return x/width;
  }
  calculateY(y:number):number{
    var height=this.gameViewController.getGameContainerHeight();
    return y/height;
  }
  getBallX():number{
    return this.ballInformation.ballData.relationalX*this.gameViewController.getGameContainerWidth();
  }
  getBallY():number{
    return this.ballInformation.ballData.relationalY*this.gameViewController.getGameContainerHeight();
  }
  getBallWidth():number{
    return this.userBLockController.userBlockWidth()/5;
  }
  onResize(){
    this.ballInformation.ballData.x=this.ballInformation.ballData.relationalX*this.gameViewController.getGameContainerWidth();
    this.ballInformation.ballData.y=this.ballInformation.ballData.relationalY*this.gameViewController.getGameContainerHeight();
    this.ballInformation.ballData.relationalX=this.calculateX(this.ballInformation.ballData.x)
    this.ballInformation.ballData.relationalY=this.calculateY(this.ballInformation.ballData.y)
    this.setBallStyle();
  }
}
