import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookingService } from './booking.service';
import { Booking } from './schemas/booking.schema';
import { CreateBookDto } from './dto/create-booking.dto';
import { UpdateBookDto } from './dto/update-booking.dto';

@Controller('appointments')
export class BookingController {
  constructor(private bookingService: BookingService) {}

  @Get()
  async getAllBookings(): Promise<Booking[]> {
    return this.bookingService.findAll()
  }

  @Get(':id')
  async getBooking(@Param('id') id: string): Promise<Booking> {
    return this.bookingService.findById(id);
  }

  @Post()
  async createBooking(
    @Body() 
    booking: CreateBookDto ): Promise<Booking> {
    return this.bookingService.create(booking)
  }

  @Put(':id')
  async updateBooking(
    @Param('id') 
    id: string,
    booking: UpdateBookDto ): Promise<Booking> {
    return this.bookingService.updateById(id,booking)
  }


  @Delete(':id') 
  async deleteBooking(
    @Param('id')
    id: string
  ){
    return this.bookingService.deleteById(id);
  }

}
