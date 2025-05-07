import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const LOCALURL = environment.apiUrl;
// const EXTERNALURL = environment.externalUrl;

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getReq(url: string, p0?: { headers: HttpHeaders }): Observable<any> {
    console.log("fullurl",`${LOCALURL}/${url}`)
    return this.http.get(`${LOCALURL}/${url}`, p0);
  }

  postReq(url: string, payload: any): Observable<any> {
    return this.http.post(`${LOCALURL}/${url}`, payload);
  }

  patchReq(url: string, payload: any): Observable<any> {
    return this.http.patch(`${LOCALURL}/${url}`, payload);
  }

  putReq(url: string, payload: any): Observable<any> {
    return this.http.put(`${LOCALURL}/${url}`, payload);
  }

  deleteReq(url: string): Observable<any> {
    return this.http.delete(`${LOCALURL}/${url}`);
  }

}
