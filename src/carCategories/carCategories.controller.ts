import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('carCategories')
export class CarCategoriesController {
  @Get()
  findAll(): string {
    return 'This action returns all categories cars';
  }

  @Get()
  findOne(): string{
    return 'This action returns one category car.'
  }


  @Post()
  create(): string{
    return "This action creates a category car."
  }

  @Put()
  updateOne(): string{
    return "This action updates a category car."
  }

  @Delete()
  deleteOne(): string{
    return "This action deletes a category car."
  }

}