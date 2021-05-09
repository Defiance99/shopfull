import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthTokens, Message, SignInForm, User } from '../interfaces';

import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  let user: User = {
    'userName': 'Tester',
    'login': 'test',
    'email': 'test@gmail.com',
    'password': 'test123'
  }
  let authTokens: AuthTokens;
  let signInForm: SignInForm;
  let valueResponse: Message = { message: '' };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.get(HttpTestingController);
    service = TestBed.inject(AuthService);
    authTokens = {
      'access_token': 'access',
      'refresh_token': 'refresh'
    }
    // imitation local storage
    let store: any = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };
    
    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);
    // close
  });

  afterEach(() => {
    valueResponse.message = '';
    signInForm = { 'login': '', 'password': '' };
  });

  it('should return created user at sign up', () => {
    // Arrange 
    valueResponse.message = 'Зарегистрированны';
    //Act
    service.register(user).subscribe(result => {
      //Assert
      expect(result).toBe(valueResponse);
    });
    //Assert
    const req = httpMock.expectOne('/api/auth/signUp');
    expect(req.request.method).toEqual('POST');
    req.flush(valueResponse); // Ensures the correct data was returned using Subscribe callback.

    httpMock.verify(); //Ensures that all request are fulfilled and there are no outstanding requests.
  });

  it('should return auth tokens at sign in', () => {
    signInForm = {
      'login': 'admin',
      'password': 'admin'
    }
    service.login(signInForm).subscribe(result => {
      expect(result).toBe(authTokens);
    });
    const req = httpMock.expectOne('/api/auth/signIn');
    expect(req.request.method).toEqual('POST');
    req.flush(authTokens);
    httpMock.verify();
  });

  it('should return updated auth tokens', () => {
    localStorage.setItem('access_token', 'access');
    localStorage.setItem('refresh_token', 'refresh');
    service.updateTokens().subscribe(result => {
      expect(result).toEqual(authTokens);
    });
    const req = httpMock.expectOne('/api/auth/updateTokens');
    expect(req.request.method).toEqual('POST');
    req.flush(authTokens);
    httpMock.verify();
  });

  it('should return failed at update tokens', () => {
    localStorage.setItem('refresh_token', '');
    service.updateTokens().subscribe(result => {
      expect(result).toBe(false);
    });
  });

  it('should remove auth tokens', () => {
    localStorage.setItem('access_token', 'access');
    localStorage.setItem('refresh_token', 'refresh');
    service.logout(); 
    expect(localStorage.getItem('access_token')).toBeNull();
    expect(localStorage.getItem('refresh_token')).toBeNull();
  });

  it('should return false isAuthnticated when there is not a token', () => {
    service.setToken(null);
    expect(service.isAuthenticated()).toBeFalse();
  })

  it('should return true isAuthnticated when there is a token', () => {
    service.setToken('1234');
    expect(service.isAuthenticated()).toBeTrue();
  });
});
