import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  #API_KEY: string = '122ff25a5fbe369b9dc701b94b06cdc8';
  #HTTP: string = 'https://api.themoviedb.org/3';

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


}
