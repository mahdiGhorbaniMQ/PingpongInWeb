import { HostListener, Injectable } from '@angular/core';
import { GameViewControllerService } from '../../game-view/controller/game-view-controller.service';
import { UserControllerService } from '../../user/controller/user-controller.service';
import { BlocksInformationService } from '../information/blocks-information.service';
import { BlockModel } from '../model/block-model';

@Injectable({
  providedIn: 'root'
})
export class BlocksControllerService {

  constructor(private blocksInformation:BlocksInformationService,
              private userController:UserControllerService,
              private gameViewController:GameViewControllerService) { }
  getBlocks():BlockModel[]{
    return this.blocksInformation.blocks;
  }
  fillBlocksInformation(){
    for(var i=1;i<=5;i++){
      for(var j=1;j<=20;j++){
        var block = this.createBlock();
        block.x=i;
        block.y=j;
        block.level=this.getRandomBlockLevel();
        this.setBlockHealth(block,"create");
        block.health=block.level;
        this.setBlockStyle(block);
        this.blocksInformation.blocks.push(block);
      }
    }
  }
  createBlock():BlockModel{
    var block={
      x:0,
      y:0,
      health:0,
      prize:this.getRandomPrize(),
      color:"",
      exist:true,
      level:0,
      style:{}
    };
    return block;
  }
  getRandomPrize():string{
    
    var random=Math.floor(Math.random()*99);
    var resolt=""
    if(0<=random && random<50){
      resolt="empty";
    }
    else if(50<=random && random<65){
      resolt="health";
    }
    else if(65<=random && random<75){
      resolt="health+";
    }
    else if(75<=random && random<80){
      resolt="health++";
    }
    else if(80<=random && random<90){
      resolt="power";
    }
    else if(90<=random && random<98){
      resolt="destroyOneRow";
    }
    else{
      resolt="legendry";
    }
    return resolt;
  }
  getRandomBlockLevel():number{
    var lvl=this.userController.getUserLevel();
    var random=Math.floor(Math.random()*10);
    if(5<random && random<8){
      lvl=lvl+1;
    }
    else if(random==8){
      lvl=lvl+2;
    }
    else if(random==9){
      lvl=lvl+3;
    }
    return lvl;
  }
  setBlockHealth(block:BlockModel,action:string){
    if(action=="create"){
      block.health=block.level;
    }
    else if(action=="increase"){
      block.health++;
    }
    else if(action=="decrease"){
      block.health--;
      if(block.health==0){
        this.destroyBlock(block);
      }
    }
    if(block.health == block.level){
      block.color=this.blocksInformation.highHealth;
    }
    else if(block.health >= block.level/2){
      block.color=this.blocksInformation.mediumHealth;
    }
    else{
      block.color=this.blocksInformation.lowHealth;
    }
  }
  destroyBlock(block:BlockModel){
    block.exist=false;
  }
  setBlockStyle(block:BlockModel){
    block.style['background-color']=block.color;
    block.style['width']=this.getblockWidth()+"px";
    block.style['height']="10px"
    block.style['left']=((block.x-1)*(this.getblockWidth()+6))+"px";
    block.style['top']=((block.y-1)*15)+"px";
  }
  getblockWidth():number{
    var width;
    width=(this.gameViewController.getGameContainerWidth()-30)/5
    return width;
  }

  onResize(){
    this.blocksInformation.blocks.forEach(element => {
      this.setBlockStyle(element);
    });
  }
}
