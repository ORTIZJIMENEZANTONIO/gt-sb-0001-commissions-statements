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
exports.SiseProcessController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const sise_process_service_1 = require("./sise-process.service");
const sise_process_dto_1 = require("./dto/sise-process.dto");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
let SiseProcessController = class SiseProcessController {
    constructor(siseProcessService) {
        this.siseProcessService = siseProcessService;
    }
    async createSiseProcess(siseProcessDto) {
        return await this.siseProcessService.createSiseProcess(siseProcessDto);
    }
    async getAllSiseProcess(pagination) {
        return await this.siseProcessService.getAllSiseProcess(pagination);
    }
    async getSiseProcessById(id) {
        return await this.siseProcessService.getSiseProcessById(id);
    }
    async updateSiseProcess(idToUpdate, data) {
        return await this.siseProcessService.updateSiseProcess(idToUpdate, data);
    }
    async deleteSiseProcess(id) {
        return await this.siseProcessService.deleteSiseProcess(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Guardar nuevo sise proceso' }),
    (0, swagger_1.ApiBody)({
        type: sise_process_dto_1.SiseProcessDto,
        description: 'Información del sise proceso a guardar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Guarda sise proceso',
        type: sise_process_dto_1.SiseProcessDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sise_process_dto_1.SiseProcessDto]),
    __metadata("design:returntype", Promise)
], SiseProcessController.prototype, "createSiseProcess", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener lista de todas las sise procesos' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de sise procesos existenetes',
        type: [pagination_dto_1.PaginationDto],
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], SiseProcessController.prototype, "getAllSiseProcess", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener sise proceso por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de la sise proceso ej. 1'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'sise proceso obtenido por su identificador',
        type: sise_process_dto_1.SiseProcessDto,
    }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SiseProcessController.prototype, "getSiseProcessById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Modificar sise proceso' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador delsise proceso ej. 1'
    }),
    (0, swagger_1.ApiBody)({
        type: sise_process_dto_1.SiseProcessDto,
        description: 'Objeto de la sise proceso a modificar'
    }),
    (0, common_1.Put)(":idToUpdate"),
    __param(0, (0, common_1.Param)("idToUpdate")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, sise_process_dto_1.SiseProcessDto]),
    __metadata("design:returntype", Promise)
], SiseProcessController.prototype, "updateSiseProcess", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Borrar sise proceso por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de la sise proceso ej. 1'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borrar sise proceso por su identificador',
        type: sise_process_dto_1.SiseProcessDto,
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SiseProcessController.prototype, "deleteSiseProcess", null);
SiseProcessController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('sise-process'),
    (0, swagger_1.ApiTags)('sise-process'),
    __metadata("design:paramtypes", [sise_process_service_1.SiseProcessService])
], SiseProcessController);
exports.SiseProcessController = SiseProcessController;
//# sourceMappingURL=sise-process.controller.js.map