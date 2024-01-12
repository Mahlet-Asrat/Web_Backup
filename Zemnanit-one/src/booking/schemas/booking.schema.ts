import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({
  timestamps: true
})
export class Booking {

  @Prop()
  fullName: string;

  @Prop()
  email: string;

  @Prop()
  hairStyle: string;

  @Prop()
  date: string;

  @Prop()
  time: string;

  @Prop()
  comment: string;
  
}
export const BookingSchema = SchemaFactory.createForClass(Booking)