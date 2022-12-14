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
exports.RegionalDelegationService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let RegionalDelegationService = class RegionalDelegationService {
    constructor(regionalDelegationProxy) {
        this.regionalDelegationProxy = regionalDelegationProxy;
    }
    async createRegionalDelegation(regionalDelegationDto) {
        const pattern = { cmd: 'createRegionalDelegation' };
        return await this.regionalDelegationProxy.send(pattern, regionalDelegationDto);
    }
    async getAllRegionalDelegations(pagination) {
        const pattern = { cmd: 'getAllRegionalDelegations' };
        return await this.regionalDelegationProxy.send(pattern, pagination);
    }
    async getRegionalDelegationById(id) {
        const pattern = { cmd: 'getRegionalDelegationById' };
        return await this.regionalDelegationProxy.send(pattern, id);
    }
    async updateRegionalDelegation(idToUpdate, regionalData) {
        const pattern = { cmd: 'updateRegionalDelegation' };
        const body = Object.assign({ idToUpdate }, regionalData);
        return await this.regionalDelegationProxy.send(pattern, body);
    }
    async deleteRegionalDelegation(id) {
        const pattern = { cmd: 'deleteRegionalDelegation' };
        return await this.regionalDelegationProxy.send(pattern, id);
    }
};
RegionalDelegationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SERVICE_REGIONAL_DELEGATION')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], RegionalDelegationService);
exports.RegionalDelegationService = RegionalDelegationService;
//# sourceMappingURL=regional-delegation.service.js.map