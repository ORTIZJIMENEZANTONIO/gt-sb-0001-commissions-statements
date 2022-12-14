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
exports.IndicatorReportController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../../shared/dto/pagination.dto");
const indicator_report_dto_1 = require("./dto/indicator-report.dto");
const indicator_report_service_1 = require("./indicator-report.service");
let IndicatorReportController = class IndicatorReportController {
    constructor(indicatorReportService) {
        this.indicatorReportService = indicatorReportService;
    }
    async getAllIndicatorReport(pagination) {
        return await this.indicatorReportService.getAllIndicatorReport(pagination);
    }
    async getIndicatorReportById(id) {
        return await this.indicatorReportService.getIndicatorReportById(id);
    }
    async createIndicatorReport(indicatorReportDTO) {
        return await this.indicatorReportService.createIndicatorReport(indicatorReportDTO);
    }
    async updateIndicatorReport(indicatorReportDTO, id) {
        return await this.indicatorReportService.updateIndicatorReport(indicatorReportDTO, id);
    }
    async deleteIndicatorReport(id) {
        return await this.indicatorReportService.deleteIndicatorReport(id);
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: [indicator_report_dto_1.IndicatorReportDTO]
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], IndicatorReportController.prototype, "getAllIndicatorReport", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: indicator_report_dto_1.IndicatorReportDTO
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador reporte indicador'
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], IndicatorReportController.prototype, "getIndicatorReportById", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: indicator_report_dto_1.IndicatorReportDTO
    }),
    (0, swagger_1.ApiBody)({
        type: indicator_report_dto_1.IndicatorReportDTO
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [indicator_report_dto_1.IndicatorReportDTO]),
    __metadata("design:returntype", Promise)
], IndicatorReportController.prototype, "createIndicatorReport", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador del reporte indicador'
    }),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [indicator_report_dto_1.IndicatorReportDTO, Number]),
    __metadata("design:returntype", Promise)
], IndicatorReportController.prototype, "updateIndicatorReport", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador del reporte indicador'
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], IndicatorReportController.prototype, "deleteIndicatorReport", null);
IndicatorReportController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('indicator-report'),
    (0, swagger_1.ApiTags)('indicator-report'),
    __metadata("design:paramtypes", [indicator_report_service_1.IndicatorReportService])
], IndicatorReportController);
exports.IndicatorReportController = IndicatorReportController;
//# sourceMappingURL=indicator-report.controller.js.map