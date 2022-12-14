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
exports.MediumPhotographyService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let MediumPhotographyService = class MediumPhotographyService {
    constructor(clientProxy) {
        this.clientProxy = clientProxy;
    }
    async getAllMediumPhotography(pagination) {
        const pattern = { cmd: 'getAllMediumPhotography' };
        return await this.clientProxy.send(pattern, pagination);
    }
    async getMediumPhotographyById(id) {
        const pattern = { cmd: 'getMediumPhotographyById' };
        return await this.clientProxy.send(pattern, id);
    }
    async createMediumPhotography(mediumPhotographyDTO) {
        const pattern = { cmd: 'createMediumPhotography' };
        return await this.clientProxy.send(pattern, mediumPhotographyDTO);
    }
    async updateMediumPhotography(mediumPhotographyDTO, id) {
        mediumPhotographyDTO.id = id;
        const pattern = { cmd: 'updateMediumPhotography' };
        return await this.clientProxy.send(pattern, mediumPhotographyDTO);
    }
    async deleteMediumPhotography(id) {
        const pattern = { cmd: 'deleteMediumPhotography' };
        return await this.clientProxy.send(pattern, parseInt(`${id}`));
    }
};
MediumPhotographyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SERVICE_SB_0001')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], MediumPhotographyService);
exports.MediumPhotographyService = MediumPhotographyService;
//# sourceMappingURL=medium-photography.service.js.map