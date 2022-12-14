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
exports.GoodSituacionService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let GoodSituacionService = class GoodSituacionService {
    constructor(clientProxy) {
        this.clientProxy = clientProxy;
    }
    async getAllGoodSituacion(pagination) {
        const pattern = { cmd: 'getAllGoodSituacion' };
        return await this.clientProxy.send(pattern, pagination);
    }
    async getGoodSituacionById(id) {
        const pattern = { cmd: 'getGoodSituacionById' };
        return await this.clientProxy.send(pattern, id);
    }
    async createGoodSituacion(goodSituacionDTO) {
        const pattern = { cmd: 'createGoodSituacion' };
        return await this.clientProxy.send(pattern, goodSituacionDTO);
    }
    async updateGoodSituacion(goodSituacionDTO, id) {
        goodSituacionDTO.id = id;
        const pattern = { cmd: 'updateGoodSituacion' };
        return await this.clientProxy.send(pattern, goodSituacionDTO);
    }
    async deleteGoodSituacion(id) {
        const pattern = { cmd: 'deleteGoodSituacion' };
        return await this.clientProxy.send(pattern, parseInt(`${id}`));
    }
};
GoodSituacionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SERVICE_SB_0001')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], GoodSituacionService);
exports.GoodSituacionService = GoodSituacionService;
//# sourceMappingURL=good-situacion.service.js.map