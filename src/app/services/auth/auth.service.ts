import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IUser from 'models/user/types/User';
import { Observable } from 'rxjs';
import domainName from 'src/app/lib/constants/domainName';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private options = { withCredentials: true };

  getAuthenticatedUser(): Observable<{ data: IUser | null }> {
    return this.http.get<{ data: IUser | null }>(
      `${domainName}/api/auth/authenticated-user`,
      this.options,
    );
  }

  sendPasswordResetToken(data: Partial<{ emailAddress: string | null }>) {
    return this.http.post<void>(
      `${domainName}/api/auth/reset-password/send-token`,
      data,
      this.options,
    );
  }

  resetPasswordWithToken(
    token: string,
    data: Partial<{ password: string | null }>,
  ) {
    return this.http.put<void>(
      `${domainName}/api/auth/reset-password/${token}`,
      data,
      this.options,
    );
  }

  logOut() {
    return this.http.delete<void>(
      `${domainName}/api/auth/logout`,
      this.options,
    );
  }

  logIn(
    data: Partial<{ emailAddress: string | null; password: string | null }>,
  ) {
    return this.http.post<void>(
      `${domainName}/api/auth/login`,
      data,
      this.options,
    );
  }

  signUp(
    data: Partial<{
      emailAddress: string | null;
      firstName: string | null;
      lastName: string | null;
      password: string | null;
    }>,
  ) {
    return this.http.post<void>(
      `${domainName}/api/auth/sign-up`,
      data,
      this.options,
    );
  }
}
