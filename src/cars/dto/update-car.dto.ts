import { IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

export class UpdateCarDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString({ message: 'La marca debería ser un string' })
  @IsOptional()
  readonly brand?: string;

  @IsString({ message: 'El modelo debería ser un string' })
  @MinLength(3, { message: 'El modelo debería tener al menos 3 caracteres' })
  @IsOptional()
  readonly model?: string;
}
