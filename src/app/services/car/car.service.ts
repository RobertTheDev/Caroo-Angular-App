import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '@prisma/client';
import { Observable } from 'rxjs';
import A from 'src/app/types/CarWithImages';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private apiUrl = 'http://localhost:4200/api/cars/';

  constructor(private http: HttpClient) {}

  getCars(): Observable<{ data: A[] }> {
    return this.http.get<{ data: A[] }>(this.apiUrl);
  }

  getCarById(id: string): Observable<{ data: Car }> {
    return this.http.get<{ data: Car }>(`${this.apiUrl}/${id}`);
  }
}
