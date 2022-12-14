import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiCreatedResponse,
  ApiParam,
  ApiBody,
  ApiQuery,
} from '@nestjs/swagger';

import { ComerPenaltyService } from './comer-penalty.service';
import { FinalDateDto } from './dto/get-final-date.dto';
import { RegisterPenaltyDto } from './dto/register-penalty.dto';
import { ReleasePenaltyDto } from './dto/release-penalty.dto';
import { ReversePenaltyDto } from './dto/reverse-penalty.dto';
import { UpdatePenaltyDto } from './dto/update-penaly.dto';

@ApiCreatedResponse()
@Controller('comer-penalty')
@ApiTags('comer-penalty')
export class ComerPenaltyController {
  constructor(private readonly service: ComerPenaltyService) {}

  @ApiOperation({ summary: 'PA_REGISTRA_PENALIZACION' })
  @ApiBody({
    type: RegisterPenaltyDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Fecha final',
    type: String,
  })
  @Post('create')
  async registerPenalty(@Body() data: RegisterPenaltyDto) {
    return await this.service.registerPenalty(data);
  }

  @ApiOperation({ summary: 'PA_ACTUALIZA_PENALIZACION' })
  @ApiBody({
    type: UpdatePenaltyDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Información de penalización actualizada',
    type: String,
  })
  @Put()
  async updatePenalty(@Body() data: UpdatePenaltyDto) {
    return await this.service.updatePenalty(data);
  }

  @ApiOperation({ summary: 'PA_LIBERA_PENALIZACION' })
  @ApiBody({
    type: ReleasePenaltyDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Liberar penalización',
    type: String,
  })
  @Post('release')
  async releasePenalty(@Body() data: ReleasePenaltyDto) {
    return await this.service.releasePenalty(data);
  }

  @ApiOperation({ summary: 'FN_FECHA_FINAL' })
  @ApiBody({
    type: FinalDateDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Fecha final',
    type: String,
  })
  @Post('final-date')
  async getFinalDate(@Body() data: FinalDateDto) {
    return await this.service.getFinalDate(data);
  }

  @ApiOperation({ summary: 'PA_REVERSA_PENALIZACION' })
  @ApiBody({
    type: ReversePenaltyDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Fecha final',
    type: String,
  })
  @Post('reverse')
  async penaltyReverse(@Body() data: ReversePenaltyDto) {
    return await this.service.penaltyReverse(data);
  }
}
