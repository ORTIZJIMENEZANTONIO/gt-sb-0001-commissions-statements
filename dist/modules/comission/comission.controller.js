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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComissionController = void 0;
const common_1 = require("@nestjs/common");
const comission_service_1 = require("./comission.service");
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
    async markLotsDateGreater(date) {
        return await this.service.markLotsDateGreater(date);
    }
    async markLotsDateMinor(date) {
        return await this.service.markLotsDateMinor(date);
    }
    async deleteLotsPaymentsDateMinor(startDate) {
        return await this.service.deleteLotsPaymentsDateMinor(startDate);
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
ComissionController = __decorate([
    (0, common_1.Controller)("comission"),
    __metadata("design:paramtypes", [comission_service_1.ComissionService])
], ComissionController);
exports.ComissionController = ComissionController;
//# sourceMappingURL=comission.controller.js.map