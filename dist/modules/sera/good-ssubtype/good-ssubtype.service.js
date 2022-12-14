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
exports.GoodSsubtypeService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let GoodSsubtypeService = class GoodSsubtypeService {
    constructor(clientProxy) {
        this.clientProxy = clientProxy;
    }
    async getAllGoodSsubtype(pagination) {
        const pattern = { cmd: 'getAllGoodSsubtype' };
        return await this.clientProxy.send(pattern, pagination);
    }
    async getGoodSsubtypeById(id) {
        const pattern = { cmd: 'getGoodSsubtypeById' };
        return await this.clientProxy.send(pattern, id);
    }
    async createGoodSsubtype(goodSsubtypeDTO) {
        const pattern = { cmd: 'createGoodSsubtype' };
        return await this.clientProxy.send(pattern, goodSsubtypeDTO);
    }
    async updateGoodSsubtype(goodSsubtypeDTO, id) {
        goodSsubtypeDTO.id = id;
        const pattern = { cmd: 'updateGoodSsubtype' };
        return await this.clientProxy.send(pattern, goodSsubtypeDTO);
    }
    async deleteGoodSsubtype(id) {
        const pattern = { cmd: 'deleteGoodSsubtype' };
        return await this.clientProxy.send(pattern, parseInt(`${id}`));
    }
};
GoodSsubtypeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SERVICE_SB_0001')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], GoodSsubtypeService);
exports.GoodSsubtypeService = GoodSsubtypeService;
//# sourceMappingURL=good-ssubtype.service.js.map