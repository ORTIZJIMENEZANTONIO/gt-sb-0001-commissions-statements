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
exports.CityService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let CityService = class CityService {
    constructor(cityProxy) {
        this.cityProxy = cityProxy;
    }
    async createCity(city) {
        const pattern = { cmd: 'createCity' };
        return await this.cityProxy.send(pattern, city);
    }
    async getAllCities(pagination) {
        const pattern = { cmd: 'getAllCities' };
        return await this.cityProxy.send(pattern, pagination);
    }
    async getCityByCode(id) {
        const pattern = { cmd: 'getCitytByCode' };
        return await this.cityProxy.send(pattern, id);
    }
    async updateCity(codeToUpdate, city) {
        const pattern = { cmd: 'updateCity' };
        const body = Object.assign({ codeToUpdate }, city);
        return await this.cityProxy.send(pattern, body);
    }
    async deleteCity(code) {
        const pattern = { cmd: 'deleteCity' };
        return await this.cityProxy.send(pattern, code);
    }
};
CityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SERVICE_CITY_SAE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], CityService);
exports.CityService = CityService;
//# sourceMappingURL=city.service.js.map