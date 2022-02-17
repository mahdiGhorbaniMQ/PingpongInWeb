import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameViewControllerService {

  constructor() { }
  getGameContainerWidth():number{
    var width=830;
    if(1000<=window.innerWidth && window.innerWidth<1100){
      width=730;
    }
    else if(700<=window.innerWidth && window.innerWidth<1000){
      width=630;
    }
    else if(600<=window.innerWidth && window.innerWidth<700){
      width=530;
    }
    else if(window.innerWidth<600){
      width=390;
    }
    return width;
  }
  getGameContainerHeight():number{
    var height=600;
    if(window.innerWidth<1100){
      height=500;
    }
    return height;
  }
}
