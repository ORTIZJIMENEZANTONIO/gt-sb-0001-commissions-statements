"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComissionController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const comission_service_1 = require("./comission.service");
const get_global_params_dto_1 = require("./dto/get-global-params.dto");
const insrt_goods_dto_1 = require("./dto/insrt-goods.dto");
const get_paid_goods_In_dates_dto_1 = require("./dto/get-paid-goods-In-dates.dto");
const updt_comission_dto_1 = require("./dto/updt-comission.dto");
const calc_comission_total_dto_1 = require("./dto/calc-comission-total.dto");
const goods_comission_dto_1 = require("./dto/goods-comission.dto");
const calc_comission_dto_1 = require("./dto/calc-comission.dto");
const get_total_solds_dto_1 = require("./dto/get-total-solds.dto");
const calc_comission_range_dto_1 = require("./dto/calc-comission-range.dto");
const get_pct_dto_1 = require("./dto/get-pct.dto");
const comission_special_range_dto_1 = require("./dto/comission-special-range.dto");
const central_coordinate_dto_1 = require("./dto/central-coordinate.dto");
let ComissionController = class ComissionController {
    constructor(service) {
        this.service = service;
    }
    async centralCoordinate(data) {
        return await this.service.centralCoordinate(data);
    }
    async calculateCommissionSpecialRange(data) {
        return await this.service.calculateCommissionSpecialRange(data);
    }
    async getPctComissionToSpecial(data) {
        return await this.service.getPctComissionToSpecial(data);
    }
    async calculateCommissionRange(data) {
        return await this.service.calculateCommissionRange(data);
    }
    async getTotalSolds(data) {
        return await this.service.getTotalSolds(data);
    }
    async calculateCommission(data) {
        return await this.service.calculateCommission(data);
    }
    async applyGoodsComission(data) {
        return await this.service.applyGoodsComission(data);
    }
    async calculateComissionTotal(data) {
        return await this.service.calculateComissionTotal(data);
    }
    async updateComissionData(data) {
        return await this.service.updateComissionData(data);
    }
    async deleteComission(comId) {
        return await this.service.deleteComission(comId);
    }
    async getGoodsInCalculateComission(comId) {
        return await this.service.getGoodsInCalculateComission(comId);
    }
    async getPaidGoodsInDates(data) {
        return await this.service.getPaidGoodsInDates(data);
    }
    async copyEvenLot() {
        return await this.service.copyEvenLot();
    }
    async markLotsDateGreater(data) {
        return await this.service.markLotsDateGreater(new Date(data.date));
    }
    async markLotsDateMinor(data) {
        return await this.service.markLotsDateMinor(new Date(data.date));
    }
    async deleteLotsPaymentsDateMinor(data) {
        return await this.service.deleteLotsPaymentsDateMinor(new Date(data.startDate));
    }
    async getGoodsPaidFromEvent(data) {
        return await this.service.getGoodsPaidFromEvent(data);
    }
    async insertGoods(data) {
        return await this.service.insertGoods(data);
    }
    async getGlobalParams(data) {
        return await this.service.getGlobalParams(data);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "CENTRAL" }),
    (0, swagger_1.ApiBody)({
        type: central_coordinate_dto_1.CentralCoordinateDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Proceso terminado",
        type: Number,
    }),
    (0, common_1.Post)("central-coordinate"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [central_coordinate_dto_1.CentralCoordinateDto]),
    __metadata("design:returntype", Promise)
], ComissionController.prototype, "centralCoordinate", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "COMI_RANGOESP" }),
    (0, swagger_1.ApiBody)({
        type: comission_special_range_dto_1.ComissionSpecialRangeDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Proceso terminado",
        type: Number,
    }),
    (0, common_1.Post)("calculate-special-range"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comission_special_range_dto_1.ComissionSpecialRangeDto]),
    __metadata("design:returntype", Promise)
], ComissionController.prototype, "calculateCommissionSpecialRange", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "OBT_PCTESP" }),
    (0, swagger_1.ApiBody)({
        type: get_pct_dto_1.PctSpecialDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Fecha final",
        type: Number,
    }),
    (0, common_1.Post)("comission-special"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_pct_dto_1.PctSpecialDto]),
    __metadata("design:returntype", Promise)
], ComissionController.prototype, "getPctComissionToSpecial", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "COMI_RANGO" }),
    (0, swagger_1.ApiBody)({
        type: get_pct_dto_1.PctSpecialDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Proceso terminado",
        type: Number,
    }),
    (0, common_1.Post)("comission-special-range"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [calc_comission_range_dto_1.ComissionRangeDto]),
    __metadata("design:returntype", Promise)
], ComissionController.prototype, "calculateCommissionRange", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "OBT_TOT_VTAS" }),
    (0, swagger_1.ApiBody)({
        type: get_total_solds_dto_1.TotalSoldsDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Fecha final",
        type: String,
    }),
    (0, common_1.Post)("total-solds"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_total_solds_dto_1.TotalSoldsDto]),
    __metadata("design:returntype", Promise)
], ComissionController.prototype, "getTotalSolds", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "CALCULA_COM" }),
    (0, swagger_1.ApiBody)({
        type: calc_comission_dto_1.CalcCommissionDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Proceso terminado",
        type: Number,
    }),
    (0, common_1.Post)("calculate-comission"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [calc_comission_dto_1.CalcCommissionDto]),
    __metadata("design:returntype", Promise)
], ComissionController.prototype, "calculateCommission", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "APLICA_COM" }),
    (0, swagger_1.ApiBody)({
        type: goods_comission_dto_1.GoodsComissionDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Proceso terminado",
        type: Number,
    }),
    (0, common_1.Post)("apply-goods-comission"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [goods_comission_dto_1.GoodsComissionDto]),
    __metadata("design:returntype", Promise)
], ComissionController.prototype, "applyGoodsComission", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "COMI_TOTAL" }),
    (0, swagger_1.ApiBody)({
        type: calc_comission_total_dto_1.ComissionTotalDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Proceso terminado",
        type: Number,
    }),
    (0, common_1.Post)("comission-total"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [calc_comission_total_dto_1.ComissionTotalDto]),
    __metadata("design:returntype", Promise)
], ComissionController.prototype, "calculateComissionTotal", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "ACT_BIENES_COM" }),
    (0, swagger_1.ApiBody)({
        type: updt_comission_dto_1.UpdtComissionDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
    }),
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [updt_comission_dto_1.UpdtComissionDto]),
    __metadata("design:returntype", Promise)
], ComissionController.prototype, "updateComissionData", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "INSERTA" }),
    (0, swagger_1.ApiParam)({
        name: "comId",
        type: Number,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
    }),
    (0, common_1.Delete)(":comId"),
    __param(0, (0, common_1.Param)("comId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ComissionController.prototype, "deleteComission", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "COMI_TOTAL" }),
    (0, swagger_1.ApiParam)({
        name: "comId",
        type: Number,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Proceso terminado",
        type: Number,
    }),
    (0, common_1.Get)("/goods-comission/:comId"),
    __param(0, (0, common_1.Param)("comId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ComissionController.prototype, "getGoodsInCalculateComission", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "LLENA_BIENES_FECHA" }),
    (0, swagger_1.ApiBody)({
        type: get_paid_goods_In_dates_dto_1.PaidGoodsInDatesDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Proceso terminado",
        type: Number,
    }),
    (0, common_1.Post)("/paid-goods-in-dates"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_paid_goods_In_dates_dto_1.PaidGoodsInDatesDto]),
    __metadata("design:returntype", Promise)
], ComissionController.prototype, "getPaidGoodsInDates", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "LOS_LOTES" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Proceso terminado",
        type: Number,
    }),
    (0, common_1.Post)("/copy-event-lot"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ComissionController.prototype, "copyEvenLot", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "MARCA_MAYORES" }),
    (0, swagger_1.ApiBody)({
        type: Date,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Proceso terminado",
        type: Number,
    }),
    (0, common_1.Post)("/lots-date-greater"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ComissionController.prototype, "markLotsDateGreater", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "MARCA_MENORES" }),
    (0, swagger_1.ApiBody)({
        type: Date,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Proceso terminado",
        type: Number,
    }),
    (0, common_1.Post)("/lots-date-minor"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ComissionController.prototype, "markLotsDateMinor", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "ELIMINA_MENORES" }),
    (0, swagger_1.ApiBody)({
        type: Date,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: insrt_goods_dto_1.InsrtGoodDto,
    }),
    (0, common_1.Delete)("/payments/date-minor"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ComissionController.prototype, "deleteLotsPaymentsDateMinor", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "INSERTA" }),
    (0, swagger_1.ApiBody)({
        type: insrt_goods_dto_1.InsrtGoodDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: insrt_goods_dto_1.InsrtGoodDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [insrt_goods_dto_1.InsrtGoodDto]),
    __metadata("design:returntype", Promise)
], ComissionController.prototype, "insertGoods", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "OBT_PARAMETROS" }),
    (0, swagger_1.ApiBody)({
        type: get_global_params_dto_1.GlobalParamsDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: get_global_params_dto_1.GlobalParamsDto,
    }),
    (0, common_1.Post)("/global-params"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_global_params_dto_1.GlobalParamsDto]),
    __metadata("design:returntype", Promise)
], ComissionController.prototype, "getGlobalParams", null);
ComissionController = __decorate([
    (0, common_1.Controller)("comission"),
    __metadata("design:paramtypes", [comission_service_1.ComissionService])
], ComissionController);
exports.ComissionController = ComissionController;
//# sourceMappingURL=comission.controller.js.map