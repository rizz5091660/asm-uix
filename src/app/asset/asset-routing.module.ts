import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormAssetComponent } from "./form-asset/form-asset.component";
import { ListAssetComponent } from "./list-asset/list-asset.component";
import { WriterComponent } from "./writer/writer.component";
import { EditAssetComponent } from './edit-asset/edit-asset.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'form-asset',
        component: FormAssetComponent,
        data: {
          title: 'Form Asset'
        }
      },
      {
        path: 'edit-asset/:id',
        component: EditAssetComponent,
        data: {
          title: 'Detail Asset'
        }
      },
      {
        path: 'list-asset',
        component: ListAssetComponent,
        data: {
          title: 'List Asset'
        }
      },
      {
        path: 'writer',
        component: WriterComponent,
        data: {
          title: 'Writer'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssetRoutingModule { }
