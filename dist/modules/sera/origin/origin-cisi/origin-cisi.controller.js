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
exports.OriginCisiController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const origin_cisi_service_1 = require("./origin-cisi.service");
const origin_cisi_dto_1 = require("./dto/origin-cisi.dto");
const pagination_dto_1 = require("../../../../shared/dto/pagination.dto");
let OriginCisiController = class OriginCisiController {
    constructor(originCisiService) {
        this.originCisiService = originCisiService;
    }
    async createOrigin(originCisiDto) {
        return await this.originCisiService.createOriginCisi(originCisiDto);
    }
    async getAllOrigins(pagination) {
        return await this.originCisiService.getAllOriginCisis(pagination);
    }
    async getOriginCisiById(id) {
        return await this.originCisiService.getOriginCisiById(id);
    }
    async updateOrigin(idToUpdate, data) {
        return await this.originCisiService.updateOriginCisi(idToUpdate, data);
    }
    async deleteOrigin(id) {
        return await this.originCisiService.deleteOriginCisi(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Guardar nueva procedencia' }),
    (0, swagger_1.ApiBody)({
        type: origin_cisi_dto_1.OriginCisiDto,
        description: 'Informaci??n de la procedencia a guardar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Guarda procedencia',
        type: origin_cisi_dto_1.OriginCisiDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [origin_cisi_dto_1.OriginCisiDto]),
    __metadata("design:returntype", Promise)
], OriginCisiController.prototype, "createOrigin", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener lista de todas las procedencias' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de procedencias existenetes',
        type: [pagination_dto_1.PaginationDto],
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], OriginCisiController.prototype, "getAllOrigins", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener procedencia por su id ej. 1' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de la procedencia ej. 1'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'procedencia obtenida por su identificador',
        type: origin_cisi_dto_1.OriginCisiDto,
    }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OriginCisiController.prototype, "getOriginCisiById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Modificar procedencia' }),
    (0, swagger_1.ApiParam)({
        name: 'idToUpdate"',
        description: 'Identificador de la procedencia ej. 1'
    }),
    (0, swagger_1.ApiBody)({
        type: origin_cisi_dto_1.OriginCisiDto,
        description: 'Objeto de la procedencia a modificar'
    }),
    (0, common_1.Put)(":idToUpdate"),
    __param(0, (0, common_1.Param)("idToUpdate")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, origin_cisi_dto_1.OriginCisiDto]),
    __metadata("design:returntype", Promise)
], OriginCisiController.prototype, "updateOrigin", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Borrar procedencia por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de la procedencia ej. 1'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borrar procedencia por su identificador',
        type: origin_cisi_dto_1.OriginCisiDto,
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OriginCisiController.prototype, "deleteOrigin", null);
OriginCisiController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('origin-cisi'),
    (0, swagger_1.ApiTags)('origin-cisi'),
    __metadata("design:paramtypes", [origin_cisi_service_1.OriginCisiService])
], OriginCisiController);
exports.OriginCisiController = OriginCisiController;
//# sourceMappingURL=origin-cisi.controller.js.map