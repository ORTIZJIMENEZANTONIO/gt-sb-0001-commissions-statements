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
exports.IndicatorDeadlinesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../../shared/dto/pagination.dto");
const indicator_deadlines_dto_1 = require("./dto/indicator-deadlines.dto");
const indicator_deadlines_service_1 = require("./indicator-deadlines.service");
let IndicatorDeadlinesController = class IndicatorDeadlinesController {
    constructor(indicatorDeadlineService) {
        this.indicatorDeadlineService = indicatorDeadlineService;
    }
    async getAllIndicatorDeadline(pagination) {
        return await this.indicatorDeadlineService.getAllIndicatorDeadline(pagination);
    }
    async getIndicatorDeadlineById(id) {
        return await this.indicatorDeadlineService.getIndicatorDeadlineById(id);
    }
    async createIndicatorDeadline(indicatorDeadlinesDTO) {
        return await this.indicatorDeadlineService.createIndicatorDeadline(indicatorDeadlinesDTO);
    }
    async updateIndicatorDeadline(indicatorDeadlinesDTO, id) {
        return await this.indicatorDeadlineService.updateIndicatorDeadline(indicatorDeadlinesDTO, id);
    }
    async deleteIndicatorDeadline(id) {
        return await this.indicatorDeadlineService.deleteIndicatorDeadline(id);
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: [indicator_deadlines_dto_1.IndicatorDeadlinesDTO]
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], IndicatorDeadlinesController.prototype, "getAllIndicatorDeadline", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: indicator_deadlines_dto_1.IndicatorDeadlinesDTO
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador plazo indicador'
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], IndicatorDeadlinesController.prototype, "getIndicatorDeadlineById", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: indicator_deadlines_dto_1.IndicatorDeadlinesDTO
    }),
    (0, swagger_1.ApiBody)({
        type: indicator_deadlines_dto_1.IndicatorDeadlinesDTO
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [indicator_deadlines_dto_1.IndicatorDeadlinesDTO]),
    __metadata("design:returntype", Promise)
], IndicatorDeadlinesController.prototype, "createIndicatorDeadline", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador del plazo indicador'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: indicator_deadlines_dto_1.IndicatorDeadlinesDTO
    }),
    (0, swagger_1.ApiBody)({
        type: indicator_deadlines_dto_1.IndicatorDeadlinesDTO
    }),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [indicator_deadlines_dto_1.IndicatorDeadlinesDTO, Number]),
    __metadata("design:returntype", Promise)
], IndicatorDeadlinesController.prototype, "updateIndicatorDeadline", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador del plazo indicador'
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], IndicatorDeadlinesController.prototype, "deleteIndicatorDeadline", null);
IndicatorDeadlinesController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('indicator-deadlines'),
    (0, swagger_1.ApiTags)('indicator-deadlines'),
    __metadata("design:paramtypes", [indicator_deadlines_service_1.IndicatorDeadlinesService])
], IndicatorDeadlinesController);
exports.IndicatorDeadlinesController = IndicatorDeadlinesController;
//# sourceMappingURL=indicator-deadlines.controller.js.map