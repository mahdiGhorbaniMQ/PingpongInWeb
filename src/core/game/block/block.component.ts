import { Component, OnInit } from '@angular/core';
import { BlocksControllerService } from './controller/blocks-controller.service';
import { BlockModel } from './model/block-model';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

  blocks:BlockModel[]=[];
  
  constructor(private blocksController:BlocksControllerService) {
    this.blocksController.fillBlocksInformation();
  }

  ngOnInit(): void {
    this.blocks=this.blocksController.getBlocks();
  }
}
