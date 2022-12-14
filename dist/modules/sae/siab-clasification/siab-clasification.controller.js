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
exports.SiabClasificationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const siab_clasification_dto_1 = require("./dto/siab-clasification.dto");
const siab_clasification_service_1 = require("./siab-clasification.service");
let SiabClasificationController = class SiabClasificationController {
    constructor(siabClasificationService) {
        this.siabClasificationService = siabClasificationService;
    }
    async createSiabClasification(siabClasificationDto) {
        return await this.siabClasificationService.createSiabClasification(siabClasificationDto);
    }
    async getAllSiabClasifications(pagination) {
        return await this.siabClasificationService.getAllSiabClasifications(pagination);
    }
    async getSiabClasificationById(id) {
        return await this.siabClasificationService.getSiabClasificationById(id);
    }
    async updateSiabClasification(idToUpdate, data) {
        return await this.siabClasificationService.updateSiabClasification(idToUpdate, data);
    }
    async deleteSiabClasification(id) {
        return await this.siabClasificationService.deleteSiabClasification(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Guardar nueva clasificación siab' }),
    (0, swagger_1.ApiBody)({
        type: siab_clasification_dto_1.SiabClasificationDto,
        description: 'Información de la clasificación siab a guardar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Guarda clasificación siab',
        type: siab_clasification_dto_1.SiabClasificationDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [siab_clasification_dto_1.SiabClasificationDto]),
    __metadata("design:returntype", Promise)
], SiabClasificationController.prototype, "createSiabClasification", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener lista de todas las clasificación siabs' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de clasificación siabs existenetes',
        type: siab_clasification_dto_1.SiabClasificationDto,
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], SiabClasificationController.prototype, "getAllSiabClasifications", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener clasificación siab por su id ej. 1' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de la clasificación siab'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'clasificación siab obtenida por su identificador',
        type: siab_clasification_dto_1.SiabClasificationDto,
    }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SiabClasificationController.prototype, "getSiabClasificationById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Modificar clasificación siab' }),
    (0, swagger_1.ApiParam)({
        name: 'idToUpdate',
        description: 'Identificador numérico de la clasificación siab'
    }),
    (0, swagger_1.ApiBody)({
        type: siab_clasification_dto_1.SiabClasificationDto,
        description: 'Objeto de la clasificación siab a modificar'
    }),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, siab_clasification_dto_1.SiabClasificationDto]),
    __metadata("design:returntype", Promise)
], SiabClasificationController.prototype, "updateSiabClasification", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Borrar clasificación siab por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de la clasificación siab a borrar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borrar clasificación siab por su identificador',
        type: siab_clasification_dto_1.SiabClasificationDto,
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SiabClasificationController.prototype, "deleteSiabClasification", null);
SiabClasificationController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('siab-clasification'),
    (0, swagger_1.ApiTags)('siab-clasification'),
    __metadata("design:paramtypes", [siab_clasification_service_1.SiabClasificationService])
], SiabClasificationController);
exports.SiabClasificationController = SiabClasificationController;
//# sourceMappingURL=siab-clasification.controller.js.map