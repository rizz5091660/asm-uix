import { Component, OnInit } from '@angular/core';
import { AssetService } from './../../services/asset.service';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Asset } from './../../class/asset';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AssetType } from '../../class/asset_type';
import { Supplier } from '../../class/supplier';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AssetInterface } from '../../interfaces/asset';

@Component({
    selector: 'app-wizard-forms',
    templateUrl: './form-asset.component.html',
    styleUrls: ['./form-asset.component.scss']
})
export class FormAssetComponent implements OnInit {
    asset: Asset;
    closeResult: string;
    id: string;
    sub: any;
    assetsObs: Observable<Asset>;
    assetsInf: AssetInterface;
    asset_type: AssetType;
    supplier: Supplier;
    isCollapsed = true;

    ngOnInit() {
        this.asset_type = new AssetType();
        this.supplier = new Supplier();
        this.asset = new Asset();
        this.sub=this.route.params.subscribe(params => {
            this.id = params['id'];
        });
        if(this.id!=null){
            this.loadDetailAsset(this.id);
        }
    }


    constructor(private modalService: NgbModal, private route: ActivatedRoute, private assetService: AssetService) { }


    loadDetailAsset(id:string) {
        this.assetsObs = this.assetService.loadDetailAssetWS(id);
        this.assetsObs.subscribe((assetsObs) => {
            this.assetsInf = assetsObs;
            this.asset = this.assetsInf;
        }
        )
    }

    openNewSupplier(content2) {
        this.modalService.open(content2).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    openNewAssetType(content1) {
        this.modalService.open(content1).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    // This function is used in open
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    onSubmit(assetForm: NgForm) {
        console.log(assetForm.value.tag);
    }

    addAssetType() {
        console.log(this.asset.asset_type.toString());
    }

    addSupplier() {
        console.log(this.asset.supplier.toString());
    }
}
