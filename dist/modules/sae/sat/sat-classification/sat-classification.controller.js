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
exports.SatClassificationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../../shared/dto/pagination.dto");
const sat_classification_dto_1 = require("./dto/sat-classification.dto");
const sat_classification_service_1 = require("./sat-classification.service");
let SatClassificationController = class SatClassificationController {
    constructor(satClassificationService) {
        this.satClassificationService = satClassificationService;
    }
    async getAllSatClassification(pagination) {
        return await this.satClassificationService.getAllSatClassification(pagination);
    }
    async getSatClassificationById(id) {
        return await this.satClassificationService.getSatClassificationById(id);
    }
    async createSatClassification(satClassificationDTO) {
        return await this.satClassificationService.createSatClassification(satClassificationDTO);
    }
    async updateSatClassification(satClassificationDTO, id) {
        return await this.satClassificationService.updateSatClassification(satClassificationDTO, id);
    }
    async deleteSatClassification(id) {
        return await this.satClassificationService.deleteSatClassification(id);
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        type: [sat_classification_dto_1.SatClassificationDTO]
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], SatClassificationController.prototype, "getAllSatClassification", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: sat_classification_dto_1.SatClassificationDTO
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de sat clasificacion'
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SatClassificationController.prototype, "getSatClassificationById", null);
__decorate([
    (0, swagger_1.ApiBody)({
        type: sat_classification_dto_1.SatClassificationDTO
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sat_classification_dto_1.SatClassificationDTO]),
    __metadata("design:returntype", Promise)
], SatClassificationController.prototype, "createSatClassification", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de clasificacion a modificar'
    }),
    (0, swagger_1.ApiBody)({
        type: sat_classification_dto_1.SatClassificationDTO
    }),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sat_classification_dto_1.SatClassificationDTO, Number]),
    __metadata("design:returntype", Promise)
], SatClassificationController.prototype, "updateSatClassification", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador del registro a eliminar'
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SatClassificationController.prototype, "deleteSatClassification", null);
SatClassificationController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('sat-classification'),
    (0, swagger_1.ApiTags)('sat-classification'),
    __metadata("design:paramtypes", [sat_classification_service_1.SatClassificationService])
], SatClassificationController);
exports.SatClassificationController = SatClassificationController;
//# sourceMappingURL=sat-classification.controller.js.map