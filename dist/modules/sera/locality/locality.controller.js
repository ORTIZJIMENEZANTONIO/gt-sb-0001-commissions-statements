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
exports.LocalityController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const locality_dto_1 = require("./dto/locality.dto");
const locality_service_1 = require("./locality.service");
let LocalityController = class LocalityController {
    constructor(localityService) {
        this.localityService = localityService;
    }
    async getAllLocality(pagination) {
        return await this.localityService.getAllLocality(pagination);
    }
    async getLocalityById(id) {
        return await this.localityService.getLocalityById(id);
    }
    async createLocality(localityDTO) {
        return await this.localityService.createLocality(localityDTO);
    }
    async updateLocality(localityDTO, id) {
        return await this.localityService.updateLocality(localityDTO, id);
    }
    async deleteLocality(id) {
        return await this.localityService.deleteLocality(parseInt(`${id}`));
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: [locality_dto_1.LocalityDTO]
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], LocalityController.prototype, "getAllLocality", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: locality_dto_1.LocalityDTO
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de ciudad'
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LocalityController.prototype, "getLocalityById", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: locality_dto_1.LocalityDTO
    }),
    (0, swagger_1.ApiBody)({
        type: locality_dto_1.LocalityDTO
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [locality_dto_1.LocalityDTO]),
    __metadata("design:returntype", Promise)
], LocalityController.prototype, "createLocality", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de ciudad'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: locality_dto_1.LocalityDTO
    }),
    (0, swagger_1.ApiBody)({
        type: locality_dto_1.LocalityDTO
    }),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [locality_dto_1.LocalityDTO, Number]),
    __metadata("design:returntype", Promise)
], LocalityController.prototype, "updateLocality", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador cve de casillero'
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LocalityController.prototype, "deleteLocality", null);
LocalityController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('locality-sera'),
    (0, swagger_1.ApiTags)('locality-sera'),
    __metadata("design:paramtypes", [locality_service_1.LocalityService])
], LocalityController);
exports.LocalityController = LocalityController;
//# sourceMappingURL=locality.controller.js.map