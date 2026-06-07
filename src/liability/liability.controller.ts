import { Controller, Get, Post, Body, Param, Patch, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { LiabilityService } from './liability.service';
import { CreateLiabilityDto } from './dto/create-liability.dto';
import { UpdateLiabilityDto } from './dto/update-liability.dto';
import { QueryLiabilityDto } from './dto/query-liability.dto';
import { CreateAppealDto } from './dto/create-appeal.dto';
import { ReviewAppealDto } from './dto/review-appeal.dto';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Public } from '../auth/decorators/is-public.decorator';

@ApiTags('Liability')
@Controller('liability')
export class LiabilityController {
  constructor(private readonly liabilityService: LiabilityService) {}

  @Public()
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

  @Post(':id/appeals')
  @ApiOperation({ summary: 'Submit an appeal for a liability' })
  createAppeal(@Param('id', ParseIntPipe) id: number, @Body() dto: CreateAppealDto) {
    return this.liabilityService.createAppeal({ ...dto, liabilityId: id });
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

@ApiTags('Appeal')
@Controller('appeals')
export class AppealController {
  constructor(private readonly liabilityService: LiabilityService) {}

  @Get()
  @ApiOperation({ summary: 'List all appeals' })
  findAll() {
    return this.liabilityService.listAppeals();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an appeal by ID' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.liabilityService.findAppeal(id);
  }

  @Patch(':id/review')
  @ApiOperation({ summary: 'Review an appeal (approve/reject)' })
  review(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: ReviewAppealDto,
  ) {
    const reviewedBy = 1;
    return this.liabilityService.reviewAppeal(id, reviewedBy, dto);
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