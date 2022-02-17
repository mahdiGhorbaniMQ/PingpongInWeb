import { Injectable } from '@angular/core';
import { UserInformationService } from '../information/user-information.service';

@Injectable({
  providedIn: 'root'
})
export class UserControllerService {

  constructor(private userInformation:UserInformationService) { }

  getUserLevel():number{
    return this.userInformation.userLevel
  }
}
