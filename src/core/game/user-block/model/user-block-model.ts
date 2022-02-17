import { UserBlockStyleModel } from "./user-block-style-model";

export interface UserBlockModel {
    x:number;
    relationalX:number;
    color:string;
    state:string;
    direction?:number | undefined;
    style:UserBlockStyleModel;
}
