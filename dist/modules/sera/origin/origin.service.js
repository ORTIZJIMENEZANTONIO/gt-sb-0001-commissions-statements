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
exports.OriginService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let OriginService = class OriginService {
    constructor(originProxy) {
        this.originProxy = originProxy;
    }
    async createOrigin(origin) {
        const pattern = { cmd: 'createOrigin' };
        return await this.originProxy.send(pattern, origin);
    }
    async getAllOrigins(pagination) {
        const pattern = { cmd: 'getAllOrigins' };
        return await this.originProxy.send(pattern, pagination);
    }
    async getOriginById(id) {
        const pattern = { cmd: 'getOriginById' };
        return await this.originProxy.send(pattern, id);
    }
    async updateOrigin(idToUpdate, origin) {
        const pattern = { cmd: 'updateOrigin' };
        const body = Object.assign({ idToUpdate }, origin);
        return await this.originProxy.send(pattern, body);
    }
    async deleteOrigin(id) {
        const pattern = { cmd: 'deleteOrigin' };
        return await this.originProxy.send(pattern, id);
    }
};
OriginService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SERVICE_ORIGIN')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], OriginService);
exports.OriginService = OriginService;
//# sourceMappingURL=origin.service.js.map