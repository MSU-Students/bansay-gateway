import { ApiProperty } from '@nestjs/swagger';
import { LiabilityStatus } from '../enums/liability-status.enum';
import { LiabilityType } from '../enums/liability-type.enum';

export class LiabilityResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  studentUsername: string;

  @ApiProperty()
  studentName: string;

  @ApiProperty({ enum: LiabilityType })
  type: LiabilityType;

  @ApiProperty()
  amount: number;

  @ApiProperty({ enum: LiabilityStatus })
  status: LiabilityStatus;

  @ApiProperty()
  dueDate: string;

  @ApiProperty()
  createdAt: string;

  @ApiProperty()
  updatedAt: string;
}
