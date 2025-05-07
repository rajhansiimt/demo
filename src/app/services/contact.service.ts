import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpService: HttpService) { }

  addContactForm(payload: FormData): Observable<any> {
    return this.httpService.postReq('contact-us-registry', payload);
  }

  getFashion() : Observable<any>{
    return this.httpService.getReq('fashion');
  }

  getBeauty() : Observable<any>{
    return this.httpService.getReq('beauty');
  }

  getCover() : Observable<any>{
    return this.httpService.getReq('cover');
  }

  getCommercial() : Observable<any>{
    return this.httpService.getReq('commercial');
  }

  getpersional() : Observable<any>{
    return this.httpService.getReq('persional');
  }

  getabout() : Observable<any>{
    return this.httpService.getReq('about-us-registry');
  }

  gethome() : Observable<any>{
    return this.httpService.getReq('home');
  }

  getvedio() : Observable<any>{
    return this.httpService.getReq('vedio');
  }

}
