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
exports.RoutingService = void 0;
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const router_1 = require("@angular/router");
const operators_1 = require("rxjs/operators");
let RoutingService = class RoutingService {
    constructor(router, activatedRoute, titleService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
    }
    setTitle() {
        this.router.events.pipe(operators_1.filter(event => event instanceof router_1.NavigationEnd)).subscribe(() => {
            const rt = this.getChild(this.activatedRoute);
            rt.data.subscribe((data) => {
                this.titleService.setTitle(data.title);
                this.titlePage = data.title;
            });
        });
    }
    getChild(activatedRoute) {
        if (activatedRoute.firstChild) {
            return this.getChild(activatedRoute.firstChild);
        }
        else {
            return activatedRoute;
        }
    }
    getTitle() {
        return this.titlePage;
    }
};
RoutingService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, platform_browser_1.Title])
], RoutingService);
exports.RoutingService = RoutingService;
//# sourceMappingURL=routing.service.js.map