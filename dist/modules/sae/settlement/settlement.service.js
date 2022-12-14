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
exports.SettlementService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let SettlementService = class SettlementService {
    constructor(settlementProxy) {
        this.settlementProxy = settlementProxy;
    }
    async createSettlement(settlement) {
        const pattern = { cmd: 'createSettlement' };
        return await this.settlementProxy.send(pattern, settlement);
    }
    async getAllSettlements(pagination) {
        const pattern = { cmd: 'getAllSettlements' };
        return await this.settlementProxy.send(pattern, pagination);
    }
    async getSettlementByCode(code) {
        const pattern = { cmd: 'getSettlementByCode' };
        return await this.settlementProxy.send(pattern, code);
    }
    async updateSettlement(codeToUpdate, settlement) {
        const pattern = { cmd: 'updateSettlement' };
        const body = Object.assign({ codeToUpdate }, settlement);
        return await this.settlementProxy.send(pattern, body);
    }
    async deleteSettlement(code) {
        const pattern = { cmd: 'deleteSettlement' };
        return await this.settlementProxy.send(pattern, code);
    }
};
SettlementService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SERVICE_SETTLEMENT')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], SettlementService);
exports.SettlementService = SettlementService;
//# sourceMappingURL=settlement.service.js.map