import { HttpClient } from '@angular/common/http';
import { SignInForm, User } from '../interfaces';
export declare class UserService {
    private http;
    constructor(http: HttpClient);
    signUpUser(userForm: User): import("rxjs").Observable<Object>;
    signInUser(signInForm: SignInForm): import("rxjs").Observable<Object>;
}
