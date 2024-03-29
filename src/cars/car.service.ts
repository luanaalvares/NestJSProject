import { All, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car } from './car.schemas';
import { CarDto } from './car.dto';

@Injectable()
export class CarsService {

  constructor(@InjectModel(Car.name) private userModel: Model<Car>) { }

  async create(carDto: CarDto) {
    this.userModel.create(carDto)
  }

  findOne(carId: string) {
    const foundCar = this.userModel.findOne({ _id: carId })
    return foundCar
  }

  deleteOne(carId: string){
    const deletedCar = this.userModel.deleteOne({_id: carId })
    return deletedCar
  }

  findAll() {
    const findedCars = this.userModel.find()
    return findedCars
  }
}