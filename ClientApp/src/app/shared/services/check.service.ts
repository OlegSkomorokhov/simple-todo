import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckService
{

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string)
  { }

  getBackendServiceName(): Observable<string>
  {
      return this.http.get<string>(this.baseUrl + 'check/serviceName');
  }

}
