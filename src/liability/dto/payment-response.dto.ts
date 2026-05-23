import { ApiProperty } from '@nestjs/swagger';
import { PaymentMethod } from '../enums/payment-method.enum';

export class PaymentResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  liabilityId: number;

  @ApiProperty()
  amountPaid: number;

  @ApiProperty()
  transactionRef: string;

  @ApiProperty({ enum: PaymentMethod })
  paymentMethod: PaymentMethod;

  @ApiProperty()
  createdAt: string;

  @ApiProperty()
  updatedAt: string;
}
