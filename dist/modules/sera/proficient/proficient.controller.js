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
exports.ProficientController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const proficient_dto_1 = require("./dto/proficient.dto");
const proficient_service_1 = require("./proficient.service");
let ProficientController = class ProficientController {
    constructor(proficientService) {
        this.proficientService = proficientService;
    }
    async getAllProficient(pagination) {
        return await this.proficientService.getAllProficient(pagination);
    }
    async getProficientById(id) {
        return await this.proficientService.getProficientById(id);
    }
    async createProficient(proficientDTO) {
        return await this.proficientService.createProficient(proficientDTO);
    }
    async updateProficient(proficientDTO, id) {
        return await this.proficientService.updateProficient(proficientDTO, id);
    }
    async deleteProficient(id) {
        return await this.proficientService.deleteProficient(parseInt(`${id}`));
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: [proficient_dto_1.ProficientDTO]
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], ProficientController.prototype, "getAllProficient", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: proficient_dto_1.ProficientDTO
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de perito'
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProficientController.prototype, "getProficientById", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: proficient_dto_1.ProficientDTO
    }),
    (0, swagger_1.ApiBody)({
        type: proficient_dto_1.ProficientDTO
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [proficient_dto_1.ProficientDTO]),
    __metadata("design:returntype", Promise)
], ProficientController.prototype, "createProficient", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de perito'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: proficient_dto_1.ProficientDTO
    }),
    (0, swagger_1.ApiBody)({
        type: proficient_dto_1.ProficientDTO
    }),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [proficient_dto_1.ProficientDTO, Number]),
    __metadata("design:returntype", Promise)
], ProficientController.prototype, "updateProficient", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de perito'
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProficientController.prototype, "deleteProficient", null);
ProficientController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('proficient'),
    (0, swagger_1.ApiTags)('proficient'),
    __metadata("design:paramtypes", [proficient_service_1.ProficientService])
], ProficientController);
exports.ProficientController = ProficientController;
//# sourceMappingURL=proficient.controller.js.map