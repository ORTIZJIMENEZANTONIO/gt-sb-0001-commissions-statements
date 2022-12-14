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
exports.DelegationStateController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const delegation_state_service_1 = require("./delegation-state.service");
const create_delegation_state_dto_1 = require("./dto/create-delegation-state.dto");
let DelegationStateController = class DelegationStateController {
    constructor(delegationStateService) {
        this.delegationStateService = delegationStateService;
    }
    async createDelegationState(delegationStateDto) {
        return await this.delegationStateService.createDelegationState(delegationStateDto);
    }
    async getAllDelegationStates(pagination) {
        return await this.delegationStateService.getAllDelegationStates(pagination);
    }
    async getDelegationStateById(id) {
        return await this.delegationStateService.getDelegationStateById(id);
    }
    async updateDelegationState(id, data) {
        return await this.delegationStateService.updateDelegationState(id, data);
    }
    async deleteDelegationState(id) {
        return await this.delegationStateService.deleteDelegationState(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Guardar nueva delegacion estado' }),
    (0, swagger_1.ApiBody)({
        type: create_delegation_state_dto_1.DelegationStateDto,
        description: 'Información de la delegacion estado a guardar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Guarda nueva delegacion estado',
        type: create_delegation_state_dto_1.DelegationStateDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_delegation_state_dto_1.DelegationStateDto]),
    __metadata("design:returntype", Promise)
], DelegationStateController.prototype, "createDelegationState", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener lista de todas las delegacion estado' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de delegacion estado existenetes',
        type: create_delegation_state_dto_1.DelegationStateDto,
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], DelegationStateController.prototype, "getAllDelegationStates", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener delegacion estado por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de la delegacion estado'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Obtener delegacion estado por su identificador',
        type: create_delegation_state_dto_1.DelegationStateDto,
    }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DelegationStateController.prototype, "getDelegationStateById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Modificar delegacion estado' }),
    (0, swagger_1.ApiParam)({
        name: "id",
        description: "identificador numérico de la delegacion estado a modificar"
    }),
    (0, swagger_1.ApiBody)({
        type: create_delegation_state_dto_1.DelegationStateDto,
        description: 'Objeto de la delegacion estado a modificar'
    }),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_delegation_state_dto_1.DelegationStateDto]),
    __metadata("design:returntype", Promise)
], DelegationStateController.prototype, "updateDelegationState", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Borrar delegacion estado por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de la delegacion estado a borrar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borrar delegacion estado por su identificador',
        type: create_delegation_state_dto_1.DelegationStateDto,
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DelegationStateController.prototype, "deleteDelegationState", null);
DelegationStateController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('delegation-state'),
    (0, swagger_1.ApiTags)('delegation-state'),
    __metadata("design:paramtypes", [delegation_state_service_1.DelegationStateService])
], DelegationStateController);
exports.DelegationStateController = DelegationStateController;
//# sourceMappingURL=delegation-state.controller.js.map