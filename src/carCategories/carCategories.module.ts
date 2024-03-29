import { Module } from "@nestjs/common";
import { CarCategoriesController } from "./carCategories.controller";

@Module({
    controllers: [CarCategoriesController]
})
export class CarCategoriesModule { }