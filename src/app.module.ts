import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/car.module';
import { CarCategoriesModule } from './carCategories/carCategories.module';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [CarsModule, CarCategoriesModule, CustomersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
