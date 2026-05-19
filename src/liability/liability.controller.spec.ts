import { Test, TestingModule } from '@nestjs/testing';
import { LiabilityController } from './liability.controller';
import { LiabilityService } from './liability.service';
import { CreateLiabilityDto } from './dto/create-liability.dto';
import { LiabilityType } from './enums/liability-type.enum';
import { of } from 'rxjs';

describe('LiabilityController', () => {
  let controller: LiabilityController;
  let service: LiabilityService;

  const mockClient = { send: jest.fn() };
  const mockLiabilityService = {
    ping: jest.fn(() => of('[Liability] I am alive.')),
    create: jest.fn(() => of({ id: 1 })),
    findAll: jest.fn(() => of([])),
    findOne: jest.fn(() => of({ id: 1 })),
    update: jest.fn(() => of({ id: 1 })),
    remove: jest.fn(() => of({ id: 1 })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LiabilityController],
      providers: [
        { provide: LiabilityService, useValue: mockLiabilityService },
      ],
    }).compile();

    controller = module.get<LiabilityController>(LiabilityController);
    service = module.get<LiabilityService>(LiabilityService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('ping', () => {
    it('should return ping response', (done) => {
      controller.ping().subscribe((res) => {
        expect(res).toBe('[Liability] I am alive.');
        done();
      });
    });
  });

  describe('create', () => {
    it('should create a liability', (done) => {
      const dto: CreateLiabilityDto = {
        studentUsername: 'juan',
        type: LiabilityType.FINE,
        amount: 100,
        dueDate: '2025-12-31',
      };

      controller.create(dto).subscribe((res) => {
        expect(service.create).toHaveBeenCalledWith(dto);
        expect(res).toEqual({ id: 1 });
        done();
      });
    });
  });

  describe('findAll', () => {
    it('should return liabilities with query filters', (done) => {
      const query = { type: LiabilityType.FINE };

      controller.findAll(query).subscribe((res) => {
        expect(service.findAll).toHaveBeenCalledWith(query);
        done();
      });
    });
  });

  describe('findOne', () => {
    it('should return a single liability by id', (done) => {
      controller.findOne(1).subscribe((res) => {
        expect(service.findOne).toHaveBeenCalledWith(1);
        done();
      });
    });
  });

  describe('update', () => {
    it('should update a liability', (done) => {
      controller.update(1, { amount: 200 }).subscribe((res) => {
        expect(service.update).toHaveBeenCalledWith(1, { amount: 200 });
        done();
      });
    });
  });

  describe('remove', () => {
    it('should delete a liability', (done) => {
      controller.remove(1).subscribe((res) => {
        expect(service.remove).toHaveBeenCalledWith(1);
        done();
      });
    });
  });
});
