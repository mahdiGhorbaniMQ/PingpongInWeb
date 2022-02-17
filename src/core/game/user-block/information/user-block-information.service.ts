import { Injectable } from '@angular/core';
import { UserBlockModel } from '../model/user-block-model';

@Injectable({
  providedIn: 'root'
})
export class UserBlockInformationService {
  userBlockData!:UserBlockModel;
  constructor() { }
}
