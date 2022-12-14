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
exports.GeneralStatusController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const general_status_service_1 = require("./general-status.service");
const general_status_dto_1 = require("./dto/general-status.dto");
const update_general_status_dto_1 = require("./dto/update-general-status.dto");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
let GeneralStatusController = class GeneralStatusController {
    constructor(generalStatusService) {
        this.generalStatusService = generalStatusService;
    }
    async createGeneralStatus(generalStatusDto) {
        return await this.generalStatusService.createGeneralStatus(generalStatusDto);
    }
    async getAllGeneralStatus(pagination) {
        return await this.generalStatusService.getAllGeneralStatus(pagination);
    }
    async getGeneralStatusBystatusGeneral(statusGeneral) {
        return await this.generalStatusService.getGeneralStatusByStatusGeneral(statusGeneral);
    }
    async updatedeleteRegionalDelegation(statusGeneralToUpdate, data) {
        return await this.generalStatusService.updateGeneralStatus(statusGeneralToUpdate, data);
    }
    async deleteGeneralStatus(statusGeneral) {
        return await this.generalStatusService.deleteGeneralStatus(statusGeneral);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Guardar nuevo estatus general' }),
    (0, swagger_1.ApiBody)({
        type: general_status_dto_1.GeneralStatusDto,
        description: 'Información del estatus general a guardar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Guardó nuevo estatus general',
        type: general_status_dto_1.GeneralStatusDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [general_status_dto_1.GeneralStatusDto]),
    __metadata("design:returntype", Promise)
], GeneralStatusController.prototype, "createGeneralStatus", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener lista de todos los estatus general' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de estatus generals existenetes',
        type: general_status_dto_1.GeneralStatusDto,
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], GeneralStatusController.prototype, "getAllGeneralStatus", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener estatus general por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'statusGeneral',
        description: 'Identificador cadena de la estatus general'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Estatus general por su identificador',
        type: general_status_service_1.GeneralStatusService,
    }),
    (0, common_1.Get)(":statusGeneral"),
    __param(0, (0, common_1.Param)("statusGeneral")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GeneralStatusController.prototype, "getGeneralStatusBystatusGeneral", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Modificar estatus general' }),
    (0, swagger_1.ApiParam)({
        name: 'statusGeneralToUpdate',
        description: 'Identificador cadena de la estatus general'
    }),
    (0, swagger_1.ApiBody)({
        type: update_general_status_dto_1.UpdateGeneralStatusDto && general_status_dto_1.GeneralStatusDto,
        description: 'Objeto de la estatus general modificar'
    }),
    (0, common_1.Put)(":statusGeneralToUpdate"),
    __param(0, (0, common_1.Param)("statusGeneralToUpdate")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, general_status_dto_1.GeneralStatusDto]),
    __metadata("design:returntype", Promise)
], GeneralStatusController.prototype, "updatedeleteRegionalDelegation", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Borrar estatus general por su estatus' }),
    (0, swagger_1.ApiParam)({
        name: 'statusGeneral',
        description: 'Identificador del estatus general a borrar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Se eliminó estatus general por su identificador',
        type: general_status_service_1.GeneralStatusService,
    }),
    (0, common_1.Delete)(":statusGeneral"),
    __param(0, (0, common_1.Param)("statusGeneral")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GeneralStatusController.prototype, "deleteGeneralStatus", null);
GeneralStatusController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('general-status'),
    (0, swagger_1.ApiTags)('general-status'),
    __metadata("design:paramtypes", [general_status_service_1.GeneralStatusService])
], GeneralStatusController);
exports.GeneralStatusController = GeneralStatusController;
//# sourceMappingURL=general-status.controller.js.map