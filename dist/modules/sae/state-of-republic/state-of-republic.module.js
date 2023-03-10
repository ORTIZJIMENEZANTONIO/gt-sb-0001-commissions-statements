"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateOfRepublicModule = void 0;
const common_1 = require("@nestjs/common");
const state_of_republic_controller_1 = require("./state-of-republic.controller");
const microservices_1 = require("@nestjs/microservices");
const state_of_republic_service_1 = require("./state-of-republic.service");
let StateOfRepublicModule = class StateOfRepublicModule {
};
StateOfRepublicModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'SERVICE_STATE_OF_REPUBLIC',
                    transport: microservices_1.Transport.TCP,
                    options: {
                        host: '127.0.0.1',
                        port: 3002
                    }
                }
            ]),
        ],
        providers: [state_of_republic_service_1.StateOfRepublicService],
        controllers: [state_of_republic_controller_1.StateOfRepublicController],
    })
], StateOfRepublicModule);
exports.StateOfRepublicModule = StateOfRepublicModule;
//# sourceMappingURL=state-of-republic.module.js.map