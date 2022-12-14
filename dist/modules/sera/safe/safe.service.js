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
exports.SafeService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let SafeService = class SafeService {
    constructor(safeProxy) {
        this.safeProxy = safeProxy;
    }
    async createSafe(safeDto) {
        const pattern = { cmd: 'createSafe' };
        return await this.safeProxy.send(pattern, safeDto);
    }
    async getAllSafes(pagination) {
        const pattern = { cmd: 'getAllSafes' };
        return await this.safeProxy.send(pattern, pagination);
    }
    async getSafeById(id) {
        const pattern = { cmd: 'getSafeById' };
        return await this.safeProxy.send(pattern, id);
    }
    async updateSafe(idToUpdate, safeDto) {
        const pattern = { cmd: 'updateSafe' };
        const body = Object.assign({ idToUpdate }, safeDto);
        return await this.safeProxy.send(pattern, body);
    }
    async deleteSafe(id) {
        const pattern = { cmd: 'deleteSafe' };
        return await this.safeProxy.send(pattern, id);
    }
};
SafeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SERVICE_SAFE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], SafeService);
exports.SafeService = SafeService;
//# sourceMappingURL=safe.service.js.map