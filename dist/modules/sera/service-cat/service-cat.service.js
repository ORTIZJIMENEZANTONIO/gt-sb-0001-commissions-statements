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
exports.ServiceCatService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let ServiceCatService = class ServiceCatService {
    constructor(serviceProxy) {
        this.serviceProxy = serviceProxy;
    }
    async createService(serviceCat) {
        const pattern = { cmd: 'createServiceCat' };
        return await this.serviceProxy.send(pattern, serviceCat);
    }
    async getAllServices(pagination) {
        const pattern = { cmd: 'getAllServiceCats' };
        return await this.serviceProxy.send(pattern, pagination);
    }
    async getServiceByCode(code) {
        const pattern = { cmd: 'getServiceByCode' };
        return await this.serviceProxy.send(pattern, code);
    }
    async updateService(codeToUpdate, serviceCat) {
        const pattern = { cmd: 'updateServiceCat' };
        const body = Object.assign({ codeToUpdate }, serviceCat);
        return await this.serviceProxy.send(pattern, body);
    }
    async deleteService(code) {
        const pattern = { cmd: 'deleteServiceCat' };
        return await this.serviceProxy.send(pattern, code);
    }
};
ServiceCatService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SERVICE_SERVICE_CAT')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], ServiceCatService);
exports.ServiceCatService = ServiceCatService;
//# sourceMappingURL=service-cat.service.js.map