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
exports.ZipCodeService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let ZipCodeService = class ZipCodeService {
    constructor(zipCodeProxy) {
        this.zipCodeProxy = zipCodeProxy;
    }
    async createZipCode(createZipCodeDto) {
        const pattern = { cmd: 'createZipCode' };
        return await this.zipCodeProxy.send(pattern, createZipCodeDto);
    }
    async getAllZipCodes(pagination) {
        const pattern = { cmd: 'getAllZipCodes' };
        return await this.zipCodeProxy.send(pattern, pagination);
    }
    async getZipCodeByCode(code) {
        const pattern = { cmd: 'getZipCodeByCode' };
        return await this.zipCodeProxy.send(pattern, code);
    }
    async updateZipCode(codeToUpdate, body) {
        const pattern = { cmd: 'updateZipCode' };
        const data = Object.assign({ codeToUpdate }, body);
        return await this.zipCodeProxy.send(pattern, data);
    }
    async deleteZipCode(code) {
        const pattern = { cmd: 'deleteZipCode' };
        return await this.zipCodeProxy.send(pattern, code);
    }
};
ZipCodeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SERVICE_ZIP_CODE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], ZipCodeService);
exports.ZipCodeService = ZipCodeService;
//# sourceMappingURL=zip-code.service.js.map