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
exports.ReviewsPageComponent = void 0;
const core_1 = require("@angular/core");
const review_service_1 = require("src/app/shared/services/review.service");
let ReviewsPageComponent = class ReviewsPageComponent {
    constructor(reviewService) {
        this.reviewService = reviewService;
    }
    ngOnInit() {
        this.reviews$ = this.reviewService.getAll();
    }
};
ReviewsPageComponent = __decorate([
    core_1.Component({
        selector: 'app-reviews-page',
        templateUrl: './reviews-page.component.html',
        styleUrls: ['./reviews-page.component.scss']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof review_service_1.ReviewService !== "undefined" && review_service_1.ReviewService) === "function" ? _a : Object])
], ReviewsPageComponent);
exports.ReviewsPageComponent = ReviewsPageComponent;
//# sourceMappingURL=reviews-page.component.js.map