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
exports.DeductiveVerificationService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let DeductiveVerificationService = class DeductiveVerificationService {
    constructor(deductiveVerificationProxy) {
        this.deductiveVerificationProxy = deductiveVerificationProxy;
    }
    async createDeductiveVerification(createDeductiveVerificationDto) {
        const pattern = { cmd: 'createDeductiveVerification' };
        return await this.deductiveVerificationProxy.send(pattern, createDeductiveVerificationDto);
    }
    async getAllDeductiveVerifications(pagination) {
        const pattern = { cmd: 'getAllDeductivesVerifications' };
        return await this.deductiveVerificationProxy.send(pattern, pagination);
    }
    async getDeductiveVerificationById(id) {
        const pattern = { cmd: 'getDeductiveVerificationById' };
        return await this.deductiveVerificationProxy.send(pattern, id);
    }
    async updateDeductiveVerification(idToUpdate, body) {
        const pattern = { cmd: 'updateDeductiveVerification' };
        const data = Object.assign({ idToUpdate }, body);
        return await this.deductiveVerificationProxy.send(pattern, data);
    }
    async deleteDeductiveVerification(id) {
        const pattern = { cmd: 'deleteDeductiveVerification' };
        return await this.deductiveVerificationProxy.send(pattern, id);
    }
};
DeductiveVerificationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SERVICE_DEDUCTIVE_VERIFICATION')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], DeductiveVerificationService);
exports.DeductiveVerificationService = DeductiveVerificationService;
//# sourceMappingURL=deductive-verification.service.js.map