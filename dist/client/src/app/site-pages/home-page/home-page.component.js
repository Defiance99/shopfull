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
exports.HomePageComponent = void 0;
const core_1 = require("@angular/core");
const product_service_1 = require("src/app/shared/services/product.service");
let HomePageComponent = class HomePageComponent {
    constructor(productService) {
        this.productService = productService;
        this.weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        this.today = 0;
    }
    ngOnInit() {
        let day = new Date();
        this.today = day.getDay();
        this.products$ = this.productService.getByFilters('Обед', this.weekDays[this.today]);
        this.menuProducts$ = this.productService.getByFilters('Десерт', this.weekDays[this.today]);
        this.ecoProducts$ = this.productService.getProducts();
    }
    ngOnDestroy() {
    }
    ngAfterViewInit() {
        let scheduleDays = this.scheduleRef.nativeElement.querySelectorAll('.schedule-days__item');
        let menuItems = this.menuItemsRef.nativeElement.querySelectorAll('.schedule-days__item');
        this.initMenuItems(scheduleDays, 'Обед');
        this.initMenuItems(menuItems, '', true);
    }
    initMenuItems(menu, category = '', isActiveFirstItem = false) {
        isActiveFirstItem ? menu[0].classList.add('schedule-days__item_active') :
            this.today != 0 ? menu[this.today - 1].classList.add('schedule-days__item_active') :
                menu[6].classList.add('schedule-days__item_active');
        for (let menuItem of menu) {
            menuItem.addEventListener('click', () => {
                if (menuItem.classList.contains('schedule-days__item_active'))
                    return;
                for (let i = 0; i < menu.length; i++) {
                    menu[i].classList.remove('schedule-days__item_active');
                }
                if (category) {
                    let day = menuItem.getAttribute('value');
                    this.products$ = this.productService.getByFilters(category, day);
                }
                else {
                    let category = menuItem.getAttribute('value');
                    this.menuProducts$ = this.productService.getByFilters(category, this.weekDays[this.today]);
                }
                menuItem.classList.add('schedule-days__item_active');
            });
        }
    }
    openMessageModal(message) {
        showModalMessage(message);
    }
};
__decorate([
    core_1.ViewChild('scheduleDaysWrapper'),
    __metadata("design:type", core_1.ElementRef)
], HomePageComponent.prototype, "scheduleRef", void 0);
__decorate([
    core_1.ViewChild('menuItemsWrapper'),
    __metadata("design:type", core_1.ElementRef)
], HomePageComponent.prototype, "menuItemsRef", void 0);
HomePageComponent = __decorate([
    core_1.Component({
        selector: 'app-home-page',
        templateUrl: './home-page.component.html',
        styleUrls: ['./home-page.component.scss']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof product_service_1.ProductService !== "undefined" && product_service_1.ProductService) === "function" ? _a : Object])
], HomePageComponent);
exports.HomePageComponent = HomePageComponent;
//# sourceMappingURL=home-page.component.js.map