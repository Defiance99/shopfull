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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterPageComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const user_service_1 = require("src/app/shared/services/user.service");
let RegisterPageComponent = class RegisterPageComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.hide = true;
    }
    ngOnInit() {
        this.signUpForm = new forms_1.FormGroup({
            userName: new forms_1.FormControl("", [forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.maxLength(20)]),
            email: new forms_1.FormControl("", [forms_1.Validators.required, forms_1.Validators.email, forms_1.Validators.minLength(4), forms_1.Validators.maxLength(20)]),
            login: new forms_1.FormControl("", [forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.maxLength(20)]),
            password: new forms_1.FormControl("", [forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.maxLength(20)])
        });
    }
    ngDoCheck() {
    }
    ngOnDestroy() {
        if (this.authSub) {
            this.authSub.unsubscribe();
        }
    }
    onSubmit() {
        if (this.signUpForm.valid) {
            this.signUpForm.disable();
            this.authSub = this.userService.signUpUser(this.signUpForm.value).subscribe(() => {
                this.router.navigate(['/admin-panel/login']);
            }, err => {
                this.signUpForm.enable();
            });
        }
    }
};
RegisterPageComponent = __decorate([
    core_1.Component({
        selector: 'app-register-page',
        templateUrl: './register-page.component.html',
        styleUrls: ['./register-page.component.scss']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object, router_1.Router])
], RegisterPageComponent);
exports.RegisterPageComponent = RegisterPageComponent;
//# sourceMappingURL=register-page.component.js.map