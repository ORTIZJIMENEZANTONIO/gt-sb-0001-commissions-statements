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
exports.ReportsService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let ReportsService = class ReportsService {
    constructor(clientProxy) {
        this.clientProxy = clientProxy;
    }
    async getAllReport(pagination) {
        const pattern = { cmd: 'getAllReport' };
        return await this.clientProxy.send(pattern, pagination);
    }
    async getReportsById(id) {
        const pattern = { cmd: 'getReportById' };
        return await this.clientProxy.send(pattern, id);
    }
    async createReport(reportDTO) {
        const pattern = { cmd: 'createReport' };
        return await this.clientProxy.send(pattern, reportDTO);
    }
    async updateReport(reportDTO, id) {
        reportDTO.id = parseInt(`${id}`);
        const pattern = { cmd: 'updateReport' };
        return await this.clientProxy.send(pattern, reportDTO);
    }
    async deleteReport(id) {
        const pattern = { cmd: 'deleteReport' };
        return await this.clientProxy.send(pattern, parseInt(`${id}`));
    }
};
ReportsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SERVICE_SB_0001')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], ReportsService);
exports.ReportsService = ReportsService;
//# sourceMappingURL=reports.service.js.map