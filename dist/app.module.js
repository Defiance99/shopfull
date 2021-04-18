"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const body_json_middleware_1 = require("./middleware/body-json.middleware");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const review_entity_1 = require("./review/entity/review.entity");
const review_module_1 = require("./review/review.module");
const product_module_1 = require("./product/product.module");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const product_entity_1 = require("./product/entity/product.entity");
const users_entity_1 = require("./users/entity/users.entity");
const user_device_entity_1 = require("./users/entity/user-device.entity");
const order_entity_1 = require("./order/entity/order.entity");
const order_details_entity_1 = require("./order/entity/order-details.entity");
const order_module_1 = require("./order/order.module");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(body_json_middleware_1.JsonBodyMiddleware)
            .forRoutes('*');
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forRoot({
                "type": "mysql",
                "host": "z29769w4.beget.tech",
                "port": 3306,
                "username": "z29769w4_shop",
                "password": "LXcc12az",
                "database": "z29769w4_shop",
                "synchronize": true,
                "entities": [review_entity_1.Review, product_entity_1.Product, users_entity_1.User, user_device_entity_1.Device, order_entity_1.Order, order_details_entity_1.OrderDetails]
            }),
            config_1.ConfigModule.forRoot({
                isGlobal: true
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path_1.join(__dirname, '..', 'client/dist/front-end'),
            }),
            review_module_1.ReviewModule,
            product_module_1.ProductModule,
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            order_module_1.OrderModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map