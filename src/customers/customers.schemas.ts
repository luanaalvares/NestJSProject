import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type CustomerDocument = HydratedDocument<Customer>

@Schema({timestamps: true})
export class Customer {
    @Prop({ required: true })
    name: string

    @Prop({ required: true })
    age: number
}

export const CustomerSchema = SchemaFactory.createForClass(Customer)