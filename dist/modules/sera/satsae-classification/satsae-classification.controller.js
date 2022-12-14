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
exports.SatsaeClassificationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const satsae_classification_dto_1 = require("./dto/satsae-classification.dto");
const satsae_classification_service_1 = require("./satsae-classification.service");
let SatsaeClassificationController = class SatsaeClassificationController {
    constructor(satSaeClassficiationService) {
        this.satSaeClassficiationService = satSaeClassficiationService;
    }
    async getAllSatSaeClassification(pagination) {
        return await this.satSaeClassficiationService.getAllSatSaeClassification(pagination);
    }
    async getSatSaeClassificationById(id) {
        return await this.satSaeClassficiationService.getSatSaeClassificationById(id);
    }
    async createSatSaeClassification(cityDTO) {
        return await this.satSaeClassficiationService.createSatSaeClassification(cityDTO);
    }
    async updateSatSaeClassification(cityDTO, id) {
        return await this.satSaeClassficiationService.updateSatSaeClassification(cityDTO, id);
    }
    async deleteSatSaeClassification(id) {
        return await this.satSaeClassficiationService.deleteSatSaeClassification(parseInt(`${id}`));
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: [satsae_classification_dto_1.SatSaeClassificationDTO]
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], SatsaeClassificationController.prototype, "getAllSatSaeClassification", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: satsae_classification_dto_1.SatSaeClassificationDTO
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de sat sat clasificacion'
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SatsaeClassificationController.prototype, "getSatSaeClassificationById", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: satsae_classification_dto_1.SatSaeClassificationDTO
    }),
    (0, swagger_1.ApiBody)({
        type: satsae_classification_dto_1.SatSaeClassificationDTO
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [satsae_classification_dto_1.SatSaeClassificationDTO]),
    __metadata("design:returntype", Promise)
], SatsaeClassificationController.prototype, "createSatSaeClassification", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador clasificacion sat sae'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: satsae_classification_dto_1.SatSaeClassificationDTO
    }),
    (0, swagger_1.ApiBody)({
        type: satsae_classification_dto_1.SatSaeClassificationDTO
    }),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [satsae_classification_dto_1.SatSaeClassificationDTO, Number]),
    __metadata("design:returntype", Promise)
], SatsaeClassificationController.prototype, "updateSatSaeClassification", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador clasificacion sat sae'
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SatsaeClassificationController.prototype, "deleteSatSaeClassification", null);
SatsaeClassificationController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('satsae-classification'),
    (0, swagger_1.ApiTags)('satsae-classification'),
    __metadata("design:paramtypes", [satsae_classification_service_1.SatsaeClassificationService])
], SatsaeClassificationController);
exports.SatsaeClassificationController = SatsaeClassificationController;
//# sourceMappingURL=satsae-classification.controller.js.map