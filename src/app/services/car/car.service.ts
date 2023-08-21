import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '@prisma/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private apiUrl = 'api/cars';

  constructor(private http: HttpClient) {}

  getCars(): Observable<{ data: Car[] }> {
    return this.http.get<{ data: Car[] }>(this.apiUrl);
  }

  getCarById(): Observable<{ data: Car | null }> {
    return this.http.get<{ data: Car | null }>(this.apiUrl);
  }
}
