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
exports.ComerPenaltyService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let ComerPenaltyService = class ComerPenaltyService {
    constructor(proxy) {
        this.proxy = proxy;
    }
    async registerPenalty(data) {
        const pattern = { cmd: 'registerPenalty' };
        return await this.proxy.send(pattern, data);
    }
    async updatePenalty(data) {
        const pattern = { cmd: 'updatePenalty' };
        return await this.proxy.send(pattern, data);
    }
    async releasePenalty(data) {
        const pattern = { cmd: 'releasePenalty' };
        return await this.proxy.send(pattern, data);
    }
    async getFinalDate(data) {
        const pattern = { cmd: 'getFinalDate' };
        return await this.proxy.send(pattern, data);
    }
    async penaltyReverse(data) {
        const pattern = { cmd: 'penaltyReverse' };
        return await this.proxy.send(pattern, data);
    }
};
ComerPenaltyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SERVICE_PENALTY')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], ComerPenaltyService);
exports.ComerPenaltyService = ComerPenaltyService;
//# sourceMappingURL=comer-penalty.service.js.map