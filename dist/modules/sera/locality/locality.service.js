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
exports.LocalityService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let LocalityService = class LocalityService {
    constructor(clientProxy) {
        this.clientProxy = clientProxy;
    }
    async getAllLocality(pagination) {
        const pattern = { cmd: 'getAllLocalitySera' };
        return await this.clientProxy.send(pattern, pagination);
    }
    async getLocalityById(id) {
        const pattern = { cmd: 'getLocalitySeraById' };
        return await this.clientProxy.send(pattern, id);
    }
    async createLocality(localityDTO) {
        const pattern = { cmd: 'createLocalitySera' };
        return await this.clientProxy.send(pattern, localityDTO);
    }
    async updateLocality(localityDTO, id) {
        localityDTO.id = id;
        const pattern = { cmd: 'updateLocalitySera' };
        return await this.clientProxy.send(pattern, localityDTO);
    }
    async deleteLocality(id) {
        const pattern = { cmd: 'deleteLocalitySera' };
        return await this.clientProxy.send(pattern, parseInt(`${id}`));
    }
};
LocalityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SERVICE_SB_0001')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], LocalityService);
exports.LocalityService = LocalityService;
//# sourceMappingURL=locality.service.js.map