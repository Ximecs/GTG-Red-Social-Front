import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/_services/profile.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  title = 'material-test';
  names: string[] = ['Ximena', 'sebastian', 'Andres', 'andrea', 'xiomara', 'salvador']; //lamado de la api

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

    this.filNames = this.control.valueChanges.pipe(
      startWith(''),
      map(val => this.filter(val))
    );
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
        // this.ngOnInit();
        window.location.reload();

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

  public filter(val: string): string[] {
    const formatVal = val.toLocaleLowerCase();

    return this.names.filter(userName => userName.toLocaleLowerCase().indexOf(formatVal) == 0);
  }
}
