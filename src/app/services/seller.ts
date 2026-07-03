import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Seller {
  constructor(private httpClient: HttpClient) {}

  userSignUp(data: object) {
    return this.httpClient.post('lo', data);
  }
}
