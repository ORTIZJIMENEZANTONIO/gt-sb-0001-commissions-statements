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
exports.CityController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const city_service_1 = require("./city.service");
const city_dto_1 = require("./dto/city.dto");
let CityController = class CityController {
    constructor(cityService) {
        this.cityService = cityService;
    }
    async createCity(CityDto) {
        const citytCreated = await this.cityService.createCity(CityDto);
        return citytCreated
            ? citytCreated
            : { statusCode: 503, message: "This City was not created", error: "Create Error" };
    }
    async getAllCities(pagination) {
        return await this.cityService.getAllCities(pagination);
    }
    async getCitytByCode(code) {
        const CitytFound = await this.cityService.getCityByCode(code);
        return CitytFound
            ? CitytFound
            : { statusCode: '404', message: 'City not found', error: "Not found" };
    }
    async updateCityt(codeToUpdate, data) {
        const citytUpdated = await this.cityService.updateCity(codeToUpdate, data);
        return citytUpdated
            ? citytUpdated
            : { statusCode: '404', message: 'City not found', error: "Not found" };
    }
    async deleteCityt(code) {
        return await this.cityService.deleteCity(code);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Guardar nuevo ciudad' }),
    (0, swagger_1.ApiBody)({
        type: city_dto_1.CityDto,
        description: 'Información del ciudad a guardar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Guarda ciudad',
        type: city_dto_1.CityDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [city_dto_1.CityDto]),
    __metadata("design:returntype", Promise)
], CityController.prototype, "createCity", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener lista de todos los ciudads' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de los ciudads existentes',
        type: city_dto_1.CityDto,
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], CityController.prototype, "getAllCities", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener ciudad por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'code',
        description: 'Identificador cadena del ciudad'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'ciudad obtenida por su identificador',
        type: city_dto_1.CityDto,
    }),
    (0, common_1.Get)(":code"),
    __param(0, (0, common_1.Param)("code")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CityController.prototype, "getCitytByCode", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Modificar ciudad' }),
    (0, swagger_1.ApiParam)({
        name: 'codeToUpdate',
        description: 'Identificador cadena de la ciudad'
    }),
    (0, swagger_1.ApiBody)({
        type: city_dto_1.CityDto,
        description: 'Objeto del ciudad a modificar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borrar ciudad por su identificador',
        type: city_dto_1.CityDto,
    }),
    (0, common_1.Put)(":codeToUpdate"),
    __param(0, (0, common_1.Param)("codeToUpdate")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, city_dto_1.CityDto]),
    __metadata("design:returntype", Promise)
], CityController.prototype, "updateCityt", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Borrar ciudad por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'code',
        description: 'Identificador cadena del ciudad a borrar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borrar ciudad por su identificador',
        type: city_dto_1.CityDto,
    }),
    (0, common_1.Delete)(":code"),
    __param(0, (0, common_1.Param)("code")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CityController.prototype, "deleteCityt", null);
CityController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('city'),
    (0, swagger_1.ApiTags)('city'),
    __metadata("design:paramtypes", [city_service_1.CityService])
], CityController);
exports.CityController = CityController;
//# sourceMappingURL=city.controller.js.map