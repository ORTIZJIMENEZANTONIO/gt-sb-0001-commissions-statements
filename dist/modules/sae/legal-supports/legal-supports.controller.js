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
exports.LegalSupportsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const legal_supports_dto_1 = require("./dto/legal-supports.dto");
const legal_supports_service_1 = require("./legal-supports.service");
let LegalSupportsController = class LegalSupportsController {
    constructor(legalSupportService) {
        this.legalSupportService = legalSupportService;
    }
    async getAllLegalSupports(pagination) {
        return await this.legalSupportService.getAllLegalSupports(pagination);
    }
    async getLegalSupporstById(id) {
        return await this.legalSupportService.getLegalSupportsById(id);
    }
    async createLegalSupports(legalSupportDTO) {
        return await this.legalSupportService.createLegalSupports(legalSupportDTO);
    }
    async updateLegalSupports(legalSupportDTO, id) {
        return await this.legalSupportService.updateLegalSupports(legalSupportDTO, id);
    }
    async deleteLegalSupports(id) {
        return await this.legalSupportService.deleteLegalSupports(id);
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: [legal_supports_dto_1.LegalSupportsDTO]
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], LegalSupportsController.prototype, "getAllLegalSupports", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: legal_supports_dto_1.LegalSupportsDTO
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador sustentos legales'
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LegalSupportsController.prototype, "getLegalSupporstById", null);
__decorate([
    (0, swagger_1.ApiBody)({
        type: legal_supports_dto_1.LegalSupportsDTO
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: legal_supports_dto_1.LegalSupportsDTO
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [legal_supports_dto_1.LegalSupportsDTO]),
    __metadata("design:returntype", Promise)
], LegalSupportsController.prototype, "createLegalSupports", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador del registro a modificar'
    }),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [legal_supports_dto_1.LegalSupportsDTO, String]),
    __metadata("design:returntype", Promise)
], LegalSupportsController.prototype, "updateLegalSupports", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador del registro a eliminar'
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LegalSupportsController.prototype, "deleteLegalSupports", null);
LegalSupportsController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('legal-supports'),
    (0, swagger_1.ApiTags)('legal-supports'),
    __metadata("design:paramtypes", [legal_supports_service_1.LegalSupportsService])
], LegalSupportsController);
exports.LegalSupportsController = LegalSupportsController;
//# sourceMappingURL=legal-supports.controller.js.map