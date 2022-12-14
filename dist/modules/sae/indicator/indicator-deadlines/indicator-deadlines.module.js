"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndicatorDeadlinesModule = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const indicator_deadlines_controller_1 = require("./indicator-deadlines.controller");
const indicator_deadlines_service_1 = require("./indicator-deadlines.service");
let IndicatorDeadlinesModule = class IndicatorDeadlinesModule {
};
IndicatorDeadlinesModule = __decorate([
    (0, common_1.Module)({
        controllers: [indicator_deadlines_controller_1.IndicatorDeadlinesController],
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'SERVICE_DEADLINES_INDICATOR',
                    transport: microservices_1.Transport.TCP,
                    options: {
                        host: '127.0.0.1',
                        port: 3002,
                    },
                }
            ])
        ],
        providers: [indicator_deadlines_service_1.IndicatorDeadlinesService]
    })
], IndicatorDeadlinesModule);
exports.IndicatorDeadlinesModule = IndicatorDeadlinesModule;
//# sourceMappingURL=indicator-deadlines.module.js.map