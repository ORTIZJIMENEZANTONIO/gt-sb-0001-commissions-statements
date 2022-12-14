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
exports.ChatClarificationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const chat_clarification_service_1 = require("./chat-clarification.service");
const chat_clarification_dto_1 = require("./dto/chat-clarification.dto");
let ChatClarificationController = class ChatClarificationController {
    constructor(chatClarificationService) {
        this.chatClarificationService = chatClarificationService;
    }
    async createChatClarification(chatClarificationDto) {
        return await this.chatClarificationService.createChatClarification(chatClarificationDto);
    }
    async getAllChatClarifications(pagination) {
        return await this.chatClarificationService.getAllChatClarifications(pagination);
    }
    async getChatClarificationById(id) {
        return await this.chatClarificationService.getChatClarificationById(id);
    }
    async updateChatClarification(idToUpdate, data) {
        return await this.chatClarificationService.updateChatClarification(idToUpdate, data);
    }
    async deleteChatClarification(id) {
        return await this.chatClarificationService.deleteChatClarification(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Guardar chat clarificación' }),
    (0, swagger_1.ApiBody)({
        type: chat_clarification_dto_1.ChatClarificationDto,
        description: 'Información del chat clarificación a guardar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Guarda tipo de chat clarificación',
        type: chat_clarification_dto_1.ChatClarificationDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [chat_clarification_dto_1.ChatClarificationDto]),
    __metadata("design:returntype", Promise)
], ChatClarificationController.prototype, "createChatClarification", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener lista de todos los chat chat clarificación' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de los chat clarificación existentes',
        type: chat_clarification_dto_1.ChatClarificationDto,
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], ChatClarificationController.prototype, "getAllChatClarifications", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener chat clarificación por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de chat clarificación'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'tipo de chat clarificación obtenida por su identificador',
        type: chat_clarification_dto_1.ChatClarificationDto,
    }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ChatClarificationController.prototype, "getChatClarificationById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Modificar tipo de chat clarificación' }),
    (0, swagger_1.ApiParam)({
        name: 'idToUpdate',
        description: 'Identificador numérico del tipo de chat clarificación'
    }),
    (0, swagger_1.ApiBody)({
        type: chat_clarification_dto_1.ChatClarificationDto,
        description: 'Objeto del tipo de chat clarificación a modificar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borrar tipo de chat clarificación por su identificador',
        type: chat_clarification_dto_1.ChatClarificationDto,
    }),
    (0, common_1.Put)(":idToUpdate"),
    __param(0, (0, common_1.Param)("idToUpdate")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, chat_clarification_dto_1.ChatClarificationDto]),
    __metadata("design:returntype", Promise)
], ChatClarificationController.prototype, "updateChatClarification", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Borrar tipo de chat clarificación por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador cadena del tipo de chat clarificación a borrar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borrar tipo de chat clarificación por su identificador',
        type: chat_clarification_dto_1.ChatClarificationDto,
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ChatClarificationController.prototype, "deleteChatClarification", null);
ChatClarificationController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('chat-clarification'),
    (0, swagger_1.ApiTags)('chat-clarification'),
    __metadata("design:paramtypes", [chat_clarification_service_1.ChatClarificationService])
], ChatClarificationController);
exports.ChatClarificationController = ChatClarificationController;
//# sourceMappingURL=chat-clarification.controller.js.map