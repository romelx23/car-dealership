import { IsString, MinLength } from 'class-validator';

export class CreateCarDto {
  @IsString({ message: 'La marca debería ser un string' })
  readonly brand: string;
  @IsString({ message: 'El modelo debería ser un string' })
  @MinLength(3, { message: 'El modelo debería tener al menos 3 caracteres' })
  readonly model: string;
}
