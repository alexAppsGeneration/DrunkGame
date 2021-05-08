import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class JsonReaderService {

  constructor(private http: HttpClient) {
  }

  public getJSON(url): Observable<any> {
    return this.http.get(url);
  }
}
