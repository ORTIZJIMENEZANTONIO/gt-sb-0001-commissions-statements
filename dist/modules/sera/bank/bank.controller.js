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
exports.BankController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const bank_service_1 = require("./bank.service");
const bank_dto_1 = require("./dto/bank.dto");
let BankController = class BankController {
    constructor(bankService) {
        this.bankService = bankService;
    }
    async createBank(bankDto) {
        return await this.bankService.createBank(bankDto);
    }
    async getAllBankes(pagination) {
        return await this.bankService.getAllBanks(pagination);
    }
    async getBankByCode(code) {
        return await this.bankService.getBankByCode(code);
    }
    async updatebank(codeToUpdate, data) {
        return await this.bankService.updateBank(codeToUpdate, data);
    }
    async deletebank(code) {
        return await this.bankService.deleteBank(code);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Guardar nuevo banco' }),
    (0, swagger_1.ApiBody)({
        type: bank_dto_1.BankDto,
        description: 'Información del banco a guardar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Guarda banco',
        type: bank_dto_1.BankDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bank_dto_1.BankDto]),
    __metadata("design:returntype", Promise)
], BankController.prototype, "createBank", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener lista de todos los bancos' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de los bancos existentes',
        type: bank_dto_1.BankDto,
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], BankController.prototype, "getAllBankes", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener banco por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'code',
        description: 'Identificador del banco'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'banco obtenida por su identificador',
        type: bank_dto_1.BankDto,
    }),
    (0, common_1.Get)(":code"),
    __param(0, (0, common_1.Param)("code")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BankController.prototype, "getBankByCode", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Modificar banco' }),
    (0, swagger_1.ApiParam)({
        name: 'codeToUpdate',
        description: 'Identificador numérico del banco'
    }),
    (0, swagger_1.ApiBody)({
        type: bank_dto_1.BankDto,
        description: 'Objeto del banco a modificar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borrar banco por su identificador',
        type: bank_dto_1.BankDto,
    }),
    (0, common_1.Put)(":codeToUpdate"),
    __param(0, (0, common_1.Param)("codeToUpdate")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, bank_dto_1.BankDto]),
    __metadata("design:returntype", Promise)
], BankController.prototype, "updatebank", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Borrar banco por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'code',
        description: 'Identificador cadena del banco a borrar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borrar banco por su identificador',
        type: bank_dto_1.BankDto,
    }),
    (0, common_1.Delete)(":code"),
    __param(0, (0, common_1.Param)("code")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BankController.prototype, "deletebank", null);
BankController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('bank'),
    (0, swagger_1.ApiTags)('bank'),
    __metadata("design:paramtypes", [bank_service_1.BankService])
], BankController);
exports.BankController = BankController;
//# sourceMappingURL=bank.controller.js.map