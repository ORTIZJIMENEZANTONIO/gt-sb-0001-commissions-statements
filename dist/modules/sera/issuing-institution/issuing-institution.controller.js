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
exports.IssuingInstitutionController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const issuing_institution_dto_1 = require("./dto/issuing-institution.dto");
const issuing_institution_service_1 = require("./issuing-institution.service");
let IssuingInstitutionController = class IssuingInstitutionController {
    constructor(issuingInstitutionService) {
        this.issuingInstitutionService = issuingInstitutionService;
    }
    async getAllIssuingInstitution(pagination) {
        return await this.issuingInstitutionService.getAllIssuingInstitution(pagination);
    }
    async getIssuingInstitutionById(id) {
        return await this.issuingInstitutionService.getIssuingInstitutionById(id);
    }
    async createIssuingInstitution(issuingInstitutionDTO) {
        return await this.issuingInstitutionService.createIssuingInstitution(issuingInstitutionDTO);
    }
    async updateIssuingInstitution(issuingInstitutionDTO, id) {
        return await this.issuingInstitutionService.updateIssuingInstitution(issuingInstitutionDTO, id);
    }
    async deleteIssuingInstitution(id) {
        return await this.issuingInstitutionService.deleteIssuingInstitution(parseInt(`${id}`));
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: [issuing_institution_dto_1.IssuingInstitutionDTO]
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], IssuingInstitutionController.prototype, "getAllIssuingInstitution", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: issuing_institution_dto_1.IssuingInstitutionDTO
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de ciudad'
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], IssuingInstitutionController.prototype, "getIssuingInstitutionById", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: issuing_institution_dto_1.IssuingInstitutionDTO
    }),
    (0, swagger_1.ApiBody)({
        type: issuing_institution_dto_1.IssuingInstitutionDTO
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [issuing_institution_dto_1.IssuingInstitutionDTO]),
    __metadata("design:returntype", Promise)
], IssuingInstitutionController.prototype, "createIssuingInstitution", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de Institucion emisora'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: issuing_institution_dto_1.IssuingInstitutionDTO
    }),
    (0, swagger_1.ApiBody)({
        type: issuing_institution_dto_1.IssuingInstitutionDTO
    }),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [issuing_institution_dto_1.IssuingInstitutionDTO, Number]),
    __metadata("design:returntype", Promise)
], IssuingInstitutionController.prototype, "updateIssuingInstitution", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de institucion emisora'
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], IssuingInstitutionController.prototype, "deleteIssuingInstitution", null);
IssuingInstitutionController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('issuing-institution'),
    (0, swagger_1.ApiTags)('issuing-institution'),
    __metadata("design:paramtypes", [issuing_institution_service_1.IssuingInstitutionService])
], IssuingInstitutionController);
exports.IssuingInstitutionController = IssuingInstitutionController;
//# sourceMappingURL=issuing-institution.controller.js.map