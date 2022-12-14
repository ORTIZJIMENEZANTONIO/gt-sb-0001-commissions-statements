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
exports.SatSubclassificationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../../shared/dto/pagination.dto");
const sat_classification_dto_1 = require("./dto/sat-classification.dto");
const sat_subclassification_service_1 = require("./sat-subclassification.service");
let SatSubclassificationController = class SatSubclassificationController {
    constructor(satSubClassificationService) {
        this.satSubClassificationService = satSubClassificationService;
    }
    async getAllSatSubClassification(pagination) {
        return await this.satSubClassificationService.getAllSatSubClassification(pagination);
    }
    async getSatSubClassificationById(id) {
        return await this.satSubClassificationService.getSatSubClassificationById(id);
    }
    async createSatSubClassification(satSubClassificationDTO) {
        return await this.satSubClassificationService.createSatSubClassification(satSubClassificationDTO);
    }
    async updateSatSubClassification(satSubClassificationDTO, id) {
        return await this.satSubClassificationService.updateSatSubClassification(satSubClassificationDTO, id);
    }
    async deleteSatSubClassification(id) {
        return await this.satSubClassificationService.deleteSatSubClassification(id);
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        type: [sat_classification_dto_1.SatSubClassificationDTO]
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], SatSubclassificationController.prototype, "getAllSatSubClassification", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: sat_classification_dto_1.SatSubClassificationDTO
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de sat subclasificacion'
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SatSubclassificationController.prototype, "getSatSubClassificationById", null);
__decorate([
    (0, swagger_1.ApiBody)({
        type: sat_classification_dto_1.SatSubClassificationDTO
    }),
    (0, swagger_1.ApiResponse)({
        type: sat_classification_dto_1.SatSubClassificationDTO
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sat_classification_dto_1.SatSubClassificationDTO]),
    __metadata("design:returntype", Promise)
], SatSubclassificationController.prototype, "createSatSubClassification", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de subclasificacion a modificar'
    }),
    (0, swagger_1.ApiBody)({
        type: sat_classification_dto_1.SatSubClassificationDTO,
    }),
    (0, swagger_1.ApiResponse)({
        type: sat_classification_dto_1.SatSubClassificationDTO
    }),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sat_classification_dto_1.SatSubClassificationDTO, Number]),
    __metadata("design:returntype", Promise)
], SatSubclassificationController.prototype, "updateSatSubClassification", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador del la subclasificacion a eliminar'
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SatSubclassificationController.prototype, "deleteSatSubClassification", null);
SatSubclassificationController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('sat-subclassification'),
    (0, swagger_1.ApiTags)('sat-subclassification'),
    __metadata("design:paramtypes", [sat_subclassification_service_1.SatSubclassificationService])
], SatSubclassificationController);
exports.SatSubclassificationController = SatSubclassificationController;
//# sourceMappingURL=sat-subclassification.controller.js.map