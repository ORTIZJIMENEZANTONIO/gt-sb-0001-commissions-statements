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
exports.StatusCodeController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const status_code_dto_1 = require("./dto/status-code.dto");
const status_code_service_1 = require("./status-code.service");
let StatusCodeController = class StatusCodeController {
    constructor(statusCodeService) {
        this.statusCodeService = statusCodeService;
    }
    async getAllStatusCode(pagination) {
        return await this.statusCodeService.getAllStatusCode(pagination);
    }
    async getStatusCodeById(id) {
        return await this.statusCodeService.getStatusCodeById(id);
    }
    async createStatusCode(statusCodeDTO) {
        return await this.statusCodeService.createStatusCode(statusCodeDTO);
    }
    async updateStatusCode(statusCodeDTO, id) {
        return await this.statusCodeService.updateStatusCode(statusCodeDTO, id);
    }
    async deleteStatusCode(id) {
        return await this.statusCodeService.deleteStatusCode(id);
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: [status_code_dto_1.StatusCodeDTO]
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], StatusCodeController.prototype, "getAllStatusCode", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: status_code_dto_1.StatusCodeDTO
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de codigo estatus'
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StatusCodeController.prototype, "getStatusCodeById", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: status_code_dto_1.StatusCodeDTO
    }),
    (0, swagger_1.ApiBody)({
        type: status_code_dto_1.StatusCodeDTO
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [status_code_dto_1.StatusCodeDTO]),
    __metadata("design:returntype", Promise)
], StatusCodeController.prototype, "createStatusCode", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'cve',
        description: 'Cve del codigo estatus'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: status_code_dto_1.StatusCodeDTO
    }),
    (0, swagger_1.ApiBody)({
        type: status_code_dto_1.StatusCodeDTO
    }),
    (0, common_1.Put)(":cve"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("cve")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [status_code_dto_1.StatusCodeDTO, String]),
    __metadata("design:returntype", Promise)
], StatusCodeController.prototype, "updateStatusCode", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'cve',
        description: 'Identificador cve del codigo estatus'
    }),
    (0, common_1.Delete)(":cve"),
    __param(0, (0, common_1.Param)("cve")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StatusCodeController.prototype, "deleteStatusCode", null);
StatusCodeController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('status-code'),
    (0, swagger_1.ApiTags)('status-code'),
    __metadata("design:paramtypes", [status_code_service_1.StatusCodeService])
], StatusCodeController);
exports.StatusCodeController = StatusCodeController;
//# sourceMappingURL=status-code.controller.js.map