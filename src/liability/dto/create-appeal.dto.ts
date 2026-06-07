import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsNumber, IsPositive } from 'class-validator';

export class CreateAppealDto {
  @ApiProperty({ description: 'Liability ID to appeal', example: 1 })
  @IsNumber()
  @IsPositive()
  liabilityId: number;

  @ApiProperty({ description: 'Student ID submitting the appeal', example: 1 })
  @IsNumber()
  @IsPositive()
  studentId: number;

  @ApiProperty({ description: 'Reason for the appeal', example: 'I was absent due to medical reasons' })
  @IsString()
  @IsNotEmpty()
  reason: string;

  @ApiPropertyOptional({ description: 'URL to supporting evidence', example: 'https://storage.example.com/evidence.pdf' })
  @IsOptional()
  @IsString()
  evidenceUrl?: string;
}
