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
exports.StateOfRepublicController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const state_of_republic_service_1 = require("./state-of-republic.service");
const state_of_republic_dto_1 = require("./dto/state-of-republic.dto");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
let StateOfRepublicController = class StateOfRepublicController {
    constructor(stateOfRepublicService) {
        this.stateOfRepublicService = stateOfRepublicService;
    }
    createStateOfRepublic(stateOfRepublicDto) {
        return this.stateOfRepublicService.createStateOfRepublic(stateOfRepublicDto);
    }
    async getAllStateOfRepublics(pagination) {
        return await this.stateOfRepublicService.getAllStateOfRepublics(pagination);
    }
    async getStateOfRepublicByCode(stateCode) {
        return await this.stateOfRepublicService.getStateOfRepublicByCode(stateCode);
    }
    async updateStateOfRepublic(stateCode, stateData) {
        return await this.stateOfRepublicService.updateStateOfRepublic(stateCode, stateData);
    }
    async deleteStateOfRepublic(stateCode) {
        return await this.stateOfRepublicService.deleteStateOfRepublic(stateCode);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Guardar nueva estado de la repÚblica' }),
    (0, swagger_1.ApiBody)({
        type: state_of_republic_dto_1.StateOfRepublicDto,
        description: 'Información del estado de la república a guardar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Guarda estado de la república',
        type: state_of_republic_dto_1.StateOfRepublicDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [state_of_republic_dto_1.StateOfRepublicDto]),
    __metadata("design:returntype", void 0)
], StateOfRepublicController.prototype, "createStateOfRepublic", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener lista de todas los estado de la república' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de los estados de la república existenetes',
        type: state_of_republic_dto_1.StateOfRepublicDto,
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], StateOfRepublicController.prototype, "getAllStateOfRepublics", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener estado de la república por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador del estado de la república'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Estado de la república obtenida por su identificador',
        type: state_of_republic_dto_1.StateOfRepublicDto,
    }),
    (0, common_1.Get)(":stateCode"),
    __param(0, (0, common_1.Param)("stateCode")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StateOfRepublicController.prototype, "getStateOfRepublicByCode", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Modificar estado de la república' }),
    (0, swagger_1.ApiParam)({
        name: 'stateCode',
        description: 'Identificador cadena del estado de la república'
    }),
    (0, swagger_1.ApiBody)({
        type: state_of_republic_dto_1.StateOfRepublicDto,
        description: 'Objeto del estado de la república a modificar'
    }),
    (0, common_1.Put)(":stateCode"),
    __param(0, (0, common_1.Param)("stateCode")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, state_of_republic_dto_1.StateOfRepublicDto]),
    __metadata("design:returntype", Promise)
], StateOfRepublicController.prototype, "updateStateOfRepublic", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Borrar estado de la república por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'stateCode',
        description: 'Identificador cadena del estado de la república a borrar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borrar estado de la república por su identificador',
        type: state_of_republic_dto_1.StateOfRepublicDto,
    }),
    (0, common_1.Delete)(":stateCode"),
    __param(0, (0, common_1.Param)("stateCode")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StateOfRepublicController.prototype, "deleteStateOfRepublic", null);
StateOfRepublicController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('state-of-republic'),
    (0, swagger_1.ApiTags)('state-of-republic'),
    __metadata("design:paramtypes", [state_of_republic_service_1.StateOfRepublicService])
], StateOfRepublicController);
exports.StateOfRepublicController = StateOfRepublicController;
//# sourceMappingURL=state-of-republic.controller.js.map