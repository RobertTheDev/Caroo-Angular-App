import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ICar from 'models/car/types/Car';
import { Observable } from 'rxjs';

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

  deleteCarById(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, this.options);
  }

  deleteCarsByUserId(ownerId: string) {
    return this.http.delete(`${this.apiUrl}/user/${ownerId}`);
  }

  getCarById(id: string): Observable<{ data: ICar }> {
    return this.http.get<{ data: ICar }>(`${this.apiUrl}/${id}`);
  }

  getCars(): Observable<{ data: ICar[] }> {
    return this.http.get<{ data: ICar[] }>(this.apiUrl);
  }

  getCarsByUserId(ownerId: string): Observable<{ data: ICar }> {
    return this.http.get<{ data: ICar }>(`${this.apiUrl}/user/${ownerId}`);
  }

  updateCarById(
    id: string,
    data: Partial<{
      make: string | null;
      model: string | null;
      colour: string | null;
    }>,
  ) {
    return this.http.put<void>(`${this.apiUrl}/${id}`, data, this.options);
  }
}
