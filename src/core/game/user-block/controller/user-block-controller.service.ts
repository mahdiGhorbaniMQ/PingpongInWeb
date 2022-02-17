import { Injectable } from '@angular/core';
import { BlocksControllerService } from '../../block/controller/blocks-controller.service';
import { GameViewControllerService } from '../../game-view/controller/game-view-controller.service';
import { UserBlockInformationService } from '../information/user-block-information.service';
import { UserBlockModel } from '../model/user-block-model';

@Injectable({
  providedIn: 'root'
})
export class UserBlockControllerService {

  constructor(private userBlockInformation:UserBlockInformationService,
              private blocksController:BlocksControllerService,
              private gameViewController:GameViewControllerService) { }


  createUserBlock(){
    this.userBlockInformation.userBlockData={
      x:(this.gameViewController.getGameContainerWidth()-this.userBlockWidth())/2,
      relationalX:((this.gameViewController.getGameContainerWidth()-this.userBlockWidth())/2)/this.gameViewController.getGameContainerWidth(),
      state:"",
      color:"",
      style:{
      }
    };
  }
  getUserBLockData():UserBlockModel{
    return this.userBlockInformation.userBlockData;
  }
  setUserBockStyle(){
    this.userBlockInformation.userBlockData.style={
      "width":this.userBlockWidth()+"px",
      "left":this.getUserBlockX()+"px"
    }
  }
  getUserBlockX():number{
    return this.userBlockInformation.userBlockData.relationalX*this.gameViewController.getGameContainerWidth();
  }
  userBlockWidth():number{
    return this.blocksController.getblockWidth()*1.2
  }
  onResize(){
    this.setUserBockStyle();
  }
}
