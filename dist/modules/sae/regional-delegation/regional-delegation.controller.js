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
exports.RegionalDelegationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const regional_delegation_service_1 = require("./regional-delegation.service");
const regional_delegation_dto_1 = require("./dto/regional-delegation.dto");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
let RegionalDelegationController = class RegionalDelegationController {
    constructor(regionalDelegationService) {
        this.regionalDelegationService = regionalDelegationService;
    }
    async createRegionalDelegation(regionalDelegationDto) {
        return await this.regionalDelegationService.createRegionalDelegation(regionalDelegationDto);
    }
    async getAllRegionalDelegations(pagination) {
        return await this.regionalDelegationService.getAllRegionalDelegations(pagination);
    }
    async getRegionalDelegationById(id) {
        return await this.regionalDelegationService.getRegionalDelegationById(id);
    }
    async updateRegionalDelegation(id, regionalData) {
        return await this.regionalDelegationService.updateRegionalDelegation(id, regionalData);
    }
    async deleteRegionalDelegation(id) {
        return await this.regionalDelegationService.deleteRegionalDelegation(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Guardar nueva delegacion regionale' }),
    (0, swagger_1.ApiBody)({
        type: regional_delegation_dto_1.RegionalDelegationDto,
        description: 'Información de la delegacion regional a guardar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Guarda evento en el repositorio de delegaciones regionales',
        type: regional_delegation_dto_1.RegionalDelegationDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [regional_delegation_dto_1.RegionalDelegationDto]),
    __metadata("design:returntype", Promise)
], RegionalDelegationController.prototype, "createRegionalDelegation", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener lista de todas las delegaciones regionales' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de delegaciones regionaless existenetes',
        type: regional_delegation_dto_1.RegionalDelegationDto,
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], RegionalDelegationController.prototype, "getAllRegionalDelegations", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener delegacion regional por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de la delegación regional'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: ' delegación regional obtenida por su identificador',
        type: regional_delegation_dto_1.RegionalDelegationDto,
    }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RegionalDelegationController.prototype, "getRegionalDelegationById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Modificar delegaciones regionales' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador numérico de la delegacion regional'
    }),
    (0, swagger_1.ApiBody)({
        type: regional_delegation_dto_1.RegionalDelegationDto,
        description: 'Objeto de la delegacion regional a modificar'
    }),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, regional_delegation_dto_1.RegionalDelegationDto]),
    __metadata("design:returntype", Promise)
], RegionalDelegationController.prototype, "updateRegionalDelegation", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Borrar delegacion regional por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de la delegacion regional a borrar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borrar delegacion regional por su identificador',
        type: regional_delegation_dto_1.RegionalDelegationDto,
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RegionalDelegationController.prototype, "deleteRegionalDelegation", null);
RegionalDelegationController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('regional-delegation'),
    (0, swagger_1.ApiTags)('regional-delegation'),
    __metadata("design:paramtypes", [regional_delegation_service_1.RegionalDelegationService])
], RegionalDelegationController);
exports.RegionalDelegationController = RegionalDelegationController;
//# sourceMappingURL=regional-delegation.controller.js.map