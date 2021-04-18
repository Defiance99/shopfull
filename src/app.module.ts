import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { JsonBodyMiddleware } from './middleware/body-json.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Review } from './review/entity/review.entity';
import { ReviewModule } from './review/review.module';
import { ProductModule } from './product/product.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { Product } from './product/entity/product.entity';
import { User } from './users/entity/users.entity';
import { Device } from './users/entity/user-device.entity';
import { Order } from './order/entity/order.entity';
import { OrderDetails } from './order/entity/order-details.entity';
import { OrderModule } from './order/order.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "z29769w4.beget.tech", //localhost //z29769w4.beget.tech
      "port": 3306,
      "username": "z29769w4_shop", //root //z29769w4_shop
      "password": "LXcc12az", //root //LXcc12az
      "database": "z29769w4_shop", //shopapi //z29769w4_shop
      "synchronize": true,
      "entities": [Review, Product, User, Device, Order, OrderDetails]
  }),
  ConfigModule.forRoot({
    isGlobal: true
  }),
  ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'client/dist/front-end'), //join(__dirname, '..', '..', 'client/dist/front-end/')
  }),
  ReviewModule,
  ProductModule,
  UsersModule,
  AuthModule,
  OrderModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
        .apply(JsonBodyMiddleware)
        .forRoutes('*');
  }
}

