import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmDetailsDialogComponent } from './components/dialogs/film-details-dialog/film-details-dialog.component';
import { ConfirmDialogComponent } from './components/dialogs/confirm-dialog/confirm-dialog.component';



@NgModule({
  declarations: [
    ConfirmDialogComponent,
    FilmDetailsDialogComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
