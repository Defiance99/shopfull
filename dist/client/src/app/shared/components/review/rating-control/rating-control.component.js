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
var RatingControlComponent_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingControlComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
let RatingControlComponent = RatingControlComponent_1 = class RatingControlComponent {
    constructor() {
        this.stars = [1, 2, 3, 4, 5];
        this.rating = 0;
        this.onChange = (value) => { };
        this.onTouched = () => { };
    }
    ngOnInit() {
    }
    writeValue(value) {
        this.rating = value;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    countStar(star) {
        this.rating = star;
        this.onChange(star);
        this.onTouched();
    }
    addClass(star) {
        let ab = "";
        for (let i = 0; i < star; i++) {
            ab = "starId" + i;
            this.ratingReviewRef.nativeElement.querySelector(`#${ab}`).classList.add("review-form__rating-img_hovered");
        }
    }
    removeClass(star) {
        let ab = "";
        for (let i = star - 1; i >= this.rating; i--) {
            ab = "starId" + i;
            this.ratingReviewRef.nativeElement.querySelector(`#${ab}`).classList.remove("review-form__rating-img_hovered");
        }
    }
};
__decorate([
    core_1.ViewChild('ratingReviewWrapper'),
    __metadata("design:type", core_1.ElementRef)
], RatingControlComponent.prototype, "ratingReviewRef", void 0);
RatingControlComponent = RatingControlComponent_1 = __decorate([
    core_1.Component({
        selector: 'app-rating-control',
        templateUrl: './rating-control.component.html',
        styleUrls: ['./rating-control.component.scss'],
        providers: [{
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: core_1.forwardRef(() => RatingControlComponent_1),
                multi: true
            }]
    }),
    __metadata("design:paramtypes", [])
], RatingControlComponent);
exports.RatingControlComponent = RatingControlComponent;
//# sourceMappingURL=rating-control.component.js.map