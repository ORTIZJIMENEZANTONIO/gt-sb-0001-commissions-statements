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
exports.SeriesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const series_dto_1 = require("./dto/series.dto");
const series_service_1 = require("./series.service");
let SeriesController = class SeriesController {
    constructor(seriesService) {
        this.seriesService = seriesService;
    }
    async createSeries(seriesDto) {
        return await this.seriesService.createSeries(seriesDto);
    }
    async getAllSeries(pagination) {
        return await this.seriesService.getAllSeries(pagination);
    }
    async getSeriesById(code) {
        return await this.seriesService.getSerieByCode(code);
    }
    async updateSeries(codeToUpdate, data) {
        return await this.seriesService.updateSerie(codeToUpdate, data);
    }
    async deleteSeries(code) {
        return await this.seriesService.deleteSeries(code);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Guardar nuevo serie ifai' }),
    (0, swagger_1.ApiBody)({
        type: series_dto_1.SeriesDto,
        description: 'Información de la serie ifai a guardar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Guarda serie ifai',
        type: series_dto_1.SeriesDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [series_dto_1.SeriesDto]),
    __metadata("design:returntype", Promise)
], SeriesController.prototype, "createSeries", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener lista de todas las serie ifais' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de serie ifais existenetes',
        type: [pagination_dto_1.PaginationDto],
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], SeriesController.prototype, "getAllSeries", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener serie ifai por su id ej. 1' }),
    (0, swagger_1.ApiParam)({
        name: 'code',
        description: 'Identificador de la serie ifai'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'serie ifai obtenida por su identificador',
        type: series_dto_1.SeriesDto,
    }),
    (0, common_1.Get)(":code"),
    __param(0, (0, common_1.Param)("code")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SeriesController.prototype, "getSeriesById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Modificar serie ifai' }),
    (0, swagger_1.ApiParam)({
        name: 'codeToUpdate',
        description: 'Identificador del serie ifai'
    }),
    (0, swagger_1.ApiBody)({
        type: series_dto_1.SeriesDto,
        description: 'Objeto de la serie ifai a modificar'
    }),
    (0, common_1.Put)(":codeToUpdate"),
    __param(0, (0, common_1.Param)("codeToUpdate")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, series_dto_1.SeriesDto]),
    __metadata("design:returntype", Promise)
], SeriesController.prototype, "updateSeries", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Borrar serie ifai por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'code',
        description: 'Identificador de la serie ifai '
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borrar serie ifai por su identificador',
        type: series_dto_1.SeriesDto,
    }),
    (0, common_1.Delete)(":code"),
    __param(0, (0, common_1.Param)("code")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SeriesController.prototype, "deleteSeries", null);
SeriesController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('series'),
    (0, swagger_1.ApiTags)('series'),
    __metadata("design:paramtypes", [series_service_1.SeriesService])
], SeriesController);
exports.SeriesController = SeriesController;
//# sourceMappingURL=series.controller.js.map