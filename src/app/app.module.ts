import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { SocialLayoutComponent } from './layouts/social-layout/social-layout.component';
import { NavbarComponent } from './layouts/components/navbar/navbar.component';
import { FooterComponent } from './layouts/components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatMenuModule } from '@angular/material/menu';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    SocialLayoutComponent,
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
