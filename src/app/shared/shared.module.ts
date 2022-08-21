import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmDetailsDialogComponent } from './components/dialogs/film-details-dialog/film-details-dialog.component';
import { ConfirmDialogComponent } from './components/dialogs/confirm-dialog/confirm-dialog.component';
import { FilmComponent } from './components/film/film.component';
import { GetGenresPipe } from './pipes/get-genres.pipe';



@NgModule({
  declarations: [
    ConfirmDialogComponent,
    FilmDetailsDialogComponent,
    FilmComponent,
    GetGenresPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilmComponent,
    GetGenresPipe
  ]
})
export class SharedModule { }
