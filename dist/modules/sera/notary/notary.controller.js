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
exports.NotaryController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const notary_dto_1 = require("./dto/notary.dto");
const notary_service_1 = require("./notary.service");
let NotaryController = class NotaryController {
    constructor(notaryService) {
        this.notaryService = notaryService;
    }
    async getAllNotary(pagination) {
        return await this.notaryService.getAllNotary(pagination);
    }
    async getNotaryById(id) {
        return await this.notaryService.getNotaryById(id);
    }
    async createNotary(notaryDTO) {
        return await this.notaryService.createNotary(notaryDTO);
    }
    async updateNotary(notaryDTO, id) {
        return await this.notaryService.updateNotary(notaryDTO, id);
    }
    async deleteNotary(id) {
        return await this.notaryService.deleteNotary(parseInt(`${id}`));
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: [notary_dto_1.NotaryDTO]
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], NotaryController.prototype, "getAllNotary", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: notary_dto_1.NotaryDTO
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de notario'
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NotaryController.prototype, "getNotaryById", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: notary_dto_1.NotaryDTO
    }),
    (0, swagger_1.ApiBody)({
        type: notary_dto_1.NotaryDTO
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [notary_dto_1.NotaryDTO]),
    __metadata("design:returntype", Promise)
], NotaryController.prototype, "createNotary", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de notario'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: notary_dto_1.NotaryDTO
    }),
    (0, swagger_1.ApiBody)({
        type: notary_dto_1.NotaryDTO
    }),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [notary_dto_1.NotaryDTO, Number]),
    __metadata("design:returntype", Promise)
], NotaryController.prototype, "updateNotary", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador notario'
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NotaryController.prototype, "deleteNotary", null);
NotaryController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('notary'),
    (0, swagger_1.ApiTags)('notary'),
    __metadata("design:paramtypes", [notary_service_1.NotaryService])
], NotaryController);
exports.NotaryController = NotaryController;
//# sourceMappingURL=notary.controller.js.map