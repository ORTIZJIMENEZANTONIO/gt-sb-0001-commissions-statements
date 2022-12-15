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
exports.ComissionService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let ComissionService = class ComissionService {
    constructor(proxy) {
        this.proxy = proxy;
    }
    async centralCoordinate(data) {
        const pattern = { cmd: "centralCoordinate" };
        return this.proxy.send(pattern, data);
    }
    async calculateCommissionSpecialRange(data) {
        const pattern = { cmd: "calculateCommissionSpecialRange" };
        return this.proxy.send(pattern, data);
    }
    async getPctComissionToSpecial(data) {
        const pattern = { cmd: "getPctComissionToSpecial" };
        return this.proxy.send(pattern, data);
    }
    async calculateCommissionRange(data) {
        const pattern = { cmd: "calculateCommissionRange" };
        return this.proxy.send(pattern, data);
    }
    async getTotalSolds(data) {
        const pattern = { cmd: "getTotalSolds" };
        return this.proxy.send(pattern, data);
    }
    async calculateCommission(data) {
        const pattern = { cmd: "calculateCommission" };
        return this.proxy.send(pattern, data);
    }
    async applyGoodsComission(data) {
        const pattern = { cmd: "applyGoodsComission" };
        return this.proxy.send(pattern, data);
    }
    async calculateComissionTotal(data) {
        const pattern = { cmd: "calculateComissionTotal" };
        return this.proxy.send(pattern, data);
    }
    async updateComissionData(data) {
        const pattern = { cmd: "updateComissionData" };
        return this.proxy.send(pattern, data);
    }
    async deleteComission(comId) {
        const pattern = { cmd: "deleteComission" };
        return this.proxy.send(pattern, comId);
    }
    async getGoodsInCalculateComission(comId) {
        const pattern = { cmd: "getGoodsInCalculateComission" };
        return this.proxy.send(pattern, comId);
    }
    async getPaidGoodsInDates(data) {
        const pattern = { cmd: "getPaidGoodsInDates" };
        return this.proxy.send(pattern, data);
    }
    async copyEvenLot() {
        const pattern = { cmd: "copyEvenLot" };
        return this.proxy.send(pattern, "");
    }
    async markLotsDateGreater(date) {
        const pattern = { cmd: "markLotsDateGreater" };
        return this.proxy.send(pattern, date);
    }
    async markLotsDateMinor(date) {
        const pattern = { cmd: "markLotsDateMinor" };
        return this.proxy.send(pattern, date);
    }
    async deleteLotsPaymentsDateMinor(startDate) {
        const pattern = { cmd: "deleteLotsPaymentsDateMinor" };
        return this.proxy.send(pattern, startDate);
    }
    async getGoodsPaidFromEvent(data) {
        const pattern = { cmd: "getGoodsPaidFromEvent" };
        return this.proxy.send(pattern, data);
    }
    async insertGoods(data) {
        const pattern = { cmd: "insertGoods" };
        return this.proxy.send(pattern, data);
    }
    async getGlobalParams(data) {
        const pattern = { cmd: "getGlobalParams" };
        return this.proxy.send(pattern, data);
    }
};
ComissionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("SERVICE_COMISSION")),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], ComissionService);
exports.ComissionService = ComissionService;
//# sourceMappingURL=comission.service.js.map