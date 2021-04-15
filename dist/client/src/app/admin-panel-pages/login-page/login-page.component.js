"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPageComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const auth_service_1 = require("src/app/shared/services/auth.service");
const user_service_1 = require("src/app/shared/services/user.service");
let LoginPageComponent = class LoginPageComponent {
    constructor(authService, userService, router, route) {
        this.authService = authService;
        this.userService = userService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.signInForm = new forms_1.FormGroup({
            login: new forms_1.FormControl("", [forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.maxLength(20)]),
            password: new forms_1.FormControl("", [forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.maxLength(20)])
        });
        this.route.queryParams.subscribe(params => {
            if (params['registered']) {
                showModalMessage('Зарегистрированны');
            }
            else if (params['accessDenied']) {
                showModalMessage('Не авторизованы');
            }
        });
    }
    ngOnDestroy() {
        if (this.authSub) {
            this.authSub.unsubscribe();
        }
    }
    onSubmit() {
        this.signInForm.disable();
        this.authSub = this.authService.login(this.signInForm.value).subscribe(() => {
            this.router.navigate(['/admin-panel']);
        }, err => {
            this.signInForm.enable();
        });
    }
};
LoginPageComponent = __decorate([
    core_1.Component({
        selector: 'app-login-page',
        templateUrl: './login-page.component.html',
        styleUrls: ['./login-page.component.scss']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object, typeof (_b = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _b : Object, router_1.Router,
        router_1.ActivatedRoute])
], LoginPageComponent);
exports.LoginPageComponent = LoginPageComponent;
//# sourceMappingURL=login-page.component.js.map