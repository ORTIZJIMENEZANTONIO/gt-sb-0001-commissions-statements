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
exports.RevisionReasonController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const revision_reason_dto_1 = require("./dto/revision-reason.dto");
const revision_reason_service_1 = require("./revision-reason.service");
let RevisionReasonController = class RevisionReasonController {
    constructor(revisionReasonService) {
        this.revisionReasonService = revisionReasonService;
    }
    async getAllRevisionReason(pagination) {
        return await this.revisionReasonService.getAllRevisionReason(pagination);
    }
    async getRevisionReasonById(id) {
        return await this.revisionReasonService.getRevisionReasonById(id);
    }
    async createRevisionReason(revisionReasonDTO) {
        return await this.revisionReasonService.createRevisionReason(revisionReasonDTO);
    }
    async updateRevisionReason(revisionReasonDTO, id) {
        return await this.revisionReasonService.updateRevisionReason(revisionReasonDTO, id);
    }
    async deleteRevisionReason(id) {
        return await this.revisionReasonService.deleteRevisionReason(parseInt(`${id}`));
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: [revision_reason_dto_1.RevisionReasonDTO]
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], RevisionReasonController.prototype, "getAllRevisionReason", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: revision_reason_dto_1.RevisionReasonDTO
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador Motivo revision'
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RevisionReasonController.prototype, "getRevisionReasonById", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: revision_reason_dto_1.RevisionReasonDTO
    }),
    (0, swagger_1.ApiBody)({
        type: revision_reason_dto_1.RevisionReasonDTO
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [revision_reason_dto_1.RevisionReasonDTO]),
    __metadata("design:returntype", Promise)
], RevisionReasonController.prototype, "createRevisionReason", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador motivo revision'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: revision_reason_dto_1.RevisionReasonDTO
    }),
    (0, swagger_1.ApiBody)({
        type: revision_reason_dto_1.RevisionReasonDTO
    }),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [revision_reason_dto_1.RevisionReasonDTO, Number]),
    __metadata("design:returntype", Promise)
], RevisionReasonController.prototype, "updateRevisionReason", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador motivo revision'
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RevisionReasonController.prototype, "deleteRevisionReason", null);
RevisionReasonController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('revision-reason'),
    (0, swagger_1.ApiTags)('revision-reason'),
    __metadata("design:paramtypes", [revision_reason_service_1.RevisionReasonService])
], RevisionReasonController);
exports.RevisionReasonController = RevisionReasonController;
//# sourceMappingURL=revision-reason.controller.js.map