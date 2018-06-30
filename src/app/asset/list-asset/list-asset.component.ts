import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Asset } from '../../class/asset';
import { AssetInterface } from '../../interfaces/asset';
import { Observable } from 'rxjs/Observable';
import { AssetService } from '../../services/asset.service';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-list-asset',
    templateUrl: './list-asset.component.html',
    styleUrls: ['./list-asset.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ListAssetComponent implements OnInit {
    closeResult: string;
    assets: Asset[];
    assetsObs: Observable<Asset[]>;
    assetsInf: AssetInterface[];
    tag_s: string;
    model_s: string;
    asset: any;
    ngOnInit(): void { 
        this.loadListAsset(); 
        this.asset = new Asset();
    }
    constructor(private router: Router, private modalService: NgbModal, private assetService: AssetService) { }


    createAsset() {
        this.router.navigate(['asset/form-asset']);
    }

    loadListAsset() {
        this.assetsObs = this.assetService.loadListAssetWS();  
        this.assetsObs.subscribe((assetsObs) => {
            this.assetsInf = assetsObs;
            this.assets = this.assetsInf;
        }
        )
    }

    checkAll(event: any){
        for(var i =0;i<this.assets.length;i++){
            this.assets[i].select=event.currentTarget.checked;
        }
    }

    changePage(page: number){
        console.log("Page Number:",page);
        this.loadListAsset();
    }

    onSubmit(searchForm:NgForm){
        console.log(searchForm.value.tag_s,searchForm.value.model_s);
    }


    editAsset(asset){
        this.router.navigate(['asset/form-asset'],asset);
    }

    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }


}
