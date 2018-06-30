import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserInterface } from '../interfaces/user';

@Injectable()
export class UserService{
    results:Object[];
    loading:boolean;
    users:UserInterface[];
    url_user_list:string="http://demo8557561.mockable.io/list-user"; 
  
    constructor(private http:HttpClient) { 
      this.results = [];
      this.loading = false;
    }

    loadListAssetWS():Observable<UserInterface[]>{
        return this.http.get<UserInterface[]>(this.url_user_list);
      }
    
}