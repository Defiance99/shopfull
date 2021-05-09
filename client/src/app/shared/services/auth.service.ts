import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthTokens, Message, SignInForm, User } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string | null = null;

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
    ) { }


  register(userForm: User): Observable<Message> {
    return this.http.post<Message>('/api/auth/signUp', userForm);
  }

  login(signInForm: SignInForm): Observable<AuthTokens> {
    return this.http.post<AuthTokens>('/api/auth/signIn', signInForm)
      .pipe(
        tap(
          (tokens: any) => {
            localStorage.setItem('access_token', tokens['access_token']);
            localStorage.setItem('refresh_token', tokens['refresh_token']);
            /* this.cookieService.set('refresh_token', tokens['refresh_token']); */
            this.setToken(tokens['access_token']);
          }
        )
      )
  }
  
  setToken(token: string | null) {
    this.token = token;
  }

  getToken(): string | null {
    return this.token;
  }

  logout() {
    this.setToken(null);
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }

  logoutAllDevice(): Observable<Message> {
    return this.http.get<Message>('/api/auth/logoutAllDevice');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  updateTokens(): Observable<AuthTokens | boolean> {
    let tokens = {
      /* 'refresh_token': this.cookieService.get('refresh_token'), */
      'access_token': localStorage.getItem('access_token'),
      'refresh_token': localStorage.getItem('refresh_token')
    }
    if (tokens['refresh_token'] == '') return of(false);
    return this.http.post<AuthTokens>('/api/auth/updateTokens', tokens)
      .pipe(
        tap(
          (tokens: any) => {
            localStorage.setItem('access_token', tokens['access_token']);
            localStorage.setItem('refresh_token', tokens['refresh_token']);
            /* this.cookieService.set('refresh_token', tokens['refresh_token']); */
            this.setToken(tokens['access_token']);
          }
        )
      )
  }

}
