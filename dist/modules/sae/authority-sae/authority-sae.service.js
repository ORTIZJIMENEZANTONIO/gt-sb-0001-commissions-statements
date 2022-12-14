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
exports.AuthoritySaeService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let AuthoritySaeService = class AuthoritySaeService {
    constructor(authorityProxy) {
        this.authorityProxy = authorityProxy;
    }
    async createAuthoritySae(authoritySae) {
        const pattern = { cmd: 'createAuthoritySae' };
        return await this.authorityProxy.send(pattern, authoritySae);
    }
    async getAllAuthoritiesSae(pagination) {
        const pattern = { cmd: 'getAllAuthoritiesSae' };
        return await this.authorityProxy.send(pattern, pagination);
    }
    async getAuthoritySaeById(id) {
        const pattern = { cmd: 'getAuthoritySaeById' };
        return await this.authorityProxy.send(pattern, id);
    }
    async updateAuthoritySae(idToUpdate, authoritySae) {
        const pattern = { cmd: 'updateAuthoritySae' };
        const body = Object.assign({ idToUpdate }, authoritySae);
        return await this.authorityProxy.send(pattern, body);
    }
    async deleteAuthoritySae(id) {
        const pattern = { cmd: 'deleteAuthoritySae' };
        return await this.authorityProxy.send(pattern, id);
    }
};
AuthoritySaeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SERVICE_AUTHORITY_SAE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], AuthoritySaeService);
exports.AuthoritySaeService = AuthoritySaeService;
//# sourceMappingURL=authority-sae.service.js.map