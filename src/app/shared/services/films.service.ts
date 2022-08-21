import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Genre } from '../interfaces/films';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  #API_KEY: string = '122ff25a5fbe369b9dc701b94b06cdc8';
  #HTTP: string = 'https://api.themoviedb.org/3';

  public genres: { movie: Genre[], tv: Genre[] } = { tv: [], movie: [] };
  public genresSetted: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient
  ) { }

  public getFilms(): Observable<any> {
    return this.http.get(`${this.#HTTP}/trending/all/week`, {
      params: {
        api_key: this.#API_KEY,
      }
    });
  }

  public async setGenres(): Promise<void> {
    ['tv', 'movie'].forEach(async (type: string) => {
      this.genres[type as keyof typeof this.genres] = await this.getGenres(type);
      sessionStorage.setItem('genres', JSON.stringify(this.genres));
      if (type === 'movie') {
        this.genresSetted.next(true);
      }
    })
  }

  public getGenres(mediaType: string): Promise<Genre[]> {
    const genres = sessionStorage.getItem('genres');
    if (genres) {
      return JSON.parse(genres)[mediaType];
    }

    return new Promise((resolve, reject) => {
      this.http.get(`${this.#HTTP}/genre/${mediaType}/list`, {
        params: {
          api_key: this.#API_KEY,
        }
      }).pipe(take(1)).subscribe((genres: any) => resolve(genres.genres), (error: any) => reject(error));
    })
  }

  public getGenre(type: string, id: number): Genre | undefined {
    return this.genres[type as keyof typeof this.genres].find((genre: Genre) => genre.id === id);
  }
}
