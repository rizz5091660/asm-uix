import { Asset } from "app/class/asset";

export interface UserInterface{
    id:string;
    f_name:string;
    l_name:string;
    user_id:string;
    dept_cd:string;
    dept_desc:string;
    assets:Asset[];
    email:string;
    phone:string;
    gender:string;
    select:boolean;
}