"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const platform_browser_1 = require("@angular/platform-browser");
const animations_1 = require("@angular/platform-browser/animations");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const forms_2 = require("@angular/forms");
const animations_2 = require("@angular/platform-browser/animations");
const ngx_cookie_service_1 = require("ngx-cookie-service");
const material_module_1 = require("./material.module");
const app_routing_module_1 = require("./app-routing.module");
const app_component_1 = require("./app.component");
const home_page_component_1 = require("./site-pages/home-page/home-page.component");
const main_layout_component_1 = require("./shared/layouts/main-layout/main-layout.component");
const admin_panel_component_1 = require("./shared/layouts/admin-panel/admin-panel.component");
const front_admin_page_component_1 = require("./admin-panel-pages/front-admin-page/front-admin-page.component");
const create_product_page_component_1 = require("./admin-panel-pages/create-product-page/create-product-page.component");
const main_panel_page_component_1 = require("./admin-panel-pages/main-panel-page/main-panel-page.component");
const catalog_panel_page_component_1 = require("./admin-panel-pages/catalog-panel-page/catalog-panel-page.component");
const analytics_panel_page_component_1 = require("./admin-panel-pages/analytics-panel-page/analytics-panel-page.component");
const settings_panel_page_component_1 = require("./admin-panel-pages/settings-panel-page/settings-panel-page.component");
const http_1 = require("@angular/common/http");
const angular_1 = require("swiper/angular");
const login_page_component_1 = require("./admin-panel-pages/login-page/login-page.component");
const register_page_component_1 = require("./admin-panel-pages/register-page/register-page.component");
const token_interseptor_1 = require("./shared/classes/token.interseptor");
const loader_component_1 = require("./shared/components/loader/loader.component");
const product_cart_component_1 = require("./shared/components/product-cart/product-cart.component");
const product_page_component_1 = require("./site-pages/product-page/product-page.component");
const reviews_page_component_1 = require("./site-pages/reviews-page/reviews-page.component");
const review_rating_directive_1 = require("./shared/directives/review-rating.directive");
const review_component_1 = require("./site-pages/home-page/review/review.component");
const rating_control_component_1 = require("./shared/components/review/rating-control/rating-control.component");
const flow_rating_component_1 = require("./shared/components/review/flow-rating/flow-rating.component");
const order_page_component_1 = require("./site-pages/order-page/order-page.component");
const catalog_page_component_1 = require("./site-pages/catalog-page/catalog-page.component");
const states_pipe_1 = require("./shared/pipes/shop-filters/states.pipe");
const category_pipe_1 = require("./shared/pipes/shop-filters/category.pipe");
const chart_days_pipe_1 = require("./shared/pipes/shop-filters/chart-days.pipe");
const search_pipe_1 = require("./shared/pipes/shop-filters/search.pipe");
const valuta_pipe_1 = require("./shared/pipes/shop-filters/valuta.pipe");
const range_price_pipe_1 = require("./shared/pipes/shop-filters/range-price.pipe");
const category_day_pipe_1 = require("./shared/pipes/shop-filters/category-day.pipe");
const day_now_pipe_1 = require("./shared/pipes/day-now.pipe");
const dialog_box_accept_component_1 = require("./site-pages/order-page/dialog-box-accept/dialog-box-accept.component");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            home_page_component_1.HomePageComponent,
            main_layout_component_1.MainLayoutComponent,
            admin_panel_component_1.AdminPanelComponent,
            front_admin_page_component_1.FrontAdminPageComponent,
            create_product_page_component_1.CreateProductPageComponent,
            main_panel_page_component_1.MainPanelPageComponent,
            catalog_panel_page_component_1.CatalogPanelPageComponent,
            analytics_panel_page_component_1.AnalyticsPanelPageComponent,
            settings_panel_page_component_1.SettingsPanelPageComponent,
            login_page_component_1.LoginPageComponent,
            register_page_component_1.RegisterPageComponent,
            loader_component_1.LoaderComponent,
            product_cart_component_1.ProductCartComponent,
            product_page_component_1.ProductPageComponent,
            reviews_page_component_1.ReviewsPageComponent,
            review_rating_directive_1.ReviewRatingDirective,
            review_component_1.ReviewComponent,
            rating_control_component_1.RatingControlComponent,
            flow_rating_component_1.FlowRatingComponent,
            order_page_component_1.OrderPageComponent,
            catalog_page_component_1.CatalogPageComponent,
            states_pipe_1.StatesPipe,
            category_pipe_1.CategoryPipe,
            chart_days_pipe_1.ChartDaysPipe,
            search_pipe_1.SearchPipe,
            valuta_pipe_1.ValutaPipe,
            range_price_pipe_1.RangePricePipe,
            category_day_pipe_1.CategoryDayPipe,
            day_now_pipe_1.DayNowPipe,
            dialog_box_accept_component_1.DialogBoxAcceptComponent,
        ],
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            animations_2.NoopAnimationsModule,
            animations_1.BrowserAnimationsModule,
            material_module_1.MaterialModel,
            forms_1.FormsModule,
            forms_2.ReactiveFormsModule,
            http_1.HttpClientModule,
            angular_1.SwiperModule,
        ],
        providers: [
            {
                provide: http_1.HTTP_INTERCEPTORS,
                multi: true,
                useClass: token_interseptor_1.TokenInterseptor
            },
            ngx_cookie_service_1.CookieService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map