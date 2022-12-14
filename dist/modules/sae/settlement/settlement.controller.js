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
exports.SettlementController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const settlement_service_1 = require("./settlement.service");
const settlement_dto_1 = require("./dto/settlement.dto");
let SettlementController = class SettlementController {
    constructor(settlementService) {
        this.settlementService = settlementService;
    }
    async createSettlement(settlementDto) {
        return await this.settlementService.createSettlement(settlementDto);
    }
    async getAllSettlements(pagination) {
        return await this.settlementService.getAllSettlements(pagination);
    }
    async getSettlementByCode(code) {
        const settlementFound = await this.settlementService.getSettlementByCode(code);
        return settlementFound
            ? settlementFound
            : { statusCode: '404', message: 'Settlement not found', error: "Not found" };
    }
    async updateSettlement(codeToUpdate, data) {
        return await this.settlementService.updateSettlement(codeToUpdate, data);
    }
    async deleteSettlement(code) {
        return await this.settlementService.deleteSettlement(code);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Guardar nuevo asentamiento' }),
    (0, swagger_1.ApiBody)({
        type: settlement_dto_1.SettlementDto,
        description: 'Información del asentamiento a guardar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Guarda asentamiento',
        type: settlement_dto_1.SettlementDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [settlement_dto_1.SettlementDto]),
    __metadata("design:returntype", Promise)
], SettlementController.prototype, "createSettlement", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener lista de todos los asentamientos' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de los asentamientos existentes',
        type: settlement_dto_1.SettlementDto,
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], SettlementController.prototype, "getAllSettlements", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener asentamiento por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'code',
        description: 'Identificador del asentamiento'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'asentamiento obtenida por su identificador',
        type: settlement_dto_1.SettlementDto,
    }),
    (0, common_1.Get)(":code"),
    __param(0, (0, common_1.Param)("code")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SettlementController.prototype, "getSettlementByCode", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Modificar asentamiento' }),
    (0, swagger_1.ApiParam)({
        name: 'codeToUpdate',
        description: 'Identificador numérico del asentamiento'
    }),
    (0, swagger_1.ApiBody)({
        type: settlement_dto_1.SettlementDto,
        description: 'Objeto del asentamiento a modificar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borrar asentamiento por su identificador',
        type: settlement_dto_1.SettlementDto,
    }),
    (0, common_1.Put)(":codeToUpdate"),
    __param(0, (0, common_1.Param)("codeToUpdate")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, settlement_dto_1.SettlementDto]),
    __metadata("design:returntype", Promise)
], SettlementController.prototype, "updateSettlement", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Borrar asentamiento por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'code',
        description: 'Identificador cadena del asentamiento a borrar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borrar asentamiento por su identificador',
        type: settlement_dto_1.SettlementDto,
    }),
    (0, common_1.Delete)(":code"),
    __param(0, (0, common_1.Param)("code")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SettlementController.prototype, "deleteSettlement", null);
SettlementController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('settlement'),
    (0, swagger_1.ApiTags)('settlement'),
    __metadata("design:paramtypes", [settlement_service_1.SettlementService])
], SettlementController);
exports.SettlementController = SettlementController;
//# sourceMappingURL=settlement.controller.js.map