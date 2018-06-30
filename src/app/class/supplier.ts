export class Supplier {
    cd:string;
    name:string;
    website:string;
    phone:string;
    email:string;

    toString(){
        return "cd:"+this.cd+" name:"+this.name+" website:"+this.website+" phone:"+this.phone+" email:"+this.email;
    }
}