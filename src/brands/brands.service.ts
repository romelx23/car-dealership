import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    // {
    //   id: uuid(),
    //   name: 'Ford',
    //   createAt: new Date().getTime(),
    // },
    // {
    //   id: uuid(),
    //   name: 'Audi',
    //   createAt: new Date().getTime(),
    // },
    // {
    //   id: uuid(),
    //   name: 'Honda',
    //   createAt: new Date().getTime(),
    // },
  ];

  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = {
      id: uuid(),
      name: createBrandDto.name.toLowerCase(),
      createAt: new Date().getTime(),
    };
    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands;
    // return `This action returns all brands`;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) throw new NotFoundException(`Brand with id ${id} not found`);
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne(id);
    this.brands = this.brands.map((brand) => {
      if (brand.id === id) {
        brandDB.updateAt = new Date().getTime();
        brandDB = { ...brandDB, ...updateBrandDto };
        return brandDB;
      }
      return brand;
    });

    return brandDB;
  }

  remove(id: string) {
    const brand = this.findOne(id);
    if (!brand) throw new NotFoundException(`Brand with id ${id} not found`);
    this.brands = this.brands.filter((brand) => brand.id !== id);
    return brand;
  }
  fillBrandsWithSeedData(brands: Brand[]) {
    this.brands = brands;
  }
}
