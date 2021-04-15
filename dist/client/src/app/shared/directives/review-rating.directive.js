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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewRatingDirective = void 0;
const core_1 = require("@angular/core");
let ReviewRatingDirective = class ReviewRatingDirective {
    constructor(element) {
        this.element = element;
        this.isHovered = false;
    }
    onMouseEnter(event) {
        console.log(this.element, event);
        this.isHovered = true;
    }
    onMouseLeave() {
        this.isHovered = false;
    }
};
__decorate([
    core_1.HostBinding('class.review-form__rating-img_hovered'),
    __metadata("design:type", Object)
], ReviewRatingDirective.prototype, "isHovered", void 0);
__decorate([
    core_1.HostListener('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReviewRatingDirective.prototype, "onMouseEnter", null);
__decorate([
    core_1.HostListener('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReviewRatingDirective.prototype, "onMouseLeave", null);
ReviewRatingDirective = __decorate([
    core_1.Directive({
        selector: '[appReviewRating]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], ReviewRatingDirective);
exports.ReviewRatingDirective = ReviewRatingDirective;
//# sourceMappingURL=review-rating.directive.js.map