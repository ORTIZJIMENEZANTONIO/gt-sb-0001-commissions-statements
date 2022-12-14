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
exports.RegulatoryController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const regulatory_dto_1 = require("./dto/regulatory.dto");
const regulatory_service_1 = require("./regulatory.service");
let RegulatoryController = class RegulatoryController {
    constructor(regulatoryService) {
        this.regulatoryService = regulatoryService;
    }
    async getAllRegulatory(pagination) {
        return await this.regulatoryService.getAllRegulatory(pagination);
    }
    async getRegulatoryById(id) {
        return await this.regulatoryService.getRegulatoryById(id);
    }
    async createRegulatory(regulatoryDTO) {
        return await this.regulatoryService.createRegulatory(regulatoryDTO);
    }
    async updateRegulatory(regulatoryDTO, id) {
        return await this.regulatoryService.updateRegulatory(regulatoryDTO, id);
    }
    async deleteRegulatory(id) {
        return await this.regulatoryService.deleteRegulatory(id);
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: [regulatory_dto_1.RegulatoryDTO]
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], RegulatoryController.prototype, "getAllRegulatory", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: regulatory_dto_1.RegulatoryDTO
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de Regulacion'
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RegulatoryController.prototype, "getRegulatoryById", null);
__decorate([
    (0, swagger_1.ApiBody)({
        type: regulatory_dto_1.RegulatoryDTO
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: regulatory_dto_1.RegulatoryDTO
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [regulatory_dto_1.RegulatoryDTO]),
    __metadata("design:returntype", Promise)
], RegulatoryController.prototype, "createRegulatory", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de la regulacion a modificar'
    }),
    (0, swagger_1.ApiBody)({
        type: regulatory_dto_1.RegulatoryDTO
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: regulatory_dto_1.RegulatoryDTO
    }),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [regulatory_dto_1.RegulatoryDTO, Number]),
    __metadata("design:returntype", Promise)
], RegulatoryController.prototype, "updateRegulatory", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador del la regulacion a eliminar'
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RegulatoryController.prototype, "deleteRegulatory", null);
RegulatoryController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('regulatory'),
    (0, swagger_1.ApiTags)('regulatory'),
    __metadata("design:paramtypes", [regulatory_service_1.RegulatoryService])
], RegulatoryController);
exports.RegulatoryController = RegulatoryController;
//# sourceMappingURL=regulatory.controller.js.map