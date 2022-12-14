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
exports.LegalAffairService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let LegalAffairService = class LegalAffairService {
    constructor(legalAffairProxy) {
        this.legalAffairProxy = legalAffairProxy;
    }
    async createLegalAffair(legalAffair) {
        const pattern = { cmd: 'createLegalAffair' };
        return await this.legalAffairProxy.send(pattern, legalAffair);
    }
    async getAllLegalAffairs(pagination) {
        const pattern = { cmd: 'getAllLegalAffairs' };
        return await this.legalAffairProxy.send(pattern, pagination);
    }
    async getLegalAffairById(id) {
        const pattern = { cmd: 'getLegalAffairById' };
        return await this.legalAffairProxy.send(pattern, id);
    }
    async updateLegalAffair(idToUpdate, legalAffair) {
        const pattern = { cmd: 'updateLegalAffair' };
        const body = Object.assign({ idToUpdate }, legalAffair);
        return await this.legalAffairProxy.send(pattern, body);
    }
    async deleteLegalAffair(id) {
        const pattern = { cmd: 'deleteLegalAffair' };
        return await this.legalAffairProxy.send(pattern, id);
    }
};
LegalAffairService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SERVICE_LEGAL_AFFAIR')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], LegalAffairService);
exports.LegalAffairService = LegalAffairService;
//# sourceMappingURL=legal-affair.service.js.map