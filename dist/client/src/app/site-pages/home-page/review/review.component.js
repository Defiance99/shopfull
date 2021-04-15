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
var ReviewComponent_1, _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const auth_service_1 = require("src/app/shared/services/auth.service");
const review_service_1 = require("src/app/shared/services/review.service");
const core_2 = require("swiper/core");
core_2.default.use([core_2.Navigation]);
let ReviewComponent = ReviewComponent_1 = class ReviewComponent {
    constructor(reviewService, authService) {
        this.reviewService = reviewService;
        this.authService = authService;
        this.isAuthenticated = false;
        this.config = {
            navigation: {
                prevEl: '.custom-left-arrow-container',
                nextEl: '.custom-right-arrow-container'
            },
            spaceBetween: 20,
            slidesPerView: 1,
        };
    }
    ngOnInit() {
        this.getReviews(4);
        this.reviewForm = new forms_1.FormGroup({
            theme: new forms_1.FormControl("", [forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.maxLength(25)]),
            message: new forms_1.FormControl("", [forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(300)]),
        });
        this.rating = new forms_1.FormControl("", [forms_1.Validators.min(1), forms_1.Validators.max(5)]);
    }
    ngOnDestroy() {
        var _a;
        closeModalWindow();
        (_a = this.reviewSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    getReviews(limit) {
        this.reviews$ = this.reviewService.getByLimit(limit);
    }
    openReviewWindow() {
        this.isAuthenticated = this.authService.isAuthenticated();
        showModalReviewWindow();
    }
    openMessageModal(message) {
        showModalMessage(message);
    }
    onSubmit() {
        this.reviewForm.disable();
        let review = {
            'theme': this.reviewForm.value.theme,
            'message': this.reviewForm.value.message,
            'rating': this.rating.value
        };
        this.reviewSubscription = this.reviewService.create(review).subscribe(() => {
            this.reviewForm.enable();
            this.openMessageModal('Отзыв создан');
        }, err => {
            this.reviewForm.enable();
            this.openMessageModal(err.message);
        });
    }
};
ReviewComponent = ReviewComponent_1 = __decorate([
    core_1.Component({
        selector: 'app-review',
        templateUrl: './review.component.html',
        styleUrls: ['./review.component.scss'],
        providers: [
            {
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: core_1.forwardRef(() => ReviewComponent_1),
                multi: true
            }
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof review_service_1.ReviewService !== "undefined" && review_service_1.ReviewService) === "function" ? _a : Object, typeof (_b = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _b : Object])
], ReviewComponent);
exports.ReviewComponent = ReviewComponent;
//# sourceMappingURL=review.component.js.map