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
exports.HolidayController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const holiday_service_1 = require("./holiday.service");
const holiday_dto_1 = require("./dto/holiday.dto");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
let HolidayController = class HolidayController {
    constructor(holidayService) {
        this.holidayService = holidayService;
    }
    async createHoliday(holidayDto) {
        return await this.holidayService.createHoliday(holidayDto);
    }
    async getAllHolidays(pagination) {
        return await this.holidayService.getAllHolidays(pagination);
    }
    async getHolidayById(id) {
        return await this.holidayService.getHolidayById(id);
    }
    async updateHoliday(id, data) {
        return await this.holidayService.updateHoliday(id, data);
    }
    async deleteHoliday(id) {
        return await this.holidayService.deleteHoliday(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Guardar nuevo día festivo' }),
    (0, swagger_1.ApiBody)({
        type: holiday_dto_1.HolidayDto,
        description: 'Información del día festivo a guardar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Guarda evento en el repositorio de días festivos',
        type: holiday_dto_1.HolidayDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [holiday_dto_1.HolidayDto]),
    __metadata("design:returntype", Promise)
], HolidayController.prototype, "createHoliday", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener lista de todos los días festivos' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de días festivoss existenetes',
        type: holiday_dto_1.HolidayDto,
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], HolidayController.prototype, "getAllHolidays", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener día festivo por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador numérico del día festivos'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Obtener día festivo por su identificador',
        type: holiday_dto_1.HolidayDto,
    }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], HolidayController.prototype, "getHolidayById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Modificar días festivos' }),
    (0, swagger_1.ApiParam)({
        name: "id",
        description: "Identificador numérico del día festivo"
    }),
    (0, swagger_1.ApiBody)({
        type: holiday_dto_1.HolidayDto,
        description: 'Objeto de la días festivos modificar'
    }),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, holiday_dto_1.HolidayDto]),
    __metadata("design:returntype", Promise)
], HolidayController.prototype, "updateHoliday", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Borrar días festivos por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador numérico de la días festivos a borrar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borró Día festivo por su identificador',
        type: holiday_dto_1.HolidayDto,
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], HolidayController.prototype, "deleteHoliday", null);
HolidayController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('holiday'),
    (0, swagger_1.ApiTags)('holiday'),
    __metadata("design:paramtypes", [holiday_service_1.HolidayService])
], HolidayController);
exports.HolidayController = HolidayController;
//# sourceMappingURL=holiday.controller.js.map