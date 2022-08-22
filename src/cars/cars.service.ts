import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';
// todas las clases son provider
// no todos los providers son servicios

@Injectable()
export class CarsService {
  private cars: Car[] = [
    // {
    //   id: uuid(),
    //   brand: 'Ford',
    //   model: 'Fiesta',
    // },
    // {
    //   id: uuid(),
    //   brand: 'Audi',
    //   model: 'Focus',
    // },
    // {
    //   id: uuid(),
    //   brand: 'Honda',
    //   model: 'Mustang',
    // },
    // {
    //   id: uuid(),
    //   brand: 'TWA',
    //   model: 'Mustang',
    // },
  ];
  findAll() {
    return this.cars;
  }
  findOne(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);
    return car;
  }
  create(createCarDto: CreateCarDto) {
    const car = {
      id: uuid(),
      ...createCarDto,
    };
    this.cars.push(car);
    return car;
  }
  update(id: string, updateCarDto: UpdateCarDto) {
    const car = this.findOne(id);
    if (updateCarDto.id && updateCarDto.id !== id)
      throw new NotFoundException(`Car with id ${id} not found`);
    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        return {
          ...car,
          ...updateCarDto,
          id,
        };
      }
      return car;
    });
    return car;
  }
  delete(id: string) {
    const car = this.findOne(id);
    this.cars = [...this.cars.filter((car) => car.id !== id)];
    return this.cars;
  }
  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}

// cohesion es la relacion entre los elementos de un modulo
