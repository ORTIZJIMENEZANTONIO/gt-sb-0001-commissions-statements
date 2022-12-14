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
exports.LawyerController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const lawyer_service_1 = require("./lawyer.service");
const lawyer_dto_1 = require("./dto/lawyer.dto");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
let LawyerController = class LawyerController {
    constructor(lawyerService) {
        this.lawyerService = lawyerService;
    }
    async createLawyer(lawyerDto) {
        return await this.lawyerService.createLawyer(lawyerDto);
    }
    async getAllLawyers(pagination) {
        return await this.lawyerService.getAllLawyers(pagination);
    }
    async getLawyerById(id) {
        return await this.lawyerService.getLawyerById(id);
    }
    async updateLawyer(idToUpdate, body) {
        return await this.lawyerService.updateLawyer(idToUpdate, body);
    }
    async deleteLawyer(id) {
        return await this.lawyerService.deleteLawyer(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Guardar nuevo abogado' }),
    (0, swagger_1.ApiBody)({
        type: lawyer_dto_1.LawyerDto,
        description: 'Información del abogado a guardar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Guarda abogado',
        type: lawyer_dto_1.LawyerDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [lawyer_dto_1.LawyerDto]),
    __metadata("design:returntype", Promise)
], LawyerController.prototype, "createLawyer", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener lista de todos los abogados' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de los abogados existentes',
        type: lawyer_dto_1.LawyerDto,
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], LawyerController.prototype, "getAllLawyers", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener abogado por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador del abogado'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'abogado obtenida por su identificador',
        type: lawyer_dto_1.LawyerDto,
    }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LawyerController.prototype, "getLawyerById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Modificar abogado' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador numérico del abogado'
    }),
    (0, swagger_1.ApiBody)({
        type: lawyer_dto_1.LawyerDto,
        description: 'Objeto del abogado a modificar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borrar abogado por su identificador',
        type: lawyer_dto_1.LawyerDto,
    }),
    (0, common_1.Put)(":idToUpdate"),
    __param(0, (0, common_1.Param)("idToUpdate")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, lawyer_dto_1.LawyerDto]),
    __metadata("design:returntype", Promise)
], LawyerController.prototype, "updateLawyer", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Borrar abogado por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador cadena del abogado a borrar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borrar abogado por su identificador',
        type: lawyer_dto_1.LawyerDto,
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LawyerController.prototype, "deleteLawyer", null);
LawyerController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('lawyer'),
    (0, swagger_1.ApiTags)('lawyer'),
    __metadata("design:paramtypes", [lawyer_service_1.LawyerService])
], LawyerController);
exports.LawyerController = LawyerController;
//# sourceMappingURL=lawyer.controller.js.map