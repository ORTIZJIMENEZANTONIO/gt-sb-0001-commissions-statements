import { Injectable, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

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
@Injectable()
export class ComissionService {
  constructor(@Inject("SERVICE_COMISSION") private readonly proxy: ClientProxy) {}

  async centralCoordinate(data: CentralCoordinateDto) {
    const pattern = { cmd: "centralCoordinate" };
    return this.proxy.send(pattern, data);
  }

  async calculateCommissionSpecialRange(data: ComissionSpecialRangeDto) {
    const pattern = { cmd: "calculateCommissionSpecialRange" };
    return this.proxy.send(pattern, data);
  }

  async getPctComissionToSpecial(data: PctSpecialDto) {
    const pattern = { cmd: "getPctComissionToSpecial" };
    return this.proxy.send(pattern, data);
  }

  async calculateCommissionRange(data: ComissionRangeDto) {
    const pattern = { cmd: "calculateCommissionRange" };
    return this.proxy.send(pattern, data);
  }

  async getTotalSolds(data: TotalSoldsDto) {
    const pattern = { cmd: "getTotalSolds" };
    return this.proxy.send(pattern, data);
  }

  async calculateCommission(data: CalcCommissionDto) {
    const pattern = { cmd: "calculateCommission" };
    return this.proxy.send(pattern, data);
  }

  async applyGoodsComission(data: GoodsComissionDto) {
    const pattern = { cmd: "applyGoodsComission" };
    return this.proxy.send(pattern, data);
  }

  async calculateComissionTotal(data: ComissionTotalDto) {
    const pattern = { cmd: "calculateComissionTotal" };
    return this.proxy.send(pattern, data);
  }

  async updateComissionData(data: UpdtComissionDto) {
    const pattern = { cmd: "updateComissionData" };
    return this.proxy.send(pattern, data);
  }

  async deleteComission(comId: Number) {
    const pattern = { cmd: "deleteComission" };
    return this.proxy.send(pattern, comId);
  }

  async getGoodsInCalculateComission(comId: Number) {
    const pattern = { cmd: "getGoodsInCalculateComission" };
    return this.proxy.send(pattern, comId);
  }

  async getPaidGoodsInDates(data: PaidGoodsInDatesDto) {
    const pattern = { cmd: "getPaidGoodsInDates" };
    return this.proxy.send(pattern, data);
  }

  async copyEvenLot() {
    const pattern = { cmd: "copyEvenLot" };
    return this.proxy.send(pattern, "");
  }

  async markLotsDateGreater(date: Date) {
    const pattern = { cmd: "markLotsDateGreater" };
    return this.proxy.send(pattern, date);
  }

  async markLotsDateMinor(date: Date) {
    const pattern = { cmd: "markLotsDateMinor" };
    return this.proxy.send(pattern, date);
  }

  async deleteLotsPaymentsDateMinor(startDate: Date) {
    const pattern = { cmd: "deleteLotsPaymentsDateMinor" };
    return this.proxy.send(pattern, startDate);
  }

  async getGoodsPaidFromEvent(data: GoodsPaidFromEventDto) {
    const pattern = { cmd: "getGoodsPaidFromEvent" };
    return this.proxy.send(pattern, data);
  }

  async insertGoods(data: InsrtGoodDto) {
    const pattern = { cmd: "insertGoods" };
    return this.proxy.send(pattern, data);
  }

  async getGlobalParams(data: GlobalParamsDto) {
    const pattern = { cmd: "getGlobalParams" };
    return this.proxy.send(pattern, data);
  }
}
