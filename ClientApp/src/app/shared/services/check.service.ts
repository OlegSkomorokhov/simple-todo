import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  constructor(
      private _http: HttpClient,
      @Inject('BASE_URL') private baseUrl: string
  ) { }

    getBackendString(): Observable<string>
    {
        return this._http.get<string>('check');
    }

}
