import { AssetInterface } from "../interfaces/asset";
import { AssetType } from "app/class/asset_type";
import { Supplier } from "./supplier";

export class Asset implements AssetInterface {
    id:string;
    tag:string;
    status_cd:string;
    status_desc:string;
    model:string;
    type_cd:string;
    type_desc:string;
    purchase_dt:string;
    sold_dt:string;
    warranty:number;
    notes:string;
    user_id:string;
    dept_cd:string;
    location_cd:string;
    purchase_val:number; 
    current_val:number;
    salvage_val:number;
    select:boolean;
    total_record:number;
    asset_type:AssetType;
    supplier:Supplier;
}