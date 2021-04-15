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
exports.ReviewService = void 0;
const http_1 = require("@angular/common/http");
const core_1 = require("@angular/core");
let ReviewService = class ReviewService {
    constructor(http) {
        this.http = http;
    }
    create(review) {
        return this.http.post('/api/review/create', review);
    }
    getAll() {
        return this.http.get('/api/review/getAll');
    }
    getByLimit(limit) {
        return this.http.get(`/api/review/getByLimit?limit=${limit}`);
    }
};
ReviewService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [http_1.HttpClient])
], ReviewService);
exports.ReviewService = ReviewService;
//# sourceMappingURL=review.service.js.map