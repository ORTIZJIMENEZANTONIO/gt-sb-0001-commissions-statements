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

  @ApiOperation({ summary: "CENTRAL" })
  @ApiBody({
    type: CentralCoordinateDto,
  })
  @ApiResponse({
    status: 200,
    description: "Proceso terminado",
    type: Number,
  })
  @Post("central-coordinate")
  async centralCoordinate(@Body() data: CentralCoordinateDto) {
    return await this.service.centralCoordinate(data);
  }

  @ApiOperation({ summary: "COMI_RANGOESP" })
  @ApiBody({
    type: ComissionSpecialRangeDto,
  })
  @ApiResponse({
    status: 200,
    description: "Proceso terminado",
    type: Number,
  })
  @Post("calculate-special-range")
  async calculateCommissionSpecialRange(
    @Body() data: ComissionSpecialRangeDto
  ) {
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

  @ApiOperation({ summary: "COMI_RANGO" })
  @ApiBody({
    type: PctSpecialDto,
  })
  @ApiResponse({
    status: 200,
    description: "Proceso terminado",
    type: Number,
  })
  @Post("comission-range")
  async calculateCommissionRange(@Body() data: ComissionRangeDto) {
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

  @ApiOperation({ summary: "CALCULA_COM" })
  @ApiBody({
    type: CalcCommissionDto,
  })
  @ApiResponse({
    status: 200,
    description: "Proceso terminado",
    type: Number,
  })
  @Post("calculate-comission")
  async calculateCommission(@Body() data: CalcCommissionDto) {
    return await this.service.calculateCommission(data);
  }

  @ApiOperation({ summary: "APLICA_COM" })
  @ApiBody({
    type: GoodsComissionDto,
  })
  @ApiResponse({
    status: 200,
    description: "Proceso terminado",
    type: Number,
  })
  @Post("apply-goods-comission")
  async applyGoodsComission(@Body() data: GoodsComissionDto) {
    return await this.service.applyGoodsComission(data);
  }

  @ApiOperation({ summary: "COMI_TOTAL" })
  @ApiBody({
    type: ComissionTotalDto,
  })
  @ApiResponse({
    status: 200,
    description: "Proceso terminado",
    type: Number,
  })
  @Post("comission-total")
  async calculateComissionTotal(@Body() data: ComissionTotalDto) {
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

  @ApiOperation({ summary: "COMI_TOTAL" })
  @ApiParam({
    name: "comId",
    type: Number,
  })
  @ApiResponse({
    status: 200,
    description: "Proceso terminado",
    type: Number,
  })
  @Get("/goods-comission/:comId")
  async getGoodsInCalculateComission(@Param("comId") comId: Number) {
    return await this.service.getGoodsInCalculateComission(comId);
  }

  @ApiOperation({ summary: "LLENA_BIENES_FECHA" })
  @ApiBody({
    type: PaidGoodsInDatesDto,
  })
  @ApiResponse({
    status: 200,
    description: "Proceso terminado",
    type: Number,
  })
  @Post("/paid-goods-in-dates")
  async getPaidGoodsInDates(@Body() data: PaidGoodsInDatesDto) {
    return await this.service.getPaidGoodsInDates(data);
  }

  @ApiOperation({ summary: "LOS_LOTES" })
  @ApiResponse({
    status: 200,
    description: "Proceso terminado",
    type: Number,
  })
  @Post("/copy-event-lot")
  async copyEvenLot() {
    return await this.service.copyEvenLot();
  }

  @ApiOperation({ summary: "MARCA_MAYORES" })
  @ApiBody({
    type: Date,
  })
  @ApiResponse({
    status: 200,
    description: "Proceso terminado",
    type: Number,
  })
  @Post("/lots-date-greater")
  async markLotsDateGreater(@Body() data: { date: Date }) {
    return await this.service.markLotsDateGreater(new Date(data.date));
  }

  @ApiOperation({ summary: "MARCA_MENORES" })
  @ApiBody({
    type: Date,
  })
  @ApiResponse({
    status: 200,
    description: "Proceso terminado",
    type: Number,
  })
  @Post("/lots-date-minor")
  async markLotsDateMinor(@Body() data: { date: Date }) {
    return await this.service.markLotsDateMinor(new Date(data.date));
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

  @ApiOperation({ summary: "ELIMINA_MENORES" })
  @ApiBody({
    type: GoodsPaidFromEventDto,
  })
  @ApiResponse({
    status: 200,
    type: InsrtGoodDto,
  })
  @Post('/goods-paid-from-event')
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

  @ApiOperation({ summary: "OBT_PARAMETROS" })
  @ApiBody({
    type: GlobalParamsDto,
  })
  @ApiResponse({
    status: 200,
    type: GlobalParamsDto,
  })
  @Post("/global-params")
  async getGlobalParams(data: GlobalParamsDto) {
    return await this.service.getGlobalParams(data);
  }
}
