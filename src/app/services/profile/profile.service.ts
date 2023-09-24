import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@prisma/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private apiUrl = 'http://localhost:4200/api/profile/';

  private options = { withCredentials: true };

  constructor(private http: HttpClient) {}

  getProfile(): Observable<{ data: User | null }> {
    return this.http.get<{ data: User | null }>(this.apiUrl, this.options);
  }

  updateProfile(
    data: Partial<{
      firstName: string | null;
      lastName: string | null;
    }>,
  ): Observable<void> {
    return this.http.put<void>(this.apiUrl, data, this.options);
  }
}
