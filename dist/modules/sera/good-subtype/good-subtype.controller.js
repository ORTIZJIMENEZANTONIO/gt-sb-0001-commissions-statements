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
exports.GoodSubtypeController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const good_subtype_dto_1 = require("./dto/good-subtype.dto");
const good_subtype_service_1 = require("./good-subtype.service");
let GoodSubtypeController = class GoodSubtypeController {
    constructor(goodSubtypeService) {
        this.goodSubtypeService = goodSubtypeService;
    }
    async getAllGoodSubtype(pagination) {
        return await this.goodSubtypeService.getAllGoodSubtype(pagination);
    }
    async getGoodSubtypeById(id) {
        return await this.goodSubtypeService.getGoodSubtypeById(id);
    }
    async createGoodSubtype(goodSubtypeDTO) {
        return await this.goodSubtypeService.createGoodSubtype(goodSubtypeDTO);
    }
    async updateGoodSubtype(goodSubtypeDTO, id) {
        return await this.goodSubtypeService.updateGoodSubtype(goodSubtypeDTO, id);
    }
    async deleteGoodSubtype(id) {
        return await this.goodSubtypeService.deleteGoodSubtype(parseInt(`${id}`));
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: [good_subtype_dto_1.GoodSubtypeDTO]
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], GoodSubtypeController.prototype, "getAllGoodSubtype", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: good_subtype_dto_1.GoodSubtypeDTO
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador subtipo bien'
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GoodSubtypeController.prototype, "getGoodSubtypeById", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: good_subtype_dto_1.GoodSubtypeDTO
    }),
    (0, swagger_1.ApiBody)({
        type: good_subtype_dto_1.GoodSubtypeDTO
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [good_subtype_dto_1.GoodSubtypeDTO]),
    __metadata("design:returntype", Promise)
], GoodSubtypeController.prototype, "createGoodSubtype", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador subtipo bien'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: good_subtype_dto_1.GoodSubtypeDTO
    }),
    (0, swagger_1.ApiBody)({
        type: good_subtype_dto_1.GoodSubtypeDTO
    }),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [good_subtype_dto_1.GoodSubtypeDTO, Number]),
    __metadata("design:returntype", Promise)
], GoodSubtypeController.prototype, "updateGoodSubtype", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador subtipo bien'
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GoodSubtypeController.prototype, "deleteGoodSubtype", null);
GoodSubtypeController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('good-subtype-sera'),
    (0, swagger_1.ApiTags)('good-subtype-sera'),
    __metadata("design:paramtypes", [good_subtype_service_1.GoodSubtypeService])
], GoodSubtypeController);
exports.GoodSubtypeController = GoodSubtypeController;
//# sourceMappingURL=good-subtype.controller.js.map