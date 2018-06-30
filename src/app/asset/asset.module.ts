import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { AssetRoutingModule } from "./asset-routing.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { FormAssetComponent } from "./form-asset/form-asset.component";
import { ListAssetComponent } from "./list-asset/list-asset.component";
import { WriterComponent } from "./writer/writer.component";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule,} from '@angular/common/http';

import {WriterService} from './../services/writer.service';
import {AssetService} from './../services/asset.service';
import { EditAssetComponent } from './edit-asset/edit-asset.component';



@NgModule({
    imports: [
        CommonModule,
        AssetRoutingModule,
        NgbModule,
        ReactiveFormsModule,
        FormsModule,
        Ng2SmartTableModule,
        HttpClientModule
    ],
    exports: [],
    declarations: [
        FormAssetComponent,
        ListAssetComponent,
        WriterComponent,
        EditAssetComponent
    ],
    providers: [WriterService,AssetService],
})
export class AssetModule { }
