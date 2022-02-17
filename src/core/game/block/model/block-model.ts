import { BlockStyleModel } from "./block-style-model";

export interface BlockModel {
    x:number;
    y:number;
    health:number;
    prize:string;
    color:string;
    exist:boolean;
    level:number;
    style:BlockStyleModel
}
