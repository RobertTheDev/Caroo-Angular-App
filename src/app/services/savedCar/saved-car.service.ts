import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ISavedCar from 'models/savedCar/types/SavedCar';
import { Observable } from 'rxjs';
import domainName from 'src/app/lib/constants/domainName';

@Injectable({
  providedIn: 'root',
})
export class SavedCarService {
  private apiUrl = `${domainName}/api/saved-cars`;

  private options = { withCredentials: true };

  constructor(private http: HttpClient) {}

  createSavedCar(id: string): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${id}`, this.options);
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

  getSavedCarById(id: string): Observable<{ data: ISavedCar | null }> {
    return this.http.get<{ data: ISavedCar | null }>(
      `${this.apiUrl}/${id}`,
      this.options,
    );
  }

  getSavedCars(): Observable<{ data: ISavedCar[] }> {
    return this.http.get<{ data: ISavedCar[] }>(`${this.apiUrl}`, this.options);
  }

  getSavedCarsByCarId(carId: string): Observable<{ data: ISavedCar[] }> {
    return this.http.get<{ data: ISavedCar[] }>(
      `${this.apiUrl}/car/${carId}`,
      this.options,
    );
  }
}
