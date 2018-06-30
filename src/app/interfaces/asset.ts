import { AssetType } from "../class/asset_type";
import { Supplier } from "../class/supplier";

export interface AssetInterface{ 
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
    // id:23443550393343;
    // tag:Dell49Lati;
    // status_cd:D;
    // model:Latitude E6420;
    // type_id:LPTP;
    // purchase_dt:27/5/2018;
    // sold_dt:null;
    // warranty:24;
    // notes:null
    // user_id:rsani
    // dept_id:IT 
    // notes:string;
    // location_id:WW3F;
    // current_value:number;
    // salvage_value:number;
