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
exports.SafeController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const safe_service_1 = require("./safe.service");
const safe_dto_1 = require("./dto/safe.dto");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
let SafeController = class SafeController {
    constructor(safeService) {
        this.safeService = safeService;
    }
    async createSafe(safeDto) {
        return await this.safeService.createSafe(safeDto);
    }
    async getAllSafes(pagination) {
        return await this.safeService.getAllSafes(pagination);
    }
    async getsafeById(id) {
        return await this.safeService.getSafeById(id);
    }
    async updatesafe(idToUpdate, data) {
        return await this.safeService.updateSafe(idToUpdate, data);
    }
    async deleteSafe(id) {
        return await this.safeService.deleteSafe(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Guardar nueva bóveda' }),
    (0, swagger_1.ApiBody)({
        type: safe_dto_1.SafeDto,
        description: 'Información de la bóveda a guardar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Guarda bóveda',
        type: safe_dto_1.SafeDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [safe_dto_1.SafeDto]),
    __metadata("design:returntype", Promise)
], SafeController.prototype, "createSafe", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener lista de todas las bóvedas' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de bóvedas existenetes',
        type: safe_dto_1.SafeDto,
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], SafeController.prototype, "getAllSafes", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener bóveda por su id ej. 1' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de la bóveda'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'bóveda obtenida por su identificador',
        type: safe_dto_1.SafeDto,
    }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SafeController.prototype, "getsafeById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Modificar bóveda' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador numérico de la bóveda'
    }),
    (0, swagger_1.ApiBody)({
        type: safe_dto_1.SafeDto,
        description: 'Objeto de la bóveda a modificar'
    }),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, safe_dto_1.SafeDto]),
    __metadata("design:returntype", Promise)
], SafeController.prototype, "updatesafe", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Borrar bóveda por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de la bóveda a borrar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borrar bóveda por su identificador',
        type: safe_dto_1.SafeDto,
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SafeController.prototype, "deleteSafe", null);
SafeController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('safe'),
    (0, swagger_1.ApiTags)('safe'),
    __metadata("design:paramtypes", [safe_service_1.SafeService])
], SafeController);
exports.SafeController = SafeController;
//# sourceMappingURL=safe.controller.js.map