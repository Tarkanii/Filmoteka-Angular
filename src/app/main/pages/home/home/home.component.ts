import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ServerResponse } from 'src/app/shared/interfaces/films';
import { FilmsService } from 'src/app/shared/services/films.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public films: any[] = [];
  private unsubscribe: Subject<void> = new Subject();

  constructor(
    private filmsService: FilmsService
  ) { }

  ngOnInit(): void {
    this.filmsService.getFilms()
    .pipe(takeUntil(this.unsubscribe))
    .subscribe((response: ServerResponse) => {
      this.films = response.results;
    },  
    (err) => console.log(err))
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
