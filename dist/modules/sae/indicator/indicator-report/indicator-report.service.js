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
exports.IndicatorReportService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let IndicatorReportService = class IndicatorReportService {
    constructor(clientProxy) {
        this.clientProxy = clientProxy;
    }
    async getAllIndicatorReport(pagination) {
        const pattern = { cmd: 'getAllIndicatorReport' };
        return await this.clientProxy.send(pattern, pagination);
    }
    async getIndicatorReportById(id) {
        const pattern = { cmd: 'getIndicatorReportById' };
        return await this.clientProxy.send(pattern, id);
    }
    async createIndicatorReport(clientProxyDTO) {
        const pattern = { cmd: 'createIndicatorReport' };
        return await this.clientProxy.send(pattern, clientProxyDTO);
    }
    async updateIndicatorReport(clientProxyDTO, id) {
        clientProxyDTO.id = parseInt(`${id}`);
        const pattern = { cmd: 'updateIndicatorReport' };
        return await this.clientProxy.send(pattern, clientProxyDTO);
    }
    async deleteIndicatorReport(id) {
        const pattern = { cmd: 'deleteIndicatorReport' };
        return await this.clientProxy.send(pattern, parseInt(`${id}`));
    }
};
IndicatorReportService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SERVICE_REPORT_INDICATOR')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], IndicatorReportService);
exports.IndicatorReportService = IndicatorReportService;
//# sourceMappingURL=indicator-report.service.js.map