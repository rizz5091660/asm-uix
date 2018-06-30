export class AssetType{
    cd:string;
    name:string;
    depriciation:number;
    retirement:number;
    
   toString(){
      return "cd:"+this.cd+" desc:"+this.name+" Depriciation:"+this.depriciation+" Retirement:"+this.retirement;
   }

}