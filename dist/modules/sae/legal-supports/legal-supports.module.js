"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegalSupportsModule = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const legal_supports_controller_1 = require("./legal-supports.controller");
const legal_supports_service_1 = require("./legal-supports.service");
let LegalSupportsModule = class LegalSupportsModule {
};
LegalSupportsModule = __decorate([
    (0, common_1.Module)({
        controllers: [legal_supports_controller_1.LegalSupportsController],
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'SERVICE_SB_0001',
                    transport: microservices_1.Transport.TCP,
                    options: {
                        host: '127.0.0.1',
                        port: 3002,
                    },
                }
            ])
        ],
        providers: [legal_supports_service_1.LegalSupportsService]
    })
], LegalSupportsModule);
exports.LegalSupportsModule = LegalSupportsModule;
//# sourceMappingURL=legal-supports.module.js.map