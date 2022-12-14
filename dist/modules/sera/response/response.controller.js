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
exports.ResponseController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const response_service_1 = require("./response.service");
const response_dto_1 = require("./dto/response.dto");
let ResponseController = class ResponseController {
    constructor(responseService) {
        this.responseService = responseService;
    }
    async createResponse(responseDto) {
        return await this.responseService.createResponse(responseDto);
    }
    async getAllResponses(pagination) {
        return await this.responseService.getAllResponses(pagination);
    }
    async getResponseById(id) {
        return await this.responseService.getResponseById(id);
    }
    async updateResponse(idToUpdate, data) {
        return await this.responseService.updateResponse(idToUpdate, data);
    }
    async deleteResponse(id) {
        return await this.responseService.deleteResponse(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Guardar nueva respuesta' }),
    (0, swagger_1.ApiBody)({
        type: response_dto_1.ResponseDto,
        description: 'Información de la respuesta a guardar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Guarda respuesta',
        type: response_dto_1.ResponseDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [response_dto_1.ResponseDto]),
    __metadata("design:returntype", Promise)
], ResponseController.prototype, "createResponse", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener lista de todas las respuestas' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de respuestas existenetes',
        type: [pagination_dto_1.PaginationDto],
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], ResponseController.prototype, "getAllResponses", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener respuesta por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de la respuesta'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'respuesta obtenida por su identificador',
        type: response_dto_1.ResponseDto,
    }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ResponseController.prototype, "getResponseById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Modificar respuesta' }),
    (0, swagger_1.ApiParam)({
        name: 'idToUpdate',
        description: 'Identificador numérico de la respuesta'
    }),
    (0, swagger_1.ApiBody)({
        type: response_dto_1.ResponseDto,
        description: 'Objeto de la respuesta a modificar'
    }),
    (0, common_1.Put)(":idToUpdate"),
    __param(0, (0, common_1.Param)("idToUpdate")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, response_dto_1.ResponseDto]),
    __metadata("design:returntype", Promise)
], ResponseController.prototype, "updateResponse", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Borrar respuesta por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de la respuesta a borrar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borrar respuesta por su identificador',
        type: response_dto_1.ResponseDto,
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ResponseController.prototype, "deleteResponse", null);
ResponseController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('response'),
    (0, swagger_1.ApiTags)('response'),
    __metadata("design:paramtypes", [response_service_1.ResponseService])
], ResponseController);
exports.ResponseController = ResponseController;
//# sourceMappingURL=response.controller.js.map