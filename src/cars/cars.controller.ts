import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  @Get()
  findAll(): string {
    return 'This action returns all cars';
  }

  @Get()
  findOne(): string{
    return 'This action returns one car.'
  }


  @Post()
  create(): string{
    return "This action creates a car."
  }

  @Put()
  updateOne(): string{
    return "This action updates a car."
  }

  @Delete()
  deleteOne(): string{
    return "This action deletes a car."
  }

}