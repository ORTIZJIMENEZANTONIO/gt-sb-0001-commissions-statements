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
exports.ClaimConclusionController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const claim_conclusion_service_1 = require("./claim-conclusion.service");
const claim_conclusion_dto_1 = require("./dto/claim-conclusion.dto");
let ClaimConclusionController = class ClaimConclusionController {
    constructor(claimConclusionService) {
        this.claimConclusionService = claimConclusionService;
    }
    async getAllClaimConclusion(pagination) {
        return await this.claimConclusionService.getAllClaimConclusion(pagination);
    }
    async getClaimConclusionById(id) {
        return await this.claimConclusionService.getClaimConclusionById(id);
    }
    async createClaimConclusion(claimConclusionDTO) {
        return await this.claimConclusionService.createClaimConclusion(claimConclusionDTO);
    }
    async updateClaimConclusion(claimConclusionDTO, id) {
        return await this.claimConclusionService.updateClaimConclusion(claimConclusionDTO, id);
    }
    async deleteClaimConclusion(id) {
        return await this.claimConclusionService.deleteClaimConclusion(parseInt(`${id}`));
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: [claim_conclusion_dto_1.ClaimConclusionDTO]
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], ClaimConclusionController.prototype, "getAllClaimConclusion", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: claim_conclusion_dto_1.ClaimConclusionDTO
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de conclusion siniestro'
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ClaimConclusionController.prototype, "getClaimConclusionById", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: claim_conclusion_dto_1.ClaimConclusionDTO
    }),
    (0, swagger_1.ApiBody)({
        type: claim_conclusion_dto_1.ClaimConclusionDTO
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [claim_conclusion_dto_1.ClaimConclusionDTO]),
    __metadata("design:returntype", Promise)
], ClaimConclusionController.prototype, "createClaimConclusion", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador conslucion siniestros'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: claim_conclusion_dto_1.ClaimConclusionDTO
    }),
    (0, swagger_1.ApiBody)({
        type: claim_conclusion_dto_1.ClaimConclusionDTO
    }),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [claim_conclusion_dto_1.ClaimConclusionDTO, Number]),
    __metadata("design:returntype", Promise)
], ClaimConclusionController.prototype, "updateClaimConclusion", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador conclusion siniestros'
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ClaimConclusionController.prototype, "deleteClaimConclusion", null);
ClaimConclusionController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('claim-conclusion'),
    (0, swagger_1.ApiTags)('claim-conclusion'),
    __metadata("design:paramtypes", [claim_conclusion_service_1.ClaimConclusionService])
], ClaimConclusionController);
exports.ClaimConclusionController = ClaimConclusionController;
//# sourceMappingURL=claim-conclusion.controller.js.map