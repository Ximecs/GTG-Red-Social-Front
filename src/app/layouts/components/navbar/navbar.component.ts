import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/_services/profile.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  title = 'material-test';
  names: string[] = ['Ximena', 'sebastian', 'Andres', 'andrea', 'xiomara', 'salvador']; //llamado de la api

  control = new FormControl();
  filNames: Observable<string[]> | undefined;

  user: any;
  profile: any;
  defaultAvatar: string = '/assets/img/default-avatar.png';

  constructor(
    private tokenService: TokenStorageService,
    private router: Router,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.user = this.tokenService.getUser();
    this.getProfile();
  }

  logout(): void {
    this.tokenService.logout();
    this.router.navigate(['/login']);
  }

  changePhoto(e: any) {
    console.log('change photo called');
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    console.log(file);
    const formData = new FormData();
    formData.append('photo', file);
    this.profileService.uploadPhotoProfile(formData).subscribe({
      next: (data) => {
        console.log(data);
        this.ngOnInit();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  getProfile() {
    this.profileService.getProfile().subscribe({
      next: (response: any) => {
        this.profile = response.data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
