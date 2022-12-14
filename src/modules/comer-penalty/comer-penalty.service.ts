import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { FinalDateDto } from './dto/get-final-date.dto';
import { RegisterPenaltyDto } from './dto/register-penalty.dto';
import { ReleasePenaltyDto } from './dto/release-penalty.dto';
import { ReversePenaltyDto } from './dto/reverse-penalty.dto';
import { UpdatePenaltyDto } from './dto/update-penaly.dto';

@Injectable()
export class ComerPenaltyService {
  constructor(@Inject('SERVICE_PENALTY') private readonly proxy: ClientProxy) {}

  async registerPenalty(data: RegisterPenaltyDto) {
    const pattern = { cmd: 'registerPenalty' };
    return await this.proxy.send(pattern, data);
  }

  async updatePenalty(data: UpdatePenaltyDto) {
    const pattern = { cmd: 'updatePenalty' };
    return await this.proxy.send(pattern, data);
  }

  async releasePenalty(data: ReleasePenaltyDto) {
    const pattern = { cmd: 'releasePenalty' };
    return await this.proxy.send(pattern, data);
  }

  async getFinalDate(data: FinalDateDto) {
    const pattern = { cmd: 'getFinalDate' };
    return await this.proxy.send(pattern, data);
  }

  async penaltyReverse(data: ReversePenaltyDto) {
    const pattern = { cmd: 'penaltyReverse' };
    return await this.proxy.send(pattern, data);
  }
}
