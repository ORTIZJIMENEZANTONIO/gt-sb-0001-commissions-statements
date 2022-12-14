"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuingInstitutionModule = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const issuing_institution_controller_1 = require("./issuing-institution.controller");
const issuing_institution_service_1 = require("./issuing-institution.service");
let IssuingInstitutionModule = class IssuingInstitutionModule {
};
IssuingInstitutionModule = __decorate([
    (0, common_1.Module)({
        controllers: [issuing_institution_controller_1.IssuingInstitutionController],
        providers: [
            issuing_institution_service_1.IssuingInstitutionService,
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
], IssuingInstitutionModule);
exports.IssuingInstitutionModule = IssuingInstitutionModule;
//# sourceMappingURL=issuing-institution.module.js.map