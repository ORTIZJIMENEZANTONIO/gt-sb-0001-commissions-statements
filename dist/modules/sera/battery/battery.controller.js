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
exports.BatteryController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const battery_service_1 = require("./battery.service");
const battery_dto_1 = require("./dto/battery.dto");
let BatteryController = class BatteryController {
    constructor(batteryService) {
        this.batteryService = batteryService;
    }
    async createBattery(batteryDto) {
        return await this.batteryService.createBattery(batteryDto);
    }
    async getAllBatteries(pagination) {
        return await this.batteryService.getAllBatteries(pagination);
    }
    async getBatteryById(id) {
        return await this.batteryService.getBatteryById(id);
    }
    async updateBattery(idToUpdate, data) {
        return await this.batteryService.updateBattery(idToUpdate, data);
    }
    async deleteBattery(id) {
        return await this.batteryService.deleteBattery(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Guardar nueva bateria' }),
    (0, swagger_1.ApiBody)({
        type: battery_dto_1.BatteryDto,
        description: 'Información de la bateria a guardar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Guarda bateria',
        type: battery_dto_1.BatteryDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [battery_dto_1.BatteryDto]),
    __metadata("design:returntype", Promise)
], BatteryController.prototype, "createBattery", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener lista de todos las baterias' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de las baterias existentes',
        type: battery_dto_1.BatteryDto,
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], BatteryController.prototype, "getAllBatteries", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener bateria por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de la bateria'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'bateria obtenida por su identificador',
        type: battery_dto_1.BatteryDto,
    }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BatteryController.prototype, "getBatteryById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Modificar bateria' }),
    (0, swagger_1.ApiParam)({
        name: 'idToUpdate',
        description: 'Identificador numérico de la bateria ej. 1'
    }),
    (0, swagger_1.ApiBody)({
        type: battery_dto_1.BatteryDto,
        description: 'Objeto de la bateria a modificar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borrar bateria por su identificador',
        type: battery_dto_1.BatteryDto,
    }),
    (0, common_1.Put)(":idToUpdate"),
    __param(0, (0, common_1.Param)("idToUpdate")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, battery_dto_1.BatteryDto]),
    __metadata("design:returntype", Promise)
], BatteryController.prototype, "updateBattery", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Borrar bateria por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de la bateria a borrar ej.1'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borrar bateria por su identificador',
        type: battery_dto_1.BatteryDto,
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BatteryController.prototype, "deleteBattery", null);
BatteryController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('battery'),
    (0, swagger_1.ApiTags)('battery'),
    __metadata("design:paramtypes", [battery_service_1.BatteryService])
], BatteryController);
exports.BatteryController = BatteryController;
//# sourceMappingURL=battery.controller.js.map