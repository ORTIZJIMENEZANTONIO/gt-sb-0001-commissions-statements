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
exports.ComerPenaltyController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const comer_penalty_service_1 = require("./comer-penalty.service");
const get_final_date_dto_1 = require("./dto/get-final-date.dto");
const register_penalty_dto_1 = require("./dto/register-penalty.dto");
const release_penalty_dto_1 = require("./dto/release-penalty.dto");
const reverse_penalty_dto_1 = require("./dto/reverse-penalty.dto");
const update_penaly_dto_1 = require("./dto/update-penaly.dto");
let ComerPenaltyController = class ComerPenaltyController {
    constructor(service) {
        this.service = service;
    }
    async registerPenalty(data) {
        return await this.service.registerPenalty(data);
    }
    async updatePenalty(data) {
        return await this.service.updatePenalty(data);
    }
    async releasePenalty(data) {
        return await this.service.releasePenalty(data);
    }
    async getFinalDate(data) {
        return await this.service.getFinalDate(data);
    }
    async penaltyReverse(data) {
        return await this.service.penaltyReverse(data);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'PA_REGISTRA_PENALIZACION' }),
    (0, swagger_1.ApiBody)({
        type: register_penalty_dto_1.RegisterPenaltyDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Fecha final',
        type: String,
    }),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_penalty_dto_1.RegisterPenaltyDto]),
    __metadata("design:returntype", Promise)
], ComerPenaltyController.prototype, "registerPenalty", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'PA_ACTUALIZA_PENALIZACION' }),
    (0, swagger_1.ApiBody)({
        type: update_penaly_dto_1.UpdatePenaltyDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Información de penalización actualizada',
        type: String,
    }),
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_penaly_dto_1.UpdatePenaltyDto]),
    __metadata("design:returntype", Promise)
], ComerPenaltyController.prototype, "updatePenalty", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'PA_LIBERA_PENALIZACION' }),
    (0, swagger_1.ApiBody)({
        type: release_penalty_dto_1.ReleasePenaltyDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Liberar penalización',
        type: String,
    }),
    (0, common_1.Post)('release'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [release_penalty_dto_1.ReleasePenaltyDto]),
    __metadata("design:returntype", Promise)
], ComerPenaltyController.prototype, "releasePenalty", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'FN_FECHA_FINAL' }),
    (0, swagger_1.ApiBody)({
        type: get_final_date_dto_1.FinalDateDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Fecha final',
        type: String,
    }),
    (0, common_1.Post)('final-date'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_final_date_dto_1.FinalDateDto]),
    __metadata("design:returntype", Promise)
], ComerPenaltyController.prototype, "getFinalDate", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'PA_REVERSA_PENALIZACION' }),
    (0, swagger_1.ApiBody)({
        type: reverse_penalty_dto_1.ReversePenaltyDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Fecha final',
        type: String,
    }),
    (0, common_1.Post)('reverse'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reverse_penalty_dto_1.ReversePenaltyDto]),
    __metadata("design:returntype", Promise)
], ComerPenaltyController.prototype, "penaltyReverse", null);
ComerPenaltyController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('comer-penalty'),
    (0, swagger_1.ApiTags)('comer-penalty'),
    __metadata("design:paramtypes", [comer_penalty_service_1.ComerPenaltyService])
], ComerPenaltyController);
exports.ComerPenaltyController = ComerPenaltyController;
//# sourceMappingURL=comer-penalty.controller.js.map