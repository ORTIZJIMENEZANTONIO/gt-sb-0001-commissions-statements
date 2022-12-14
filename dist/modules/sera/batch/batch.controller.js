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
exports.BatchController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const batch_service_1 = require("./batch.service");
const batch_dto_1 = require("./dto/batch.dto");
let BatchController = class BatchController {
    constructor(batchService) {
        this.batchService = batchService;
    }
    async getAllBatch(pagination) {
        return await this.batchService.getAllBatch(pagination);
    }
    async getBatchById(id) {
        return await this.batchService.getBatchById(id);
    }
    async createBatch(batchDTO) {
        return await this.batchService.createBatch(batchDTO);
    }
    async updateBatch(batchDTO, id) {
        return await this.batchService.updateBatch(batchDTO, id);
    }
    async deleteBatch(id) {
        return await this.batchService.deleteBatch(parseInt(`${id}`));
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: [batch_dto_1.BatchDTO]
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], BatchController.prototype, "getAllBatch", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: batch_dto_1.BatchDTO
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de lote'
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BatchController.prototype, "getBatchById", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: batch_dto_1.BatchDTO
    }),
    (0, swagger_1.ApiBody)({
        type: batch_dto_1.BatchDTO
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [batch_dto_1.BatchDTO]),
    __metadata("design:returntype", Promise)
], BatchController.prototype, "createBatch", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de lote'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: batch_dto_1.BatchDTO
    }),
    (0, swagger_1.ApiBody)({
        type: batch_dto_1.BatchDTO
    }),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [batch_dto_1.BatchDTO, Number]),
    __metadata("design:returntype", Promise)
], BatchController.prototype, "updateBatch", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de lote'
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BatchController.prototype, "deleteBatch", null);
BatchController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('batch'),
    (0, swagger_1.ApiTags)('batch'),
    __metadata("design:paramtypes", [batch_service_1.BatchService])
], BatchController);
exports.BatchController = BatchController;
//# sourceMappingURL=batch.controller.js.map