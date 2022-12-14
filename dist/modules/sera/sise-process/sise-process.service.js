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
exports.SiseProcessService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let SiseProcessService = class SiseProcessService {
    constructor(siseProcessProxy) {
        this.siseProcessProxy = siseProcessProxy;
    }
    async createSiseProcess(siseProcess) {
        const pattern = { cmd: 'createSiseProcess' };
        return await this.siseProcessProxy.send(pattern, siseProcess);
    }
    async getAllSiseProcess(pagination) {
        const pattern = { cmd: 'getAllSiseProcess' };
        return await this.siseProcessProxy.send(pattern, pagination);
    }
    async getSiseProcessById(id) {
        const pattern = { cmd: 'getSiseProcessById' };
        return await this.siseProcessProxy.send(pattern, id);
    }
    async updateSiseProcess(idToUpdate, siseProcess) {
        const pattern = { cmd: 'updateSiseProcess' };
        const body = Object.assign({ idToUpdate }, siseProcess);
        return await this.siseProcessProxy.send(pattern, body);
    }
    async deleteSiseProcess(id) {
        const pattern = { cmd: 'deleteSiseProcess' };
        return await this.siseProcessProxy.send(pattern, id);
    }
};
SiseProcessService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SERVICE_SISE_PROCESS')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], SiseProcessService);
exports.SiseProcessService = SiseProcessService;
//# sourceMappingURL=sise-process.service.js.map