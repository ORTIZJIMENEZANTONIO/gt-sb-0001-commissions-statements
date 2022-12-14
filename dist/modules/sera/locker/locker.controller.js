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
exports.LockerController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const locker_dto_1 = require("./dto/locker.dto");
const locker_service_1 = require("./locker.service");
let LockerController = class LockerController {
    constructor(lockerService) {
        this.lockerService = lockerService;
    }
    async getAllLocker(pagination) {
        return await this.lockerService.getAllLocker(pagination);
    }
    async getLockerById(id) {
        return await this.lockerService.getLockerById(id);
    }
    async createLocker(lockerDTO) {
        return await this.lockerService.createLocker(lockerDTO);
    }
    async updateLocker(lockerDTO, id) {
        return await this.lockerService.updateLocker(lockerDTO, id);
    }
    async deleteLocker(id) {
        return await this.lockerService.deleteLocker(id);
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: [locker_dto_1.LockerDTO]
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], LockerController.prototype, "getAllLocker", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: locker_dto_1.LockerDTO
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de casillero'
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LockerController.prototype, "getLockerById", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: locker_dto_1.LockerDTO
    }),
    (0, swagger_1.ApiBody)({
        type: locker_dto_1.LockerDTO
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [locker_dto_1.LockerDTO]),
    __metadata("design:returntype", Promise)
], LockerController.prototype, "createLocker", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'cve',
        description: 'Cve de casillero a modificarr'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: locker_dto_1.LockerDTO
    }),
    (0, swagger_1.ApiBody)({
        type: locker_dto_1.LockerDTO
    }),
    (0, common_1.Put)(":cve"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("cve")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [locker_dto_1.LockerDTO, String]),
    __metadata("design:returntype", Promise)
], LockerController.prototype, "updateLocker", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'cve',
        description: 'Identificador cve de casillero'
    }),
    (0, common_1.Delete)(":cve"),
    __param(0, (0, common_1.Param)("cve")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LockerController.prototype, "deleteLocker", null);
LockerController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('locker'),
    (0, swagger_1.ApiTags)('locker'),
    __metadata("design:paramtypes", [locker_service_1.LockerService])
], LockerController);
exports.LockerController = LockerController;
//# sourceMappingURL=locker.controller.js.map