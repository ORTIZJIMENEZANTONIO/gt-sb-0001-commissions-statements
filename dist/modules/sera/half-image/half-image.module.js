"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HalfImageModule = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const half_image_controller_1 = require("./half-image.controller");
const half_image_service_1 = require("./half-image.service");
let HalfImageModule = class HalfImageModule {
};
HalfImageModule = __decorate([
    (0, common_1.Module)({
        controllers: [half_image_controller_1.HalfImageController],
        providers: [half_image_service_1.HalfImageService,
        ],
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
        ]
    })
], HalfImageModule);
exports.HalfImageModule = HalfImageModule;
//# sourceMappingURL=half-image.module.js.map