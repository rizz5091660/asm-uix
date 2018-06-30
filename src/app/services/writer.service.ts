import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Book } from './../interfaces/book';
import { Writer } from './../interfaces/writer';

@Injectable()
export class WriterService {

  constructor(private http: HttpClient) { }
  textUrl = "/api/message";

  getTextMsg(): Observable<string> {
    return this.http.get(this.textUrl, {responseType: 'text'});
  }
  
  bookUrl = "/api/books";	
  getBooks(): Observable<Book[]> {
      return this.http.get<Book[]>(this.bookUrl);
  }

  filterBooks(category: string, year: string): Observable<Book[]> {
    let httpHeaders = new HttpHeaders()
                      .set('Accept', 'application/json');
          return this.http.get<Book[]>(this.bookUrl + '?category=' + category + '&year=' + year, {
              headers: httpHeaders,
              responseType: 'json'
      });
      }
      writerUrl = "/api/writer";

      getWriterWithFavBooks(): Observable<any> {
        return this.http.get(this.writerUrl, {responseType: 'json'});
    }	
    getFavoriteWriter(): Observable<Writer> {
        return this.http.get<Writer>(this.writerUrl, {responseType: 'json'});
    }		
    getFullResponseForWriter(): Observable<HttpResponse<any>> {
        return this.http.get(this.writerUrl, {
			   observe: 'response'
		   });
    }	

    myUrl = "/api/invalid";
    getDataForUrl(): Observable<any> {
	return this.http.get(this.myUrl);
    }	
}
