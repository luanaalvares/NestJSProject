import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type CarCategoryDocument = HydratedDocument<CarCategory>

@Schema({timestamps: true})
export class CarCategory {
    @Prop({ required: true })
    name: string

    @Prop({ required: true })
    carIds: number[]

    @Prop({ required: true })
    price: number
}

export const CarCategorySchema = SchemaFactory.createForClass(CarCategory)