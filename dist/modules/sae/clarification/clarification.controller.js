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
exports.ClarificationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const clarification_service_1 = require("./clarification.service");
const clarification_dto_1 = require("./dto/clarification.dto");
let ClarificationController = class ClarificationController {
    constructor(clarificationService) {
        this.clarificationService = clarificationService;
    }
    async createClarification(clarificationDto) {
        return await this.clarificationService.createClarification(clarificationDto);
    }
    async getAllClarifications(pagination) {
        return await this.clarificationService.getAllClarifications(pagination);
    }
    async getClarificationById(id) {
    }
    async updateClarification(idToUpdate, data) {
        return await this.clarificationService.updateClarification(idToUpdate, data);
    }
    async deleteClarification(id) {
        return await this.clarificationService.deleteClarification(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Guardar nueva aclaración' }),
    (0, swagger_1.ApiBody)({
        type: clarification_dto_1.ClarificationDto,
        description: 'Información de la aclaración a guardar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Guarda aclaración',
        type: clarification_dto_1.ClarificationDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [clarification_dto_1.ClarificationDto]),
    __metadata("design:returntype", Promise)
], ClarificationController.prototype, "createClarification", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener lista de todas las aclaracións' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de aclaraciónes existenetes',
        type: [pagination_dto_1.PaginationDto],
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], ClarificationController.prototype, "getAllClarifications", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener aclaración por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de la aclaración'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'aclaración obtenida por su identificador',
        type: clarification_dto_1.ClarificationDto,
    }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ClarificationController.prototype, "getClarificationById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Modificar aclaración' }),
    (0, swagger_1.ApiParam)({
        name: 'idToUpdate',
        description: 'Identificador numérico de la aclaración'
    }),
    (0, swagger_1.ApiBody)({
        type: clarification_dto_1.ClarificationDto,
        description: 'Objeto de la aclaración a modificar'
    }),
    (0, common_1.Put)(":idToUpdate"),
    __param(0, (0, common_1.Param)("idToUpdate")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, clarification_dto_1.ClarificationDto]),
    __metadata("design:returntype", Promise)
], ClarificationController.prototype, "updateClarification", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Borrar aclaración por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de la aclaración a borrar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borrar aclaración por su identificador',
        type: clarification_dto_1.ClarificationDto,
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ClarificationController.prototype, "deleteClarification", null);
ClarificationController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('clarification'),
    (0, swagger_1.ApiTags)('clarification'),
    __metadata("design:paramtypes", [clarification_service_1.ClarificationService])
], ClarificationController);
exports.ClarificationController = ClarificationController;
//# sourceMappingURL=clarification.controller.js.map