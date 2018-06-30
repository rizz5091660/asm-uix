import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AssetInterface } from '../interfaces/asset';

@Injectable()
export class AssetService {
  results:Object[];
  loading:boolean;
  assets:AssetInterface[];
  url_asset_list:string="http://demo8557561.mockable.io/list-asset"; 
  url_detail_asset:string="http://demo8557561.mockable.io/detail-asset"; 

  constructor(private http:HttpClient) { 
    this.results = [];
    this.loading = false;
  }

  loadListAssetWS():Observable<AssetInterface[]>{
    return this.http.get<AssetInterface[]>(this.url_asset_list);
  }

  loadAsset(){
    return this.loadListAssetWS().subscribe((assets: AssetInterface[]) => this.assets = assets);
  }

  loadDetailAssetWS(id:string):Observable<AssetInterface>{
    return this.http.get<AssetInterface>(this.url_detail_asset);
  }


}

