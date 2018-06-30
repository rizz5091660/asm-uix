import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './list-user/list-user.component';
import { FormUserComponent } from './form-user/form-user.component';
import {UserRoutingModule} from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { UserService } from '../services/user.service';

import {HttpClientModule,} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    NgxDatatableModule,
    FormsModule, ReactiveFormsModule ,
    HttpClientModule,
    NgbModule
  ],
  declarations: [ListUserComponent, FormUserComponent],
  providers: [UserService],
})
export class UserModule { }
