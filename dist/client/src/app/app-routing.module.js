"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutingModule = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const home_page_component_1 = require("./site-pages/home-page/home-page.component");
const admin_panel_component_1 = require("./shared/layouts/admin-panel/admin-panel.component");
const main_layout_component_1 = require("./shared/layouts/main-layout/main-layout.component");
const create_product_page_component_1 = require("./admin-panel-pages/create-product-page/create-product-page.component");
const main_panel_page_component_1 = require("./admin-panel-pages/main-panel-page/main-panel-page.component");
const catalog_panel_page_component_1 = require("./admin-panel-pages/catalog-panel-page/catalog-panel-page.component");
const analytics_panel_page_component_1 = require("./admin-panel-pages/analytics-panel-page/analytics-panel-page.component");
const settings_panel_page_component_1 = require("./admin-panel-pages/settings-panel-page/settings-panel-page.component");
const login_page_component_1 = require("./admin-panel-pages/login-page/login-page.component");
const register_page_component_1 = require("./admin-panel-pages/register-page/register-page.component");
const auth_guard_1 = require("./shared/classes/auth.guard");
const product_page_component_1 = require("./site-pages/product-page/product-page.component");
const reviews_page_component_1 = require("./site-pages/reviews-page/reviews-page.component");
const order_page_component_1 = require("./site-pages/order-page/order-page.component");
const catalog_page_component_1 = require("./site-pages/catalog-page/catalog-page.component");
const routes = [
    {
        path: '', component: main_layout_component_1.MainLayoutComponent, children: [
            { path: '', component: home_page_component_1.HomePageComponent, data: { title: 'Главная' } },
            { path: 'product/:id', component: product_page_component_1.ProductPageComponent, data: { title: 'Карточка товара' } },
            { path: 'reviews', component: reviews_page_component_1.ReviewsPageComponent, data: { title: 'Отзывы' } },
            { path: 'order', component: order_page_component_1.OrderPageComponent, data: { title: 'Корзина заказов' } },
            { path: 'catalog', component: catalog_page_component_1.CatalogPageComponent, data: { title: 'Каталог' } },
        ]
    },
    {
        path: 'admin-panel', component: admin_panel_component_1.AdminPanelComponent, children: [
            { path: '', canActivate: [auth_guard_1.AuthGuard], component: main_panel_page_component_1.MainPanelPageComponent, data: { title: 'Админ панель' } },
            { path: 'create-product', pathMatch: 'full', canActivate: [auth_guard_1.AuthGuard], component: create_product_page_component_1.CreateProductPageComponent, data: { title: 'Создание товара' } },
            { path: 'catalog', canActivate: [auth_guard_1.AuthGuard], component: catalog_panel_page_component_1.CatalogPanelPageComponent, data: { title: 'Каталог' } },
            { path: 'analytics', canActivate: [auth_guard_1.AuthGuard], component: analytics_panel_page_component_1.AnalyticsPanelPageComponent, data: { title: 'Аналитика' } },
            { path: 'settings', canActivate: [auth_guard_1.AuthGuard], component: settings_panel_page_component_1.SettingsPanelPageComponent, data: { title: 'Настройки' } },
            { path: 'login', component: login_page_component_1.LoginPageComponent, data: { title: 'Вход в систему' } },
            { path: 'sign-up', component: register_page_component_1.RegisterPageComponent, data: { title: 'Регистрация' } },
        ]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule],
        providers: [
            auth_guard_1.AuthGuard
        ]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map