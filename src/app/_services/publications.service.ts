import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {
  headers = new HttpHeaders({
    token: this.tokenService.getToken!,
  });
  constructor(private http: HttpClient, private tokenService: TokenStorageService) { }

  uploadPost(post: any) {
    return this.http.post(
      `${environment.apiUrl}/api/publications/newPost`, post,
      { headers: this.headers }
    );
  };
  getPost() {
    return this.http.get(
      `${environment.apiUrl}/api/publications/getPublications`,
      { headers: this.headers }
    )
  };
  getPostByUser(user: any) {
    return this.http.post(
      `${environment.apiUrl}/api/publications/getPublicationByUser`, user

    )
  };
};
// hola