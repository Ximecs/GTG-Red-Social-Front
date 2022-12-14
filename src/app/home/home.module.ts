import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { ChooseFilComponent } from './choose-fil/choose-fil.component';
import {MatListModule} from '@angular/material/list';
import { QuestionBoxComponent } from './question-box/question-box.component';
import { CloseViewComponent } from './close-view/close-view.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent, DialogBoxComponent, ChooseFilComponent, QuestionBoxComponent, CloseViewComponent],
  imports: [CommonModule, MatBottomSheetModule, MatSelectModule, HomeRoutingModule, MatInputModule,MatCardModule,
    MatIconModule,MatButtonModule,MatDialogModule,MatFormFieldModule, MatListModule,FormsModule,ReactiveFormsModule]
})
export class HomeModule {}
