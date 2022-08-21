import { Component, Input, OnInit } from '@angular/core';
import { FilmInfo } from '../../interfaces/films';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  
  constructor() { 
    console.log('constructor', this.film);
  }
  
  @Input() film: FilmInfo | undefined;
  posterPath: string = '';
  title: string = '';
  genreIds: number[] = [];
  mediaType: string = '';
  releaseDate: string = '';
  averageVote: string = '';
  
  ngOnInit(): void {
    console.log('init', this.film);
    this.posterPath = 'https://image.tmdb.org/t/p/w500' + this.film?.poster_path;
    this.title = (this.film?.title || this.film?.name) ?? '';
    this.genreIds = this.film?.genre_ids ?? [];
    this.mediaType = this.film?.media_type ?? '';
    this.releaseDate = (this.film?.first_air_date || this.film?.release_date) ?? '';
    this.averageVote = this.film?.vote_average?.toFixed(1) ?? ''; 
  }
}
