import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {HttpClient} from '@angular/common/http';
const version_number = 1.3;
import {BASE_URL} from './mock-heroes';


@Injectable({
  providedIn: 'root'
})
export class AuthHomeService {
  token;
  Data;
  constructor(private authService: AuthService,
              private http: HttpClient) {}

  getToken() {
    return this.http.post(BASE_URL + '/guest_login', JSON.stringify({'version_number': version_number}));
  }

  getData(token) {
    console.log('inside service', token);
    return  this.http.post(BASE_URL + '/home_data',
     JSON.stringify({'auth_token': token['auth_token'], 'version_number': version_number}));
  }
}
