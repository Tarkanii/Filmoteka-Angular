import { Pipe, PipeTransform } from '@angular/core';
import { FilmsService } from '../services/films.service';

@Pipe({
  name: 'getGenres'
})
export class GetGenresPipe implements PipeTransform {

  constructor(private filmsService: FilmsService){}

  transform(genreIds: number[], mediaType: string): string {
    const genresLine: any[] = [];
    genreIds.forEach((id: number) => {
      genresLine.push(this.filmsService.getGenre(mediaType, id)?.name);
    })
    return genresLine.join(', ');
  }
}
