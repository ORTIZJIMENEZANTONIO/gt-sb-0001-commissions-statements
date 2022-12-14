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
exports.PenaltyController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const penalty_dto_1 = require("./dto/penalty.dto");
const penalty_service_1 = require("./penalty.service");
let PenaltyController = class PenaltyController {
    constructor(penaltyService) {
        this.penaltyService = penaltyService;
    }
    async getAllPenalty(pagination) {
        return await this.penaltyService.getAllPenalty(pagination);
    }
    async getPenaltyById(id) {
        return await this.penaltyService.getPenaltyById(id);
    }
    async createPenalty(penaltyDTO) {
        return await this.penaltyService.createPenalty(penaltyDTO);
    }
    async updatePenalty(penaltyDTO, id) {
        return await this.penaltyService.updatePenalty(penaltyDTO, id);
    }
    async deletePenalty(id) {
        return await this.penaltyService.deletePenalty(id);
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: [penalty_dto_1.PenaltyDTO]
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], PenaltyController.prototype, "getAllPenalty", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: penalty_dto_1.PenaltyDTO
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de penalizacion'
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PenaltyController.prototype, "getPenaltyById", null);
__decorate([
    (0, swagger_1.ApiBody)({
        type: penalty_dto_1.PenaltyDTO
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: penalty_dto_1.PenaltyDTO
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [penalty_dto_1.PenaltyDTO]),
    __metadata("design:returntype", Promise)
], PenaltyController.prototype, "createPenalty", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de la penalizacion a modificar'
    }),
    (0, swagger_1.ApiBody)({
        type: penalty_dto_1.PenaltyDTO
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: penalty_dto_1.PenaltyDTO
    }),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [penalty_dto_1.PenaltyDTO, Number]),
    __metadata("design:returntype", Promise)
], PenaltyController.prototype, "updatePenalty", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador del la penalizacion a eliminar'
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PenaltyController.prototype, "deletePenalty", null);
PenaltyController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('penalty'),
    (0, swagger_1.ApiTags)('penalty'),
    __metadata("design:paramtypes", [penalty_service_1.PenaltyService])
], PenaltyController);
exports.PenaltyController = PenaltyController;
//# sourceMappingURL=penalty.controller.js.map