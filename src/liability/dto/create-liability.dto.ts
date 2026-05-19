import { IsEnum, IsNumber, IsDateString, IsPositive, Min, IsString, IsNotEmpty } from 'class-validator';
import { LiabilityType } from '../enums/liability-type.enum';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLiabilityDto {
  @ApiProperty({ example: 'mangorangca', description: "The student's username" })
  @IsString()
  @IsNotEmpty()
  studentUsername: string;

  @ApiProperty({ enum: LiabilityType, example: LiabilityType.FINE })
  @IsEnum(LiabilityType)
  type: LiabilityType;

  @ApiProperty({ example: 150.75 })
  @IsNumber()
  @IsPositive()
  @Min(0.01)
  @Type(() => Number)
  amount: number;

  @ApiProperty({ example: '2025-12-31' })
  @IsDateString()
  dueDate: string;
}
