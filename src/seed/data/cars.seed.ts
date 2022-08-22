import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Ford',
    model: 'Corola',
  },
  {
    id: uuid(),
    brand: 'Audi',
    model: 'Focus',
  },
  {
    id: uuid(),
    brand: 'Honda',
    model: 'Mustang',
  },
  {
    id: uuid(),
    brand: 'TWA',
    model: 'Mustang',
  },
];
