import { style } from '@angular/animations';
import { Injectable } from '@angular/core';
import { BallModel } from '../model/ball-model';

@Injectable({
  providedIn: 'root'
})
export class BallInformationService {

  ballData!:BallModel
  constructor() { }
}
