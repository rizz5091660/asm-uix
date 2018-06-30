import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';



import {FormUserComponent} from './form-user/form-user.component';
import {ListUserComponent} from './list-user/list-user.component';

const routes:Routes =[
    { 
        path :'',
        children: [
            {
                path:'list-user',
                component:ListUserComponent,
                data: {
                    title: 'List User'
                  }
            },
            {
                path: 'form-user',
                component:FormUserComponent,
                data: {
                    title: 'Form User'
                  }
            }
        ]
    }
]
 @NgModule({
     imports: [RouterModule.forChild(routes)],
     exports : [RouterModule],
 })
 export class UserRoutingModule{}

