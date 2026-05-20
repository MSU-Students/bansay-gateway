import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString, IsNotEmpty } from 'class-validator';
import { AppealStatus } from '../enums/appeal-status.enum';

export class ReviewAppealDto {
  @ApiProperty({ enum: [AppealStatus.APPROVED, AppealStatus.REJECTED], description: 'Review decision' })
  @IsEnum(AppealStatus)
  status: AppealStatus.APPROVED | AppealStatus.REJECTED;

  @ApiProperty({ description: 'Officer remarks on the decision', example: 'Medical certificate verified - appeal approved' })
  @IsString()
  @IsNotEmpty()
  reviewerRemarks: string;
}
