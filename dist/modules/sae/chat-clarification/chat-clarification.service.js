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
exports.ChatClarificationService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let ChatClarificationService = class ChatClarificationService {
    constructor(chatClarificationProxy) {
        this.chatClarificationProxy = chatClarificationProxy;
    }
    async createChatClarification(chatClarification) {
        const pattern = { cmd: 'createChatClarification' };
        return await this.chatClarificationProxy.send(pattern, chatClarification);
    }
    async getAllChatClarifications(pagination) {
        const pattern = { cmd: 'getAllChatClarifications' };
        return await this.chatClarificationProxy.send(pattern, pagination);
    }
    async getChatClarificationById(id) {
        const pattern = { cmd: 'getChatClarificationById' };
        return await this.chatClarificationProxy.send(pattern, id);
    }
    async updateChatClarification(idToUpdate, chatClarification) {
        const pattern = { cmd: 'updateChatClarification' };
        const body = Object.assign({ idToUpdate }, chatClarification);
        return await this.chatClarificationProxy.send(pattern, body);
    }
    async deleteChatClarification(id) {
        const pattern = { cmd: 'deleteChatClarification' };
        return await this.chatClarificationProxy.send(pattern, id);
    }
};
ChatClarificationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SERVICE_CHAT_CLARIFICATION')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], ChatClarificationService);
exports.ChatClarificationService = ChatClarificationService;
//# sourceMappingURL=chat-clarification.service.js.map