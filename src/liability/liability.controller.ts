import { Controller, Get, Post, Body, Param, Patch, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { LiabilityService } from './liability.service';
import { CreateLiabilityDto } from './dto/create-liability.dto';
import { UpdateLiabilityDto } from './dto/update-liability.dto';
import { QueryLiabilityDto } from './dto/query-liability.dto';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Liability')
@Controller('liability')
export class LiabilityController {
  constructor(private readonly liabilityService: LiabilityService) {}

  @Get('ping')
  @ApiOperation({ summary: 'Health check for liability service' })
  ping() {
    return this.liabilityService.ping();
  }

  @Post()
  @ApiOperation({ summary: 'Create a new liability' })
  create(@Body() dto: CreateLiabilityDto) {
    return this.liabilityService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'List all liabilities' })
  findAll(@Query() query: QueryLiabilityDto) {
    return this.liabilityService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a liability by ID' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.liabilityService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a liability' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateLiabilityDto) {
    return this.liabilityService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a liability' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.liabilityService.remove(id);
  }

  @Post(':id/payments')
  @ApiOperation({ summary: 'Record a payment for a liability' })
  createPayment(@Param('id', ParseIntPipe) id: number, @Body() dto: CreatePaymentDto) {
    return this.liabilityService.createPayment({ ...dto, liabilityId: id });
  }

  @Get(':id/payments')
  @ApiOperation({ summary: 'List payments for a liability' })
  findPaymentsByLiability(@Param('id', ParseIntPipe) id: number) {
    return this.liabilityService.findPaymentsByLiability(id);
  }
}

@ApiTags('Payment')
@Controller('payments')
export class PaymentController {
  constructor(private readonly liabilityService: LiabilityService) {}

  @Get()
  @ApiOperation({ summary: 'List all payments' })
  findAll() {
    return this.liabilityService.listPayments();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a payment by ID' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.liabilityService.findPayment(id);
  }
}
