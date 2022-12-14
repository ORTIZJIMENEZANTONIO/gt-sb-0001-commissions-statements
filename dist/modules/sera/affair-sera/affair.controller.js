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
exports.AffairController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const affair_service_1 = require("./affair.service");
const affair_dto_1 = require("./dto/affair.dto");
let AffairController = class AffairController {
    constructor(affairService) {
        this.affairService = affairService;
    }
    async createAffair(affairDto) {
        return await this.affairService.createAffair(affairDto);
    }
    async getAllAffairs(pagination) {
        return await this.affairService.getAllAffairs(pagination);
    }
    async getAffairById(id) {
        return await this.affairService.getAffairById(id);
    }
    async updateAffair(idToUpdate, data) {
        return await this.affairService.updateAffair(idToUpdate, data);
    }
    async deleteAffair(id) {
        return await this.affairService.deleteAffair(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Guardar tipo de asunto' }),
    (0, swagger_1.ApiBody)({
        type: affair_dto_1.AffairDto,
        description: 'Información del tipo de asunto a guardar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Guarda tipo de asunto',
        type: affair_dto_1.AffairDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [affair_dto_1.AffairDto]),
    __metadata("design:returntype", Promise)
], AffairController.prototype, "createAffair", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener lista de todos los tipos de asuntos' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de los tipos de asuntos existentes',
        type: affair_dto_1.AffairDto,
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], AffairController.prototype, "getAllAffairs", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener tipo de asunto por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador del tipo de asunto'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'tipo de asunto obtenida por su identificador',
        type: affair_dto_1.AffairDto,
    }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AffairController.prototype, "getAffairById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Modificar tipo de asunto' }),
    (0, swagger_1.ApiParam)({
        name: 'idToUpdate',
        description: 'Identificador numérico del tipo de asunto'
    }),
    (0, swagger_1.ApiBody)({
        type: affair_dto_1.AffairDto,
        description: 'Objeto del tipo de asunto a modificar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borrar tipo de asunto por su identificador',
        type: affair_dto_1.AffairDto,
    }),
    (0, common_1.Put)(":idToUpdate"),
    __param(0, (0, common_1.Param)("idToUpdate")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, affair_dto_1.AffairDto]),
    __metadata("design:returntype", Promise)
], AffairController.prototype, "updateAffair", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Borrar tipo de asunto por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador cadena del tipo de asunto a borrar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borrar tipo de asunto por su identificador',
        type: affair_dto_1.AffairDto,
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AffairController.prototype, "deleteAffair", null);
AffairController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('affair'),
    (0, swagger_1.ApiTags)('affair'),
    __metadata("design:paramtypes", [affair_service_1.AffairService])
], AffairController);
exports.AffairController = AffairController;
//# sourceMappingURL=affair.controller.js.map