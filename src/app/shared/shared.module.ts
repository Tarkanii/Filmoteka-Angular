import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './components/dialogs/confirm-dialog/confirm-dialog/confirm-dialog.component';
import { FilmDialogComponent } from './components/dialogs/film-dialog/film-dialog.component';
import { FilmDetailsDialogComponent } from './components/dialogs/film-details-dialog/film-details-dialog.component';



@NgModule({
  declarations: [
    ConfirmDialogComponent,
    FilmDialogComponent,
    FilmDetailsDialogComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
