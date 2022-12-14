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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoodSsubtypeController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const good_Ssubtype_dto_1 = require("./dto/good-Ssubtype.dto");
const good_ssubtype_service_1 = require("./good-ssubtype.service");
let GoodSsubtypeController = class GoodSsubtypeController {
    constructor(goodSsubtypeService) {
        this.goodSsubtypeService = goodSsubtypeService;
    }
    async getAllGoodSsubtype(pagination) {
        return await this.goodSsubtypeService.getAllGoodSsubtype(pagination);
    }
    async getGoodSsubtypeById(id) {
        return await this.goodSsubtypeService.getGoodSsubtypeById(id);
    }
    async createGoodSsubtype(goodSsubtypeDTO) {
        return await this.goodSsubtypeService.createGoodSsubtype(goodSsubtypeDTO);
    }
    async updateGoodSsubtype(goodSsubtypeDTO, id) {
        return await this.goodSsubtypeService.updateGoodSsubtype(goodSsubtypeDTO, id);
    }
    async deleteGoodSsubtype(id) {
        return await this.goodSsubtypeService.deleteGoodSsubtype(parseInt(`${id}`));
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: [good_Ssubtype_dto_1.GoodSsubtypeDTO]
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], GoodSsubtypeController.prototype, "getAllGoodSsubtype", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: good_Ssubtype_dto_1.GoodSsubtypeDTO
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de ssubtipo bien'
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GoodSsubtypeController.prototype, "getGoodSsubtypeById", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: good_Ssubtype_dto_1.GoodSsubtypeDTO
    }),
    (0, swagger_1.ApiBody)({
        type: good_Ssubtype_dto_1.GoodSsubtypeDTO
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof good_Ssubtype_dto_1.GoodSsubtypeDTO !== "undefined" && good_Ssubtype_dto_1.GoodSsubtypeDTO) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], GoodSsubtypeController.prototype, "createGoodSsubtype", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de ssubtipo bien'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: good_Ssubtype_dto_1.GoodSsubtypeDTO
    }),
    (0, swagger_1.ApiBody)({
        type: good_Ssubtype_dto_1.GoodSsubtypeDTO
    }),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof good_Ssubtype_dto_1.GoodSsubtypeDTO !== "undefined" && good_Ssubtype_dto_1.GoodSsubtypeDTO) === "function" ? _b : Object, Number]),
    __metadata("design:returntype", Promise)
], GoodSsubtypeController.prototype, "updateGoodSsubtype", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador ssubtipo bien'
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GoodSsubtypeController.prototype, "deleteGoodSsubtype", null);
GoodSsubtypeController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('good-ssubtype'),
    (0, swagger_1.ApiTags)('good-ssubtype'),
    __metadata("design:paramtypes", [good_ssubtype_service_1.GoodSsubtypeService])
], GoodSsubtypeController);
exports.GoodSsubtypeController = GoodSsubtypeController;
//# sourceMappingURL=good-ssubtype.controller.js.map