"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthoritySaeModule = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const authority_sae_service_1 = require("./authority-sae.service");
const authority_sae_controller_1 = require("./authority-sae.controller");
let AuthoritySaeModule = class AuthoritySaeModule {
};
AuthoritySaeModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'SERVICE_AUTHORITY_SAE',
                    transport: microservices_1.Transport.TCP,
                    options: {
                        host: '127.0.0.1',
                        port: 3002
                    }
                }
            ]),
        ],
        providers: [authority_sae_service_1.AuthoritySaeService],
        controllers: [authority_sae_controller_1.AuthoritySaeController]
    })
], AuthoritySaeModule);
exports.AuthoritySaeModule = AuthoritySaeModule;
//# sourceMappingURL=authority-sae.module.js.map