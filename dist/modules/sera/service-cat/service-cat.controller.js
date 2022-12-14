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
exports.ServiceCatController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const service_cat_dto_1 = require("./dto/service-cat.dto");
const service_cat_service_1 = require("./service-cat.service");
let ServiceCatController = class ServiceCatController {
    constructor(serviceCatService) {
        this.serviceCatService = serviceCatService;
    }
    async createServiceCat(serviceCatDto) {
        return await this.serviceCatService.createService(serviceCatDto);
    }
    async getAllServiceCats(pagination) {
        return await this.serviceCatService.getAllServices(pagination);
    }
    async getServiceCatById(code) {
        return await this.serviceCatService.getServiceByCode(code);
    }
    async updateServiceCat(codeToUpdate, data) {
        return await this.serviceCatService.updateService(codeToUpdate, data);
    }
    async deleteServiceCat(code) {
        return await this.serviceCatService.deleteService(code);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Guardar nuevo Servicio' }),
    (0, swagger_1.ApiBody)({
        type: service_cat_dto_1.ServiceCatDto,
        description: 'Información del Servicio a guardar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Guarda Servicio',
        type: service_cat_dto_1.ServiceCatDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [service_cat_dto_1.ServiceCatDto]),
    __metadata("design:returntype", Promise)
], ServiceCatController.prototype, "createServiceCat", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener lista de todas las Servicios' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de Servicios existenetes',
        type: [pagination_dto_1.PaginationDto],
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], ServiceCatController.prototype, "getAllServiceCats", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener Servicio por su id ej. 1' }),
    (0, swagger_1.ApiParam)({
        name: 'code',
        description: 'Identificador de la Servicio'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Servicio obtenida por su identificador',
        type: service_cat_dto_1.ServiceCatDto,
    }),
    (0, common_1.Get)(":code"),
    __param(0, (0, common_1.Param)("code")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ServiceCatController.prototype, "getServiceCatById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Modificar Servicio' }),
    (0, swagger_1.ApiParam)({
        name: 'codeToUpdate',
        description: 'Identificador del Servicio'
    }),
    (0, swagger_1.ApiBody)({
        type: service_cat_dto_1.ServiceCatDto,
        description: 'Objeto de la Servicio a modificar'
    }),
    (0, common_1.Put)(":codeToUpdate"),
    __param(0, (0, common_1.Param)("codeToUpdate")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, service_cat_dto_1.ServiceCatDto]),
    __metadata("design:returntype", Promise)
], ServiceCatController.prototype, "updateServiceCat", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Borrar Servicio por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'code',
        description: 'Identificador de la Servicio '
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borrar Servicio por su identificador',
        type: service_cat_dto_1.ServiceCatDto,
    }),
    (0, common_1.Delete)(":code"),
    __param(0, (0, common_1.Param)("code")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ServiceCatController.prototype, "deleteServiceCat", null);
ServiceCatController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('service-cat'),
    (0, swagger_1.ApiTags)('service-cat'),
    __metadata("design:paramtypes", [service_cat_service_1.ServiceCatService])
], ServiceCatController);
exports.ServiceCatController = ServiceCatController;
//# sourceMappingURL=service-cat.controller.js.map