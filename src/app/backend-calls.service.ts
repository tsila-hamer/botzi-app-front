
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class BackendCallsService
{
    //define the path to the http request
    readonly path : any = "http/blahBlahBlah";
    constructor( private httpClient: HttpClient  )
    {
    }
    getMatches(volunteerId: any): Observable<any> {

        return this.httpClient.get(this.path, {params: volunteerId});
    }
    //when you want to use the request create an object of this (ApiService)
    //and invoke ApiServiceObj.getMatches(volunteerId).subscribe(
//  data => this.matchesList = data; 
    //)
}