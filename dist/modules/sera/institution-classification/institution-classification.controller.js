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
exports.InstitutionClassificationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const institution_classification_dto_1 = require("./dto/institution-classification.dto");
const institution_classification_service_1 = require("./institution-classification.service");
let InstitutionClassificationController = class InstitutionClassificationController {
    constructor(institutionClassificationService) {
        this.institutionClassificationService = institutionClassificationService;
    }
    async getAllInstitutionClassification(pagination) {
        return await this.institutionClassificationService.getAllInstitutionClassification(pagination);
    }
    async getInstitutionClassificationById(id) {
        return await this.institutionClassificationService.getInstitutionClassificationById(id);
    }
    async createInstitutionClassification(lockerDTO) {
        return await this.institutionClassificationService.createInstitutionClassification(lockerDTO);
    }
    async updateInstitutionClassification(lockerDTO, id) {
        return await this.institutionClassificationService.updateInstitutionClassification(lockerDTO, id);
    }
    async deleteInstitutionClassification(id) {
        return await this.institutionClassificationService.deleteInstitutionClassification(parseInt(`${id}`));
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: [institution_classification_dto_1.InstitutionClassificationDTO]
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], InstitutionClassificationController.prototype, "getAllInstitutionClassification", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: institution_classification_dto_1.InstitutionClassificationDTO
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador clasificacion de institucion'
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], InstitutionClassificationController.prototype, "getInstitutionClassificationById", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: institution_classification_dto_1.InstitutionClassificationDTO
    }),
    (0, swagger_1.ApiBody)({
        type: institution_classification_dto_1.InstitutionClassificationDTO
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [institution_classification_dto_1.InstitutionClassificationDTO]),
    __metadata("design:returntype", Promise)
], InstitutionClassificationController.prototype, "createInstitutionClassification", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de la clasificacion de la institucion'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: institution_classification_dto_1.InstitutionClassificationDTO
    }),
    (0, swagger_1.ApiBody)({
        type: institution_classification_dto_1.InstitutionClassificationDTO
    }),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [institution_classification_dto_1.InstitutionClassificationDTO, Number]),
    __metadata("design:returntype", Promise)
], InstitutionClassificationController.prototype, "updateInstitutionClassification", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de la clasificacion de la institucion'
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], InstitutionClassificationController.prototype, "deleteInstitutionClassification", null);
InstitutionClassificationController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('institution-classification'),
    (0, swagger_1.ApiTags)('institution-classification'),
    __metadata("design:paramtypes", [institution_classification_service_1.InstitutionClassificationService])
], InstitutionClassificationController);
exports.InstitutionClassificationController = InstitutionClassificationController;
//# sourceMappingURL=institution-classification.controller.js.map