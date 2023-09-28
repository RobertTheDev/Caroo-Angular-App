import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private apiUrl = 'http://localhost:4200/api/account';

  private options = { withCredentials: true };

  constructor(private http: HttpClient) {}

  updateEmailAddress(
    data: Partial<{
      emailAddress: string | null;
      password: string | null;
    }>,
  ): Observable<void> {
    return this.http.put<void>(
      `${this.apiUrl}/update-email-address`,
      data,
      this.options,
    );
  }

  updatePassword(
    data: Partial<{
      currentPassword: string | null;
      newPassword: string | null;
    }>,
  ): Observable<void> {
    return this.http.put<void>(
      `${this.apiUrl}/update-password`,
      data,
      this.options,
    );
  }

  closeAccount(
    data: Partial<{
      close: string | null;
      password: string | null;
    }>,
  ): Observable<void> {
    return this.http.post<void>(
      `${this.apiUrl}/close-account`,
      data,
      this.options,
    );
  }

  sendEmailVerificationToken(): Observable<void> {
    return this.http.post<void>(
      `${this.apiUrl}/verify-email/send-token`,
      this.options,
    );
  }

  verifyEmailWithToken(token: string): Observable<void> {
    return this.http.put<void>(
      `${this.apiUrl}/verify-email/${token}`,
      this.options,
    );
  }
}
