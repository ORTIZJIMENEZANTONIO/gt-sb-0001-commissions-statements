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
exports.HolidayService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let HolidayService = class HolidayService {
    constructor(holidayProxy) {
        this.holidayProxy = holidayProxy;
    }
    async createHoliday(holidayDto) {
        const pattern = { cmd: 'createHoliday' };
        return await this.holidayProxy.send(pattern, holidayDto);
    }
    async getAllHolidays(pagination) {
        const pattern = { cmd: 'getAllHolidays' };
        return await this.holidayProxy.send(pattern, pagination);
    }
    async getHolidayById(id) {
        const pattern = { cmd: 'getHolidayById' };
        return await this.holidayProxy.send(pattern, id);
    }
    async updateHoliday(idToUpdate, data) {
        const pattern = { cmd: 'updateHoliday' };
        const body = Object.assign({ idToUpdate }, data);
        return await this.holidayProxy.send(pattern, body);
    }
    async deleteHoliday(id) {
        const pattern = { cmd: 'deleteHoliday' };
        return await this.holidayProxy.send(pattern, id);
    }
};
HolidayService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SERVICE_HOLIDAY')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], HolidayService);
exports.HolidayService = HolidayService;
//# sourceMappingURL=holiday.service.js.map