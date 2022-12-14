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
exports.SatClassificationService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let SatClassificationService = class SatClassificationService {
    constructor(clientProxy) {
        this.clientProxy = clientProxy;
    }
    async getAllSatClassification(pagination) {
        const pattern = { cmd: 'getAllSatClassification' };
        return await this.clientProxy.send(pattern, pagination);
    }
    async getSatClassificationById(id) {
        const pattern = { cmd: 'getSatClassificationById' };
        return await this.clientProxy.send(pattern, id);
    }
    async createSatClassification(satClassificationDTO) {
        const pattern = { cmd: 'createSatClassification' };
        return await this.clientProxy.send(pattern, satClassificationDTO);
    }
    async updateSatClassification(satClassificationDTO, id) {
        satClassificationDTO.id = parseInt(`${id}`);
        const pattern = { cmd: 'updateSatClassification' };
        return await this.clientProxy.send(pattern, satClassificationDTO);
    }
    async deleteSatClassification(id) {
        const pattern = { cmd: 'deleteSatClassification' };
        return await this.clientProxy.send(pattern, parseInt(`${id}`));
    }
};
SatClassificationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SERVICE_SB_0001')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], SatClassificationService);
exports.SatClassificationService = SatClassificationService;
//# sourceMappingURL=sat-classification.service.js.map