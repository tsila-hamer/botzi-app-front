import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class BackendCallsService
{
  //define the path to the http request
   readonly path : any = "https://588e8eaf3f6b.ngrok.io/app/volunteer_matches/";
    constructor( private httpClient: HttpClient  )
    {
    }
    getMatches(volunteerId: any):  Observable<any> {
      let param1 = new  HttpParams().set('idUser', volunteerId);
     return this.httpClient.get(this.path, {params: param1});
      // return this.httpClient.get(this.path);
    }
    //when you want to use the request create an object of this (ApiService)
    //and invoke ApiServiceObj.getMatches(volunteerId).subscribe(
//  data => this.matchesList = data;
    //)
}
