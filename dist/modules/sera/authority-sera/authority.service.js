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
exports.AuthorityService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let AuthorityService = class AuthorityService {
    constructor(authorityProxy) {
        this.authorityProxy = authorityProxy;
    }
    async createAuthority(authority) {
        const pattern = { cmd: 'createAuthority' };
        return await this.authorityProxy.send(pattern, authority);
    }
    async getAllAuthorities(pagination) {
        const pattern = { cmd: 'getAllAuthorities' };
        return await this.authorityProxy.send(pattern, pagination);
    }
    async getAuthorityById(id) {
        const pattern = { cmd: 'getAuthorityById' };
        return await this.authorityProxy.send(pattern, id);
    }
    async updateAuthority(idToUpdate, authority) {
        const pattern = { cmd: 'updateAuthority' };
        const body = Object.assign({ idToUpdate }, authority);
        return await this.authorityProxy.send(pattern, body);
    }
    async deleteAuthority(id) {
        const pattern = { cmd: 'deleteAuthority' };
        return await this.authorityProxy.send(pattern, id);
    }
};
AuthorityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SERVICE_AUTHORITY_SERA')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], AuthorityService);
exports.AuthorityService = AuthorityService;
//# sourceMappingURL=authority.service.js.map