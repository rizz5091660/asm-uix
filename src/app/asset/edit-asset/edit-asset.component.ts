import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Asset } from '../../class/asset';
import { AssetService } from '../../services/asset.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AssetInterface } from '../../interfaces/asset';
import { AssetType } from '../../class/asset_type';
import { Supplier } from '../../class/supplier';
import { AssetFinanceSummary } from '../../class/asset_finance_summary';
import { AssetFinanceDetail } from '../../class/asset_finance_detail';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct, NgbDatepickerI18n, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';


const now = new Date();

@Component({
  selector: 'app-edit-asset',
  templateUrl: './edit-asset.component.html',
  styleUrls: ['./edit-asset.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditAssetComponent implements OnInit {
  closeResult: string;
  asset: Asset;
  assetObs: Observable<Asset>;
  assetInf: AssetInterface;
  assetTyp: AssetType;
  supplier: Supplier;
  sub: any;
  id: string;
  af_summry: AssetFinanceSummary;
  af_detl: AssetFinanceDetail;
  af_detls: AssetFinanceDetail[] = [ ];
  model: NgbDateStruct;

  constructor(private assetService: AssetService, private route: ActivatedRoute, private modalService: NgbModal) { }

  ngOnInit() {
    this.asset = new Asset();
    this.af_detl = new AssetFinanceDetail();
    this.af_summry= new AssetFinanceSummary();
    this.sub = this.route.params.subscribe(
      params => { this.id = params['id']; }
    )
    this.loadDetailAsset(this.id);
    this.selectToday();
  }

  loadDetailAsset(id: string) {
    this.assetObs = this.assetService.loadDetailAssetWS(id);
    this.assetObs.subscribe(
      (assetObs) => {
        this.assetInf = assetObs;
        this.asset = this.assetInf;
      }
    )
  }

  selectToday() {
    this.model = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  addCost() {
    this.af_detls.push(this.af_detl);
    if(this.af_detl.cost_factor_typ=='PC'){
      this.af_summry.purchase_cost=parseInt(this.af_summry.purchase_cost.toString())+parseInt(this.af_detl.cost.toString());
    }
    else if(this.af_detl.cost_factor_typ=='SC'||this.af_detl.cost_factor_typ=='DC'||this.af_detl.cost_factor_typ=='CC'){
      this.af_summry.operational_cost=parseInt(this.af_summry.operational_cost.toString())+parseInt(this.af_detl.cost.toString());
    }
    this.af_summry.total_cost_ownership=parseInt(this.af_summry.total_cost_ownership.toString())+parseInt(this.af_detl.cost.toString());
    this.af_detl= new AssetFinanceDetail();
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
