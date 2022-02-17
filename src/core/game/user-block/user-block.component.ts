import { Component, OnInit } from '@angular/core';
import { UserBlockControllerService } from './controller/user-block-controller.service';
import { UserBlockModel } from './model/user-block-model';

@Component({
  selector: 'app-user-block',
  templateUrl: './user-block.component.html',
  styleUrls: ['./user-block.component.css']
})
export class UserBlockComponent implements OnInit {

  userBlockData!:UserBlockModel;
  constructor(private userBlockController:UserBlockControllerService) { }

  ngOnInit(): void {
    this.userBlockController.createUserBlock();
    this.userBlockData=this.userBlockController.getUserBLockData();
    this.userBlockController.setUserBockStyle();
  }

}
