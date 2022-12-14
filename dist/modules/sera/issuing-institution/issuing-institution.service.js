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
exports.IssuingInstitutionService = void 0;
const common_1 = require("@nestjs/common");
;
const microservices_1 = require("@nestjs/microservices");
let IssuingInstitutionService = class IssuingInstitutionService {
    constructor(clientProxy) {
        this.clientProxy = clientProxy;
    }
    async getAllIssuingInstitution(pagination) {
        const pattern = { cmd: 'getAllIssuingInstitution' };
        return await this.clientProxy.send(pattern, pagination);
    }
    async getIssuingInstitutionById(id) {
        const pattern = { cmd: 'getIssuingInstitutionById' };
        return await this.clientProxy.send(pattern, id);
    }
    async createIssuingInstitution(issuingInstitutionDTO) {
        const pattern = { cmd: 'createIssuingInstitution' };
        return await this.clientProxy.send(pattern, issuingInstitutionDTO);
    }
    async updateIssuingInstitution(issuingInstitutionDTO, id) {
        issuingInstitutionDTO.id = id;
        const pattern = { cmd: 'updateIssuingInstitution' };
        return await this.clientProxy.send(pattern, issuingInstitutionDTO);
    }
    async deleteIssuingInstitution(id) {
        const pattern = { cmd: 'deleteIssuingInstitution' };
        return await this.clientProxy.send(pattern, parseInt(`${id}`));
    }
};
IssuingInstitutionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SERVICE_SB_0001')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], IssuingInstitutionService);
exports.IssuingInstitutionService = IssuingInstitutionService;
//# sourceMappingURL=issuing-institution.service.js.map