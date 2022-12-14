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
exports.GoodsSubtypeController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../../shared/dto/pagination.dto");
const goods_subtype_dto_1 = require("./dto/goods-subtype.dto");
const goods_subtype_service_1 = require("./goods-subtype.service");
let GoodsSubtypeController = class GoodsSubtypeController {
    constructor(goodsSubTypeService) {
        this.goodsSubTypeService = goodsSubTypeService;
    }
    async getAllGoodsSubType(pagination) {
        return await this.goodsSubTypeService.getAllGoodsSubType(pagination);
    }
    async getGoodsSubTypeById(id) {
        return await this.goodsSubTypeService.getGoodsSubTypeById(id);
    }
    async createGoodsSubType(goodsSubType) {
        return await this.goodsSubTypeService.createGoodsSubType(goodsSubType);
    }
    async updateGoodsSubType(goodsSubType, id) {
        return await this.goodsSubTypeService.updateGoodsSubType(goodsSubType, id);
    }
    async deleteGoodsSubType(id) {
        return await this.goodsSubTypeService.deleteGoodsSubType(parseInt(`${id}`));
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: [goods_subtype_dto_1.GoodsSubTypeDTO]
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], GoodsSubtypeController.prototype, "getAllGoodsSubType", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: goods_subtype_dto_1.GoodsSubTypeDTO
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de bien'
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GoodsSubtypeController.prototype, "getGoodsSubTypeById", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: goods_subtype_dto_1.GoodsSubTypeDTO
    }),
    (0, swagger_1.ApiBody)({
        type: goods_subtype_dto_1.GoodsSubTypeDTO
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [goods_subtype_dto_1.GoodsSubTypeDTO]),
    __metadata("design:returntype", Promise)
], GoodsSubtypeController.prototype, "createGoodsSubType", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de bien a modificar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: goods_subtype_dto_1.GoodsSubTypeDTO
    }),
    (0, swagger_1.ApiBody)({
        type: goods_subtype_dto_1.GoodsSubTypeDTO
    }),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [goods_subtype_dto_1.GoodsSubTypeDTO, Number]),
    __metadata("design:returntype", Promise)
], GoodsSubtypeController.prototype, "updateGoodsSubType", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador del tipo de bien a eliminar'
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GoodsSubtypeController.prototype, "deleteGoodsSubType", null);
GoodsSubtypeController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('goods-subtype-sae'),
    (0, swagger_1.ApiTags)('goods-subtype-sae'),
    __metadata("design:paramtypes", [goods_subtype_service_1.GoodsSubtypeService])
], GoodsSubtypeController);
exports.GoodsSubtypeController = GoodsSubtypeController;
//# sourceMappingURL=goods-subtype.controller.js.map