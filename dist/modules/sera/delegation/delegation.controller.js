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
exports.DelegationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const delegation_service_1 = require("./delegation.service");
const delegation_dto_1 = require("./dto/delegation.dto");
let DelegationController = class DelegationController {
    constructor(delegationService) {
        this.delegationService = delegationService;
    }
    async getAllDelegation(pagination) {
        return await this.delegationService.getAllDelegation(pagination);
    }
    async getDelegationById(id) {
        return await this.delegationService.getDelegationById(id);
    }
    async createDelegation(delegationDTO) {
        return await this.delegationService.createDelegation(delegationDTO);
    }
    async updateDelegation(delegationDTO, id) {
        return await this.delegationService.updateDelegation(delegationDTO, id);
    }
    async deleteDelegation(id) {
        return await this.delegationService.deleteDelegation(parseInt(`${id}`));
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: [delegation_dto_1.DelegationDTO]
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], DelegationController.prototype, "getAllDelegation", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: delegation_dto_1.DelegationDTO
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de delegacion'
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DelegationController.prototype, "getDelegationById", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: delegation_dto_1.DelegationDTO
    }),
    (0, swagger_1.ApiBody)({
        type: delegation_dto_1.DelegationDTO
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delegation_dto_1.DelegationDTO]),
    __metadata("design:returntype", Promise)
], DelegationController.prototype, "createDelegation", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador delegacion'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: delegation_dto_1.DelegationDTO
    }),
    (0, swagger_1.ApiBody)({
        type: delegation_dto_1.DelegationDTO
    }),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delegation_dto_1.DelegationDTO, Number]),
    __metadata("design:returntype", Promise)
], DelegationController.prototype, "updateDelegation", null);
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
], DelegationController.prototype, "deleteDelegation", null);
DelegationController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('delegation'),
    (0, swagger_1.ApiTags)('delegation'),
    __metadata("design:paramtypes", [delegation_service_1.DelegationService])
], DelegationController);
exports.DelegationController = DelegationController;
//# sourceMappingURL=delegation.controller.js.map