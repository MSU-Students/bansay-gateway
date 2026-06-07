import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { AppealStatus } from '../enums/appeal-status.enum';

export class AppealResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  liabilityId: number;

  @ApiProperty()
  studentId: number;

  @ApiProperty()
  reason: string;

  @ApiPropertyOptional()
  evidenceUrl?: string;

  @ApiProperty({ enum: AppealStatus })
  status: AppealStatus;

  @ApiPropertyOptional()
  reviewerRemarks?: string;

  @ApiPropertyOptional()
  reviewedBy?: number;

  @ApiProperty()
  createdAt: string;

  @ApiProperty()
  updatedAt: string;
}
