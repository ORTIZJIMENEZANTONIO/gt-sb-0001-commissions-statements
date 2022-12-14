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
exports.DeductiveVerificationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../../shared/dto/pagination.dto");
const deductive_verification_service_1 = require("./deductive-verification.service");
const create_deductive_verification_dto_1 = require("./dto/create-deductive-verification.dto");
let DeductiveVerificationController = class DeductiveVerificationController {
    constructor(deductiveVerificationService) {
        this.deductiveVerificationService = deductiveVerificationService;
    }
    async createDeductiveVerification(deductiveVerificationDto) {
        return await this.deductiveVerificationService.createDeductiveVerification(deductiveVerificationDto);
    }
    async getAllDeductiveVerifications(pagination) {
        return await this.deductiveVerificationService.getAllDeductiveVerifications(pagination);
    }
    async getDeductiveVerificationByCode(id) {
        return await this.deductiveVerificationService.getDeductiveVerificationById(id);
    }
    async updateDeductiveVerification(idToUpdate, body) {
        return await this.deductiveVerificationService.updateDeductiveVerification(idToUpdate, body);
    }
    async deleteDeductiveVerification(id) {
        return await this.deductiveVerificationService.deleteDeductiveVerification(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Guardar nueva deductiva verificación' }),
    (0, swagger_1.ApiBody)({
        type: create_deductive_verification_dto_1.CreateDeductiveVerificationDto,
        description: 'Información de la deductiva verificacion a guardar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Guarda evento en el repositorio de verificación deductivos',
        type: create_deductive_verification_dto_1.CreateDeductiveVerificationDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_deductive_verification_dto_1.CreateDeductiveVerificationDto]),
    __metadata("design:returntype", Promise)
], DeductiveVerificationController.prototype, "createDeductiveVerification", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener lista de todos las verificationes deductivas' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de verificationes deductivas existenetes',
        type: create_deductive_verification_dto_1.CreateDeductiveVerificationDto,
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], DeductiveVerificationController.prototype, "getAllDeductiveVerifications", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener verification deductiva por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de la verification deductiva'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Obtener Verification deductiva por su identificador',
        type: create_deductive_verification_dto_1.CreateDeductiveVerificationDto,
    }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DeductiveVerificationController.prototype, "getDeductiveVerificationByCode", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Modificar de verificación deductiva' }),
    (0, swagger_1.ApiParam)({
        name: 'idToUpdate',
        description: 'Objeto de la verificación deductiva a modificar'
    }),
    (0, swagger_1.ApiBody)({
        type: create_deductive_verification_dto_1.CreateDeductiveVerificationDto,
        description: 'Información de la deductiva a guardar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borrar verificación deductiva por su identificador',
        type: create_deductive_verification_dto_1.CreateDeductiveVerificationDto,
    }),
    (0, common_1.Put)(":idToUpdate"),
    __param(0, (0, common_1.Param)("idToUpdate")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_deductive_verification_dto_1.CreateDeductiveVerificationDto]),
    __metadata("design:returntype", Promise)
], DeductiveVerificationController.prototype, "updateDeductiveVerification", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Borrar verificación deductiva por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de la verificación deductiva a borrar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borrar verificación deductiva por su identificador',
        type: create_deductive_verification_dto_1.CreateDeductiveVerificationDto,
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DeductiveVerificationController.prototype, "deleteDeductiveVerification", null);
DeductiveVerificationController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('deductive-verification'),
    (0, swagger_1.ApiTags)('deductive-verification'),
    __metadata("design:paramtypes", [deductive_verification_service_1.DeductiveVerificationService])
], DeductiveVerificationController);
exports.DeductiveVerificationController = DeductiveVerificationController;
//# sourceMappingURL=deductive-verification.controller.js.map