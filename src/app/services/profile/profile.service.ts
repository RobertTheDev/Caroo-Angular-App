import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IUser from 'models/user/types/User';
import { Observable } from 'rxjs';
import domainName from 'src/app/lib/constants/domainName';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private options = { withCredentials: true };

  constructor(private http: HttpClient) {}

  getProfile(): Observable<{ data: IUser | null }> {
    return this.http.get<{ data: IUser | null }>(
      `${domainName}/api/profile`,
      this.options,
    );
  }

  updateProfile(
    data: Partial<{
      firstName: string | null;
      lastName: string | null;
    }>,
  ): Observable<void> {
    return this.http.put<void>(
      `${domainName}/api/profile/update-profile`,
      data,
      this.options,
    );
  }
}
