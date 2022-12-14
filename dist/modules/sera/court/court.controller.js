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
exports.CourtController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const court_service_1 = require("./court.service");
const court_dto_1 = require("./dto/court.dto");
let CourtController = class CourtController {
    constructor(courtService) {
        this.courtService = courtService;
    }
    async getAllCourt(pagination) {
        return await this.courtService.getAllCourt(pagination);
    }
    async getCourtById(id) {
        return await this.courtService.getCourtById(id);
    }
    async createCourt(courtDTO) {
        return await this.courtService.createCourt(courtDTO);
    }
    async updateCourt(courtDTO, id) {
        return await this.courtService.updateCourt(courtDTO, id);
    }
    async deleteCourt(id) {
        return await this.courtService.deleteCourt(parseInt(`${id}`));
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: [court_dto_1.CourtDTO]
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], CourtController.prototype, "getAllCourt", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: court_dto_1.CourtDTO
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
], CourtController.prototype, "getCourtById", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: court_dto_1.CourtDTO
    }),
    (0, swagger_1.ApiBody)({
        type: court_dto_1.CourtDTO
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [court_dto_1.CourtDTO]),
    __metadata("design:returntype", Promise)
], CourtController.prototype, "createCourt", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de juzgado'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: court_dto_1.CourtDTO
    }),
    (0, swagger_1.ApiBody)({
        type: court_dto_1.CourtDTO
    }),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [court_dto_1.CourtDTO, Number]),
    __metadata("design:returntype", Promise)
], CourtController.prototype, "updateCourt", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de juzgado'
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CourtController.prototype, "deleteCourt", null);
CourtController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('court'),
    (0, swagger_1.ApiTags)('court'),
    __metadata("design:paramtypes", [court_service_1.CourtService])
], CourtController);
exports.CourtController = CourtController;
//# sourceMappingURL=court.controller.js.map