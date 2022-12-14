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
exports.ScoreController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const score_dto_1 = require("./dto/score.dto");
const score_service_1 = require("./score.service");
let ScoreController = class ScoreController {
    constructor(scoreService) {
        this.scoreService = scoreService;
    }
    async createScore(scoreDto) {
        return await this.scoreService.createScore(scoreDto);
    }
    async getAllScores(pagination) {
        return await this.scoreService.getAllScores(pagination);
    }
    async getScoreById(code) {
        return await this.scoreService.getScoreByCode(code);
    }
    async updateScore(codeToUpdate, data) {
        return await this.scoreService.updateScore(codeToUpdate, data);
    }
    async deleteScore(code) {
        return await this.scoreService.deleteScore(code);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Guardar nuevo puntaje' }),
    (0, swagger_1.ApiBody)({
        type: score_dto_1.ScoreDto,
        description: 'Información del puntaje a guardar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Guarda puntaje',
        type: score_dto_1.ScoreDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [score_dto_1.ScoreDto]),
    __metadata("design:returntype", Promise)
], ScoreController.prototype, "createScore", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener lista de todas las puntajes' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de puntajes existenetes',
        type: [pagination_dto_1.PaginationDto],
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], ScoreController.prototype, "getAllScores", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener puntaje por su id ej. 1' }),
    (0, swagger_1.ApiParam)({
        name: 'code',
        description: 'Identificador de la puntaje'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'puntaje obtenida por su identificador',
        type: score_dto_1.ScoreDto,
    }),
    (0, common_1.Get)(":code"),
    __param(0, (0, common_1.Param)("code")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ScoreController.prototype, "getScoreById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Modificar puntaje' }),
    (0, swagger_1.ApiParam)({
        name: 'codeToUpdate',
        description: 'Identificador del puntaje'
    }),
    (0, swagger_1.ApiBody)({
        type: score_dto_1.ScoreDto,
        description: 'Objeto de la puntaje a modificar'
    }),
    (0, common_1.Put)(":codeToUpdate"),
    __param(0, (0, common_1.Param)("codeToUpdate")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, score_dto_1.ScoreDto]),
    __metadata("design:returntype", Promise)
], ScoreController.prototype, "updateScore", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Borrar puntaje por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'code',
        description: 'Identificador de la puntaje '
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borrar puntaje por su identificador',
        type: score_dto_1.ScoreDto,
    }),
    (0, common_1.Delete)(":code"),
    __param(0, (0, common_1.Param)("code")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ScoreController.prototype, "deleteScore", null);
ScoreController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('score'),
    (0, swagger_1.ApiTags)('score'),
    __metadata("design:paramtypes", [score_service_1.ScoreService])
], ScoreController);
exports.ScoreController = ScoreController;
//# sourceMappingURL=score.controller.js.map