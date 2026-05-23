import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsPositive, IsString, IsNotEmpty, Min } from 'class-validator';
import { PaymentMethod } from '../enums/payment-method.enum';

export class CreatePaymentDto {
  @ApiProperty({ description: 'Liability ID being paid', example: 1 })
  @IsNumber()
  @IsPositive()
  liabilityId: number;

  @ApiProperty({ description: 'Amount paid', example: 500 })
  @IsNumber()
  @IsPositive()
  @Min(0.01)
  amountPaid: number;

  @ApiProperty({ description: 'Transaction reference (GCash, bank ref, etc.)', example: 'GCASH-123456' })
  @IsString()
  @IsNotEmpty()
  transactionRef: string;

  @ApiProperty({ enum: PaymentMethod, description: 'Payment method' })
  @IsEnum(PaymentMethod)
  paymentMethod: PaymentMethod;
}
