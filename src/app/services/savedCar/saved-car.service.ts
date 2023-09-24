import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SavedCar } from '@prisma/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SavedCarService {
  private apiUrl = 'http://localhost:4200/api/saved-cars/';

  private options = { withCredentials: true };

  constructor(private http: HttpClient) {}

  createSavedCar(
    data: Partial<{
      carId: string | null;
      userId: string | null;
    }>,
  ): Observable<void> {
    return this.http.post<void>(this.apiUrl, data, this.options);
  }

  deleteSavedCarById(id: string) {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, this.options);
  }

  deleteSavedCarsByUserId(userId: string) {
    return this.http.delete<void>(
      `${this.apiUrl}/user/${userId}`,
      this.options,
    );
  }

  deleteSavedCarsByCarId(carId: string) {
    return this.http.delete<void>(`${this.apiUrl}/car/${carId}`, this.options);
  }

  getSavedCarById(id: string): Observable<{ data: SavedCar | null }> {
    return this.http.get<{ data: SavedCar | null }>(
      `${this.apiUrl}/${id}`,
      this.options,
    );
  }

  getSavedCarsByUserId(userId: string): Observable<{ data: SavedCar[] }> {
    return this.http.get<{ data: SavedCar[] }>(
      `${this.apiUrl}/user/${userId}`,
      this.options,
    );
  }

  getSavedCarsByCarId(carId: string): Observable<{ data: SavedCar[] }> {
    return this.http.get<{ data: SavedCar[] }>(
      `${this.apiUrl}/car/${carId}`,
      this.options,
    );
  }
}
