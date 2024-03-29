import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get()
  findAll(): string {
    return 'This action returns all customers';
  }

  @Get()
  findOne(): string{
    return 'This action returns one customer.'
  }


  @Post()
  create(): string{
    return "This action creates a customer."
  }

  @Put()
  updateOne(): string{
    return "This action updates a customer."
  }

  @Delete()
  deleteOne(): string{
    return "This action deletes a customer."
  }

}