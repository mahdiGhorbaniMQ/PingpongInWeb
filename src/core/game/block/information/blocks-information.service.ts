import { Injectable } from '@angular/core';
import { BlockModel } from '../model/block-model';

@Injectable({
  providedIn: 'root'
})
export class BlocksInformationService {
  blocks:BlockModel[]=[];
  highHealth:string="green";
  mediumHealth:string="yellow";
  lowHealth:string="red";
  constructor() {
  }
}
