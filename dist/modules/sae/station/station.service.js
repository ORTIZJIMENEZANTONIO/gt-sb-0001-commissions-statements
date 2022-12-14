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
exports.StationService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let StationService = class StationService {
    constructor(stationProxy) {
        this.stationProxy = stationProxy;
    }
    createStation(stationDto) {
        const pattern = { cmd: 'createStation' };
        return this.stationProxy.send(pattern, stationDto);
    }
    async getAllStations(pagination) {
        const pattern = { cmd: 'getAllStations' };
        return await this.stationProxy.send(pattern, pagination);
    }
    async getStationById(id) {
        const pattern = { cmd: 'getStationByCode' };
        return await this.stationProxy.send(pattern, id);
    }
    async updateStation(stationIdToUpdate, stationData) {
        const pattern = { cmd: 'updateStation' };
        const body = Object.assign({ stationIdToUpdate }, stationData);
        return await this.stationProxy.send(pattern, body);
    }
    async deleteStation(id) {
        const pattern = { cmd: 'deleteStation' };
        return await this.stationProxy.send(pattern, id);
    }
};
StationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SERVICE_STATION')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], StationService);
exports.StationService = StationService;
//# sourceMappingURL=station.service.js.map