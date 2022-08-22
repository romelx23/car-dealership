import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
// @UsePipes(ValidationPipe)
export class CarsController {
  // Inyectar el servicio
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return {
      total: this.carsService.findAll().length,
      data: this.carsService.findAll(),
    };
  }

  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    // if (+id > this.carsService.findAll().length) {
    //   return 'Car not found';
    // }
    // throw new Error('Internal server error');
    console.log({ id });
    return this.carsService.findOne(id);
    // return {
    //   id,
    //   name: this.carsService.findAll()[id],
    // };
  }
  @Post()
  // @UsePipes(ValidationPipe)
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
    // return {
    //   data: createCarDto,
    //   message: 'Car created',
    //   ok: true,
    // };
  }
  @Patch(':id')
  updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarDto,
  ) {
    return this.carsService.update(id, updateCarDto);
  }
  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.delete(id);
  }
}
