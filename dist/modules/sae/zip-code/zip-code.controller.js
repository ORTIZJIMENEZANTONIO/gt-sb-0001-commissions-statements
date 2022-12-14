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
exports.ZipCodeController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const zip_code_service_1 = require("./zip-code.service");
const create_zip_code_dto_1 = require("./dto/create-zip-code.dto");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
let ZipCodeController = class ZipCodeController {
    constructor(zipCodeService) {
        this.zipCodeService = zipCodeService;
    }
    async createZipCode(createZipCodeDto) {
        return await this.zipCodeService.createZipCode(createZipCodeDto);
    }
    async getAllZipCodes(pagination) {
        return await this.zipCodeService.getAllZipCodes(pagination);
    }
    async getZipCodeByCode(code) {
        return await this.zipCodeService.getZipCodeByCode(code);
    }
    async updateZipCode(codeToUpdate, body) {
        return await this.zipCodeService.updateZipCode(codeToUpdate, body);
    }
    async deleteZipCode(code) {
        return await this.zipCodeService.deleteZipCode(code);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Guardar nuevo código postal' }),
    (0, swagger_1.ApiBody)({
        type: create_zip_code_dto_1.CreateZipCodeDto,
        description: 'Información del código postal a guardar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Guarda código postal',
        type: create_zip_code_dto_1.CreateZipCodeDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_zip_code_dto_1.CreateZipCodeDto]),
    __metadata("design:returntype", Promise)
], ZipCodeController.prototype, "createZipCode", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener lista de todos los códigos postales' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de los códigos postales existentes',
        type: create_zip_code_dto_1.CreateZipCodeDto,
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], ZipCodeController.prototype, "getAllZipCodes", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener código postal por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'code',
        description: 'Identificador del código postal'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'código postal obtenida por su identificador',
        type: create_zip_code_dto_1.CreateZipCodeDto,
    }),
    (0, common_1.Get)(":code"),
    __param(0, (0, common_1.Param)("code")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ZipCodeController.prototype, "getZipCodeByCode", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Modificar código postal' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador numérico del código postal'
    }),
    (0, swagger_1.ApiBody)({
        type: create_zip_code_dto_1.CreateZipCodeDto,
        description: 'Objeto del código postal a modificar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borrar código postal por su identificador',
        type: create_zip_code_dto_1.CreateZipCodeDto,
    }),
    (0, common_1.Put)(":codeToUpdate"),
    __param(0, (0, common_1.Param)("codeToUpdate")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_zip_code_dto_1.CreateZipCodeDto]),
    __metadata("design:returntype", Promise)
], ZipCodeController.prototype, "updateZipCode", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Borrar código postal por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador cadena del código postal a borrar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borrar código postal por su identificador',
        type: create_zip_code_dto_1.CreateZipCodeDto,
    }),
    (0, common_1.Delete)(":code"),
    __param(0, (0, common_1.Param)("code")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ZipCodeController.prototype, "deleteZipCode", null);
ZipCodeController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('zip-code'),
    (0, swagger_1.ApiTags)('zip-code'),
    __metadata("design:paramtypes", [zip_code_service_1.ZipCodeService])
], ZipCodeController);
exports.ZipCodeController = ZipCodeController;
//# sourceMappingURL=zip-code.controller.js.map