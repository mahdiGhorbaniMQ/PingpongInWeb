import { BallStyleModel } from "./ball-style-model";

export interface BallModel {
    x:number;
    y:number;
    relationalX:number;
    relationalY:number;
    vX:number;
    vY:number;
    color:string;
    mood:string;
    state:string;
    lvl:number;
    style:BallStyleModel;

}
