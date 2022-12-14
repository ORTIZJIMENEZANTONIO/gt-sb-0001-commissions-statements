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
exports.CoordinatingAuthorityController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const coordinating_authority_service_1 = require("./coordinating-authority.service");
const coordinating_authority_dto_1 = require("./dto/coordinating-authority.dto");
let CoordinatingAuthorityController = class CoordinatingAuthorityController {
    constructor(coordinatingAuthorityService) {
        this.coordinatingAuthorityService = coordinatingAuthorityService;
    }
    async createcoordinatingAuthority(coordinatingAuthorityDto) {
        return await this.coordinatingAuthorityService.createCoordinatingAuthority(coordinatingAuthorityDto);
    }
    async getAllCoordinatingAuthorities(pagination) {
        return await this.coordinatingAuthorityService.getAllCoordinatingAuthorities(pagination);
    }
    async getCoordinatingAuthorityById(id) {
        return await this.coordinatingAuthorityService.getCoordinatingAuthorityById(id);
    }
    async updateCoordinatingAuthority(idToUpdate, data) {
        return await this.coordinatingAuthorityService.updateCoordinatingAuthority(idToUpdate, data);
    }
    async deleteCoordinatingAuthority(id) {
        return await this.coordinatingAuthorityService.deleteCoordinatingAuthority(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Guardar nueva autoridad de coordinacion autoridad de coordinacion' }),
    (0, swagger_1.ApiBody)({
        type: coordinating_authority_dto_1.CoordinatingAuthorityDto,
        description: 'Información de la autoridad de coordinacion a guardar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Guarda autoridad de coordinacion',
        type: coordinating_authority_dto_1.CoordinatingAuthorityDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [coordinating_authority_dto_1.CoordinatingAuthorityDto]),
    __metadata("design:returntype", Promise)
], CoordinatingAuthorityController.prototype, "createcoordinatingAuthority", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener lista de todos las autoridad de coordinacions' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de las autoridad de coordinacions existentes',
        type: coordinating_authority_dto_1.CoordinatingAuthorityDto,
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], CoordinatingAuthorityController.prototype, "getAllCoordinatingAuthorities", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener autoridad de coordinacion por su id ej.1' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador del autoridad de coordinacion'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'autoridad de coordinacion obtenida por su identificador',
        type: coordinating_authority_dto_1.CoordinatingAuthorityDto,
    }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CoordinatingAuthorityController.prototype, "getCoordinatingAuthorityById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Modificar autoridad de coordinacion' }),
    (0, swagger_1.ApiParam)({
        name: 'idToUpdate',
        description: 'Identificador numérico del autoridad de coordinacion ej. 1'
    }),
    (0, swagger_1.ApiBody)({
        type: coordinating_authority_dto_1.CoordinatingAuthorityDto,
        description: 'Objeto del autoridad de coordinacion a modificar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borrar autoridad de coordinacion por su identificador',
        type: coordinating_authority_dto_1.CoordinatingAuthorityDto,
    }),
    (0, common_1.Put)(":idToUpdate"),
    __param(0, (0, common_1.Param)("idToUpdate")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, coordinating_authority_dto_1.CoordinatingAuthorityDto]),
    __metadata("design:returntype", Promise)
], CoordinatingAuthorityController.prototype, "updateCoordinatingAuthority", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Borrar autoridad de coordinacion por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador cadena del autoridad de coordinacion a borrar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borrar autoridad de coordinacion por su identificador',
        type: coordinating_authority_dto_1.CoordinatingAuthorityDto,
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CoordinatingAuthorityController.prototype, "deleteCoordinatingAuthority", null);
CoordinatingAuthorityController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('coordinating-authority'),
    (0, swagger_1.ApiTags)('coordinating-authority'),
    __metadata("design:paramtypes", [coordinating_authority_service_1.CoordinatingAuthorityService])
], CoordinatingAuthorityController);
exports.CoordinatingAuthorityController = CoordinatingAuthorityController;
//# sourceMappingURL=coordinating-authority.controller.js.map