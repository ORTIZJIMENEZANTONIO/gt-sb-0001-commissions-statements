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
exports.ReportsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const report_dto_1 = require("./dto/report.dto");
const reports_service_1 = require("./reports.service");
let ReportsController = class ReportsController {
    constructor(reportService) {
        this.reportService = reportService;
    }
    async getAllReport(pagination) {
        return await this.reportService.getAllReport(pagination);
    }
    async getReportsById(id) {
        return await this.reportService.getReportsById(id);
    }
    async createReport(reportDTO) {
        return await this.reportService.createReport(reportDTO);
    }
    async updateReport(reportDTO, id) {
        return await this.reportService.updateReport(reportDTO, id);
    }
    async deleteReport(id) {
        return await this.reportService.deleteReport(id);
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: [report_dto_1.ReportDTO]
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getAllReport", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: report_dto_1.ReportDTO
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de reporte'
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReportsById", null);
__decorate([
    (0, swagger_1.ApiBody)({
        type: report_dto_1.ReportDTO
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: report_dto_1.ReportDTO
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_dto_1.ReportDTO]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "createReport", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador del reporte'
    }),
    (0, swagger_1.ApiBody)({
        type: report_dto_1.ReportDTO
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: report_dto_1.ReportDTO
    }),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_dto_1.ReportDTO, Number]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "updateReport", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador del reporte a eliminar. '
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "deleteReport", null);
ReportsController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('reports'),
    (0, swagger_1.ApiTags)('reports'),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
exports.ReportsController = ReportsController;
//# sourceMappingURL=reports.controller.js.map