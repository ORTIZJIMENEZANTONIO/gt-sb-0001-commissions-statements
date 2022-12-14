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
exports.DeductiveController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const deductive_service_1 = require("./deductive.service");
const deductive_dto_1 = require("./dto/deductive.dto");
let DeductiveController = class DeductiveController {
    constructor(deductiveService) {
        this.deductiveService = deductiveService;
    }
    async createDeductive(deductiveDto) {
        return await this.deductiveService.createDeductive(deductiveDto);
    }
    async getAllDeductives(pagination) {
        return await this.deductiveService.getAllDeductives(pagination);
    }
    async getDeductiveByCode(id) {
        return await this.deductiveService.getDeductiveById(id);
    }
    async updateDeductive(id, body) {
        return await this.deductiveService.updateDeductive(id, body);
    }
    async deleteDeductive(id) {
        return await this.deductiveService.deleteDeductive(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Guardar nueva deductiva' }),
    (0, swagger_1.ApiBody)({
        type: deductive_dto_1.DeductiveDto,
        description: 'Información de la deductiva a guardar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Guarda nueva deductivos',
        type: deductive_dto_1.DeductiveDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [deductive_dto_1.DeductiveDto]),
    __metadata("design:returntype", Promise)
], DeductiveController.prototype, "createDeductive", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener lista de todos las deductivas' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de deductivas existenetes',
        type: deductive_dto_1.DeductiveDto,
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], DeductiveController.prototype, "getAllDeductives", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener deductiva por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de la deductiva'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Obtener deudctiva por su identificador',
        type: deductive_dto_1.DeductiveDto,
    }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DeductiveController.prototype, "getDeductiveByCode", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Modificar deductiva' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de la deductiva'
    }),
    (0, swagger_1.ApiBody)({
        type: deductive_dto_1.DeductiveDto,
        description: 'Objeto de la deductiva modificar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borrar deduvtiva por su identificador',
        type: deductive_dto_1.DeductiveDto,
    }),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, deductive_dto_1.DeductiveDto]),
    __metadata("design:returntype", Promise)
], DeductiveController.prototype, "updateDeductive", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Borrar deductiva por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de la deductiva a borrar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borrar deduvtiva por su identificador',
        type: deductive_dto_1.DeductiveDto,
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DeductiveController.prototype, "deleteDeductive", null);
DeductiveController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('deductive'),
    (0, swagger_1.ApiTags)('deductive'),
    __metadata("design:paramtypes", [deductive_service_1.DeductiveService])
], DeductiveController);
exports.DeductiveController = DeductiveController;
//# sourceMappingURL=deductive.controller.js.map