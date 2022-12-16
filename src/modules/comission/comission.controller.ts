import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
} from "@nestjs/common";
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiCreatedResponse,
  ApiParam,
  ApiBody,
  ApiQuery,
} from "@nestjs/swagger";

import { ComissionService } from "./comission.service";
import { GlobalParamsDto } from "./dto/get-global-params.dto";
import { InsrtGoodDto } from "./dto/insrt-goods.dto";
import { GoodsPaidFromEventDto } from "./dto/get-goods-paid-from-event.dto";
import { PaidGoodsInDatesDto } from "./dto/get-paid-goods-In-dates.dto";
import { UpdtComissionDto } from "./dto/updt-comission.dto";
import { ComissionTotalDto } from "./dto/calc-comission-total.dto";
import { GoodsComissionDto } from "./dto/goods-comission.dto";
import { CalcCommissionDto } from "./dto/calc-comission.dto";
import { TotalSoldsDto } from "./dto/get-total-solds.dto";
import { ComissionRangeDto } from "./dto/calc-comission-range.dto";
import { PctSpecialDto } from "./dto/get-pct.dto";
import { ComissionSpecialRangeDto } from "./dto/comission-special-range.dto";
import { CentralCoordinateDto } from "./dto/central-coordinate.dto";

@Controller("comission")
export class ComissionController {
  constructor(private readonly service: ComissionService) {}

  async centralCoordinate(data: CentralCoordinateDto) {
    return await this.service.centralCoordinate(data);
  }

  async calculateCommissionSpecialRange(data: ComissionSpecialRangeDto) {
    return await this.service.calculateCommissionSpecialRange(data);
  }

  @ApiOperation({ summary: "OBT_PCTESP" })
  @ApiBody({
    type: PctSpecialDto,
  })
  @ApiResponse({
    status: 200,
    description: "Fecha final",
    type: Number,
  })
  @Post("comission-special")
  async getPctComissionToSpecial(@Body() data: PctSpecialDto) {
    return await this.service.getPctComissionToSpecial(data);
  }

  async calculateCommissionRange(data: ComissionRangeDto) {
    return await this.service.calculateCommissionRange(data);
  }

  @ApiOperation({ summary: "OBT_TOT_VTAS" })
  @ApiBody({
    type: TotalSoldsDto,
  })
  @ApiResponse({
    status: 200,
    description: "Fecha final",
    type: String,
  })
  @Post("total-solds")
  async getTotalSolds(@Body() data: TotalSoldsDto) {
    return await this.service.getTotalSolds(data);
  }

  async calculateCommission(data: CalcCommissionDto) {
    return await this.service.calculateCommission(data);
  }

  async applyGoodsComission(data: GoodsComissionDto) {
    return await this.service.applyGoodsComission(data);
  }

  async calculateComissionTotal(data: ComissionTotalDto) {
    return await this.service.calculateComissionTotal(data);
  }

  @ApiOperation({ summary: "ACT_BIENES_COM" })
  @ApiBody({
    type: UpdtComissionDto,
  })
  @ApiResponse({
    status: 200,
  })
  @Put()
  async updateComissionData(@Body() data: UpdtComissionDto) {
    return await this.service.updateComissionData(data);
  }

  @ApiOperation({ summary: "INSERTA" })
  @ApiParam({
    name: "comId",
    type: Number,
  })
  @ApiResponse({
    status: 200,
  })
  @Delete(":comId")
  async deleteComission(@Param("comId") comId: Number) {
    return await this.service.deleteComission(comId);
  }

  async getGoodsInCalculateComission(comId: Number) {
    return await this.service.getGoodsInCalculateComission(comId);
  }

  async getPaidGoodsInDates(data: PaidGoodsInDatesDto) {
    return await this.service.getPaidGoodsInDates(data);
  }

  async copyEvenLot() {
    return await this.service.copyEvenLot();
  }

  async markLotsDateGreater(date: Date) {
    return await this.service.markLotsDateGreater(date);
  }

  async markLotsDateMinor(date: Date) {
    return await this.service.markLotsDateMinor(date);
  }

  @ApiOperation({ summary: "ELIMINA_MENORES" })
  @ApiBody({
    type: Date,
  })
  @ApiResponse({
    status: 200,
    type: InsrtGoodDto,
  })
  @Delete("/payments/date-minor")
  async deleteLotsPaymentsDateMinor(@Body() data: { startDate: Date }) {
    return await this.service.deleteLotsPaymentsDateMinor(
      new Date(data.startDate)
    );
  }

  async getGoodsPaidFromEvent(data: GoodsPaidFromEventDto) {
    return await this.service.getGoodsPaidFromEvent(data);
  }

  @ApiOperation({ summary: "INSERTA" })
  @ApiBody({
    type: InsrtGoodDto,
  })
  @ApiResponse({
    status: 200,
    type: InsrtGoodDto,
  })
  @Post()
  async insertGoods(@Body() data: InsrtGoodDto) {
    return await this.service.insertGoods(data);
  }

  async getGlobalParams(data: GlobalParamsDto) {
    return await this.service.getGlobalParams(data);
  }
}
