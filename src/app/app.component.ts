import { Component, OnInit } from '@angular/core';
import { FilmsService } from './shared/services/films.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Filmoteka';

  constructor(private filmsService: FilmsService){}
  
  ngOnInit(): void {
    this.filmsService.setGenres();
  }
}
