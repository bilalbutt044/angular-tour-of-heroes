import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {BASE_URL} from './mock-heroes';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


const version_number = 1.3;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authData;
  constructor(private http: HttpClient) { }
  getToken() {
        return this.http.post(BASE_URL + '/guest_login', JSON.stringify({'version_number': version_number}))
         .subscribe( res => {
          console.log(res)
           res
        });
      // return this.authData;
    // return this.http.post(BASE_URL + '/home_data', JSON.stringify({'auth_token': token['auth_token'], 'version_number': version_number}));
  }
}
