"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatClarificationModule = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const chat_clarification_service_1 = require("./chat-clarification.service");
const chat_clarification_controller_1 = require("./chat-clarification.controller");
let ChatClarificationModule = class ChatClarificationModule {
};
ChatClarificationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'SERVICE_CHAT_CLARIFICATION',
                    transport: microservices_1.Transport.TCP,
                    options: {
                        host: '127.0.0.1',
                        port: 3002
                    }
                }
            ]),
        ],
        providers: [chat_clarification_service_1.ChatClarificationService],
        controllers: [chat_clarification_controller_1.ChatClarificationController]
    })
], ChatClarificationModule);
exports.ChatClarificationModule = ChatClarificationModule;
//# sourceMappingURL=chat-clarification.module.js.map