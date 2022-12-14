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
exports.AffairService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let AffairService = class AffairService {
    constructor(affairProxy) {
        this.affairProxy = affairProxy;
    }
    async createAffair(affair) {
        const pattern = { cmd: 'createAffair' };
        return await this.affairProxy.send(pattern, affair);
    }
    async getAllAffairs(pagination) {
        const pattern = { cmd: 'getAllAffairs' };
        return await this.affairProxy.send(pattern, pagination);
    }
    async getAffairById(id) {
        const pattern = { cmd: 'getAffairById' };
        return await this.affairProxy.send(pattern, id);
    }
    async updateAffair(idToUpdate, affair) {
        const pattern = { cmd: 'updateAffair' };
        const body = Object.assign({ idToUpdate }, affair);
        return await this.affairProxy.send(pattern, body);
    }
    async deleteAffair(id) {
        const pattern = { cmd: 'deleteAffair' };
        return await this.affairProxy.send(pattern, id);
    }
};
AffairService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SERVICE_AFFAIR_SERA')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], AffairService);
exports.AffairService = AffairService;
//# sourceMappingURL=affair.service.js.map