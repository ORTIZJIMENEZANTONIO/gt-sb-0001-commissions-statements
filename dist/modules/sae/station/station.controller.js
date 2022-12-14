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
exports.StationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const station_service_1 = require("./station.service");
const station_dto_1 = require("./dto/station.dto");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
let StationController = class StationController {
    constructor(stationService) {
        this.stationService = stationService;
    }
    async createStation(stationDto) {
        return await this.stationService.createStation(stationDto);
    }
    async getAllStations(pagination) {
        return await this.stationService.getAllStations(pagination);
    }
    async getStationById(id) {
        return await this.stationService.getStationById(id);
    }
    async updateStation(id, stationData) {
        return await this.stationService.updateStation(id, stationData);
    }
    async deleteStation(id) {
        return await this.stationService.deleteStation(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Guardar nueva emisora' }),
    (0, swagger_1.ApiBody)({
        type: station_dto_1.StationDto,
        description: 'Información de la emisora a guardar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Guarda emisora',
        type: station_dto_1.StationDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [station_dto_1.StationDto]),
    __metadata("design:returntype", Promise)
], StationController.prototype, "createStation", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener lista de todas los emisora' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de las emisoras existentes',
        type: station_dto_1.StationDto,
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], StationController.prototype, "getAllStations", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener emisora por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de la emisora'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'emisora obtenida por su identificador',
        type: station_dto_1.StationDto,
    }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StationController.prototype, "getStationById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Modificar emisora' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador numérico de la emisora'
    }),
    (0, swagger_1.ApiBody)({
        type: station_dto_1.StationDto,
        description: 'Objeto de la emisora a modificar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Objeto de la emisora modificado por su identificador',
        type: station_dto_1.StationDto,
    }),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, station_dto_1.StationDto]),
    __metadata("design:returntype", Promise)
], StationController.prototype, "updateStation", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Borrar emisora por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador cadena de la emisora a borrar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borrar emisora por su identificador',
        type: station_dto_1.StationDto,
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StationController.prototype, "deleteStation", null);
StationController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('station'),
    (0, swagger_1.ApiTags)('station'),
    __metadata("design:paramtypes", [station_service_1.StationService])
], StationController);
exports.StationController = StationController;
//# sourceMappingURL=station.controller.js.map