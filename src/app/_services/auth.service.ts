import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(account: any) {
    return this.http.post(`${environment.apiUrl}/api/accounts/newAccount`, account);
  }

  login(account: any){
    return this.http.post(`${environment.apiUrl}/api/auth/login`, account);
  }
  
   googleLogin(googleAccount: any) {
    return this.http.post(
       `${environment.apiUrl}/api/auth/googleLogin`,
       googleAccount
    );
   }
}