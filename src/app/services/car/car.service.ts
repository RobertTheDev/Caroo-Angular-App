import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import CarWithImages from 'src/app/types/CarWithImages';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private apiUrl = 'http://localhost:4200/api/cars/';

  private options = { withCredentials: true };

  constructor(private http: HttpClient) {}

  createCar(
    data: Partial<{
      make: string | null;
      model: string | null;
      colour: string | null;
    }>,
  ) {
    return this.http.post<void>(this.apiUrl, data, this.options);
  }

  getCars(): Observable<{ data: CarWithImages[] }> {
    return this.http.get<{ data: CarWithImages[] }>(this.apiUrl);
  }

  getCarById(id: string): Observable<{ data: CarWithImages }> {
    return this.http.get<{ data: CarWithImages }>(`${this.apiUrl}/${id}`);
  }
}
