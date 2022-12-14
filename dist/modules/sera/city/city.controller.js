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
    async getAllCity(pagination) {
        return await this.cityService.getAllCity(pagination);
    }
    async getCityById(id) {
        return await this.cityService.getCityById(id);
    }
    async createCity(cityDTO) {
        return await this.cityService.createCity(cityDTO);
    }
    async updateCity(cityDTO, id) {
        return await this.cityService.updateCity(cityDTO, id);
    }
    async deleteCity(id) {
        return await this.cityService.deleteCity(parseInt(`${id}`));
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: [city_dto_1.CityDTO]
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], CityController.prototype, "getAllCity", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: city_dto_1.CityDTO
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de ciudad'
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CityController.prototype, "getCityById", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: city_dto_1.CityDTO
    }),
    (0, swagger_1.ApiBody)({
        type: city_dto_1.CityDTO
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [city_dto_1.CityDTO]),
    __metadata("design:returntype", Promise)
], CityController.prototype, "createCity", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de ciudad'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: city_dto_1.CityDTO
    }),
    (0, swagger_1.ApiBody)({
        type: city_dto_1.CityDTO
    }),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [city_dto_1.CityDTO, Number]),
    __metadata("design:returntype", Promise)
], CityController.prototype, "updateCity", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador cve de casillero'
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CityController.prototype, "deleteCity", null);
CityController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('city-sera'),
    (0, swagger_1.ApiTags)('city-sera'),
    __metadata("design:paramtypes", [city_service_1.CityService])
], CityController);
exports.CityController = CityController;
//# sourceMappingURL=city.controller.js.map