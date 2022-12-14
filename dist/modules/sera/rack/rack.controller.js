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
exports.RackController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const rack_dto_1 = require("./dto/rack.dto");
const rack_service_1 = require("./rack.service");
let RackController = class RackController {
    constructor(rackService) {
        this.rackService = rackService;
    }
    async createRack(rackDto) {
        return await this.rackService.createRack(rackDto);
    }
    async getAllRacks(pagination) {
        return await this.rackService.getAllRacks(pagination);
    }
    async getRackById(id) {
        return await this.rackService.getRackById(id);
    }
    async updateRack(idToUpdate, data) {
        return await this.rackService.updateRack(idToUpdate, data);
    }
    async deleteRack(id) {
        return await this.rackService.deleteRack(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Guardar nuevo Rack ' }),
    (0, swagger_1.ApiBody)({
        type: rack_dto_1.RackDto,
        description: 'Información de la Rack  a guardar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Guarda Rack ',
        type: rack_dto_1.RackDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [rack_dto_1.RackDto]),
    __metadata("design:returntype", Promise)
], RackController.prototype, "createRack", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener lista de todas las Rack s' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de Rack s existenetes',
        type: [pagination_dto_1.PaginationDto],
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], RackController.prototype, "getAllRacks", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener Rack  por su id ej. 1' }),
    (0, swagger_1.ApiParam)({
        name: 'code',
        description: 'Identificador de la Rack '
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Rack  obtenida por su identificador',
        type: rack_dto_1.RackDto,
    }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RackController.prototype, "getRackById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Modificar Rack' }),
    (0, swagger_1.ApiParam)({
        name: 'idToUpdate',
        description: 'Identificador del Rack'
    }),
    (0, swagger_1.ApiBody)({
        type: rack_dto_1.RackDto,
        description: 'Objeto de la Rack  a modificar'
    }),
    (0, common_1.Put)(":idToUpdate"),
    __param(0, (0, common_1.Param)("idToUpdate")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, rack_dto_1.RackDto]),
    __metadata("design:returntype", Promise)
], RackController.prototype, "updateRack", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Borrar Rack  por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de la Rack ej. 1 '
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borrar Rack  por su identificador',
        type: rack_dto_1.RackDto,
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RackController.prototype, "deleteRack", null);
RackController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('rack'),
    (0, swagger_1.ApiTags)('rack'),
    __metadata("design:paramtypes", [rack_service_1.RackService])
], RackController);
exports.RackController = RackController;
//# sourceMappingURL=rack.controller.js.map