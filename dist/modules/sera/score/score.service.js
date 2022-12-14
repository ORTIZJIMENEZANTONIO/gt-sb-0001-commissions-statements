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
exports.ScoreService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let ScoreService = class ScoreService {
    constructor(scoreProxy) {
        this.scoreProxy = scoreProxy;
    }
    async createScore(score) {
        const pattern = { cmd: 'createScore' };
        return await this.scoreProxy.send(pattern, score);
    }
    async getAllScores(pagination) {
        const pattern = { cmd: 'getAllScores' };
        return await this.scoreProxy.send(pattern, pagination);
    }
    async getScoreByCode(code) {
        const pattern = { cmd: 'getScoreByCode' };
        return await this.scoreProxy.send(pattern, code);
    }
    async updateScore(codeToUpdate, score) {
        const pattern = { cmd: 'updateScore' };
        const body = Object.assign({ codeToUpdate }, score);
        return await this.scoreProxy.send(pattern, body);
    }
    async deleteScore(code) {
        const pattern = { cmd: 'deleteScore' };
        return await this.scoreProxy.send(pattern, code);
    }
};
ScoreService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SERVICE_SCORE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], ScoreService);
exports.ScoreService = ScoreService;
//# sourceMappingURL=score.service.js.map