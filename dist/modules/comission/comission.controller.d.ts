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
export declare class ComissionController {
    private readonly service;
    constructor(service: ComissionService);
    centralCoordinate(data: CentralCoordinateDto): Promise<import("rxjs").Observable<any>>;
    calculateCommissionSpecialRange(data: ComissionSpecialRangeDto): Promise<import("rxjs").Observable<any>>;
    getPctComissionToSpecial(data: PctSpecialDto): Promise<import("rxjs").Observable<any>>;
    calculateCommissionRange(data: ComissionRangeDto): Promise<import("rxjs").Observable<any>>;
    getTotalSolds(data: TotalSoldsDto): Promise<import("rxjs").Observable<any>>;
    calculateCommission(data: CalcCommissionDto): Promise<import("rxjs").Observable<any>>;
    applyGoodsComission(data: GoodsComissionDto): Promise<import("rxjs").Observable<any>>;
    calculateComissionTotal(data: ComissionTotalDto): Promise<import("rxjs").Observable<any>>;
    updateComissionData(data: UpdtComissionDto): Promise<import("rxjs").Observable<any>>;
    deleteComission(comId: Number): Promise<import("rxjs").Observable<any>>;
    getGoodsInCalculateComission(comId: Number): Promise<import("rxjs").Observable<any>>;
    getPaidGoodsInDates(data: PaidGoodsInDatesDto): Promise<import("rxjs").Observable<any>>;
    copyEvenLot(): Promise<import("rxjs").Observable<any>>;
    markLotsDateGreater(data: {
        date: Date;
    }): Promise<import("rxjs").Observable<any>>;
    markLotsDateMinor(data: {
        date: Date;
    }): Promise<import("rxjs").Observable<any>>;
    deleteLotsPaymentsDateMinor(data: {
        startDate: Date;
    }): Promise<import("rxjs").Observable<any>>;
    getGoodsPaidFromEvent(data: GoodsPaidFromEventDto): Promise<import("rxjs").Observable<any>>;
    insertGoods(data: InsrtGoodDto): Promise<import("rxjs").Observable<any>>;
    getGlobalParams(data: GlobalParamsDto): Promise<import("rxjs").Observable<any>>;
}
