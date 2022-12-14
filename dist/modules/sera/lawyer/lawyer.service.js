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
exports.LawyerService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let LawyerService = class LawyerService {
    constructor(lawyerProxy) {
        this.lawyerProxy = lawyerProxy;
    }
    async createLawyer(lawyerDto) {
        const pattern = { cmd: 'createLawyer' };
        return await this.lawyerProxy.send(pattern, lawyerDto);
    }
    async getAllLawyers(pagination) {
        const pattern = { cmd: 'getAllLawyers' };
        return await this.lawyerProxy.send(pattern, pagination);
    }
    async getLawyerById(code) {
        const pattern = { cmd: 'getLawyerById' };
        return await this.lawyerProxy.send(pattern, code);
    }
    async updateLawyer(idToUpdate, body) {
        const pattern = { cmd: 'updateLawyer' };
        const data = Object.assign({ idToUpdate }, body);
        return await this.lawyerProxy.send(pattern, data);
    }
    async deleteLawyer(id) {
        const pattern = { cmd: 'deleteLawyer' };
        return await this.lawyerProxy.send(pattern, id);
    }
};
LawyerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SERVICE_LAWYER')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], LawyerService);
exports.LawyerService = LawyerService;
//# sourceMappingURL=lawyer.service.js.map