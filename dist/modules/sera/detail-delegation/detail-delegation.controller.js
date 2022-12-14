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
exports.DetailDelegationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const detail_delegation_service_1 = require("./detail-delegation.service");
const detail_delegation_dto_1 = require("./dto/detail-delegation.dto");
let DetailDelegationController = class DetailDelegationController {
    constructor(detailDelegationService) {
        this.detailDelegationService = detailDelegationService;
    }
    async getAllDetailDelegation(pagination) {
        return await this.detailDelegationService.getAllDetailDelegation(pagination);
    }
    async getDetailDelegationById(id) {
        return await this.detailDelegationService.getDetailDelegationById(id);
    }
    async createDetailDelegation(detailDelegationDTO) {
        return await this.detailDelegationService.createDetailDelegation(detailDelegationDTO);
    }
    async updateDetailDelegation(detailDelegationDTO, id) {
        return await this.detailDelegationService.updateDetailDelegation(detailDelegationDTO, id);
    }
    async deleteDetailDelegation(id) {
        return await this.detailDelegationService.deleteDetailDelegation(parseInt(`${id}`));
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: [detail_delegation_dto_1.DetailDelegationDTO]
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], DetailDelegationController.prototype, "getAllDetailDelegation", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: detail_delegation_dto_1.DetailDelegationDTO
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador detalle delegacion'
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DetailDelegationController.prototype, "getDetailDelegationById", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: detail_delegation_dto_1.DetailDelegationDTO
    }),
    (0, swagger_1.ApiBody)({
        type: detail_delegation_dto_1.DetailDelegationDTO
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [detail_delegation_dto_1.DetailDelegationDTO]),
    __metadata("design:returntype", Promise)
], DetailDelegationController.prototype, "createDetailDelegation", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador delegacion'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: detail_delegation_dto_1.DetailDelegationDTO
    }),
    (0, swagger_1.ApiBody)({
        type: detail_delegation_dto_1.DetailDelegationDTO
    }),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [detail_delegation_dto_1.DetailDelegationDTO, Number]),
    __metadata("design:returntype", Promise)
], DetailDelegationController.prototype, "updateDetailDelegation", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador delegacion'
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DetailDelegationController.prototype, "deleteDetailDelegation", null);
DetailDelegationController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('detail-delegation'),
    (0, swagger_1.ApiTags)('detail-delegation'),
    __metadata("design:paramtypes", [detail_delegation_service_1.DetailDelegationService])
], DetailDelegationController);
exports.DetailDelegationController = DetailDelegationController;
//# sourceMappingURL=detail-delegation.controller.js.map