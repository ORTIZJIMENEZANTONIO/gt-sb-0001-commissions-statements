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
exports.AuthorityController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const authority_service_1 = require("./authority.service");
const authority_dto_1 = require("./dto/authority.dto");
let AuthorityController = class AuthorityController {
    constructor(authorityService) {
        this.authorityService = authorityService;
    }
    async createauthority(authorityDto) {
        return await this.authorityService.createAuthority(authorityDto);
    }
    async getAllAuthorities(pagination) {
        return await this.authorityService.getAllAuthorities(pagination);
    }
    async getAuthorityById(id) {
        return await this.authorityService.getAuthorityById(id);
    }
    async updateAuthority(idToUpdate, data) {
        return await this.authorityService.updateAuthority(idToUpdate, data);
    }
    async deleteauthority(id) {
        return await this.authorityService.deleteAuthority(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Guardar nueva autoridad' }),
    (0, swagger_1.ApiBody)({
        type: authority_dto_1.AuthorityDto,
        description: 'Información del autoridad a guardar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Guarda autoridad',
        type: authority_dto_1.AuthorityDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [authority_dto_1.AuthorityDto]),
    __metadata("design:returntype", Promise)
], AuthorityController.prototype, "createauthority", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener lista de todos los autoridads' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de los autoridads existentes',
        type: authority_dto_1.AuthorityDto,
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], AuthorityController.prototype, "getAllAuthorities", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener autoridad por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador del autoridad'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'autoridad obtenida por su identificador',
        type: authority_dto_1.AuthorityDto,
    }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AuthorityController.prototype, "getAuthorityById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Modificar autoridad' }),
    (0, swagger_1.ApiParam)({
        name: 'idToUpdate',
        description: 'Identificador numérico del autoridad'
    }),
    (0, swagger_1.ApiBody)({
        type: authority_dto_1.AuthorityDto,
        description: 'Objeto del autoridad a modificar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borrar autoridad por su identificador',
        type: authority_dto_1.AuthorityDto,
    }),
    (0, common_1.Put)(":idToUpdate"),
    __param(0, (0, common_1.Param)("idToUpdate")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, authority_dto_1.AuthorityDto]),
    __metadata("design:returntype", Promise)
], AuthorityController.prototype, "updateAuthority", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Borrar autoridad por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador cadena del autoridad a borrar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borrar autoridad por su identificador',
        type: authority_dto_1.AuthorityDto,
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AuthorityController.prototype, "deleteauthority", null);
AuthorityController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('authority'),
    (0, swagger_1.ApiTags)('authority'),
    __metadata("design:paramtypes", [authority_service_1.AuthorityService])
], AuthorityController);
exports.AuthorityController = AuthorityController;
//# sourceMappingURL=authority.controller.js.map