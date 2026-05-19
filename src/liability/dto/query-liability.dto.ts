import { IsOptional, IsEnum, IsString } from 'class-validator';
import { LiabilityStatus } from '../enums/liability-status.enum';
import { LiabilityType } from '../enums/liability-type.enum';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class QueryLiabilityDto {
  @ApiPropertyOptional({ enum: LiabilityType })
  @IsOptional()
  @IsEnum(LiabilityType)
  type?: LiabilityType;

  @ApiPropertyOptional({ enum: LiabilityStatus })
  @IsOptional()
  @IsEnum(LiabilityStatus)
  status?: LiabilityStatus;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  studentUsername?: string;
}
