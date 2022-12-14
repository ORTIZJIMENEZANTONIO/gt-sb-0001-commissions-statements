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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediumPhotographyDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class MediumPhotographyDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador medio fotografia' }),
    __metadata("design:type", Number)
], MediumPhotographyDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ruta de la imagen' }),
    __metadata("design:type", String)
], MediumPhotographyDTO.prototype, "ruta", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Estatus' }),
    __metadata("design:type", String)
], MediumPhotographyDTO.prototype, "estatus", void 0);
exports.MediumPhotographyDTO = MediumPhotographyDTO;
//# sourceMappingURL=medium-photography.dto.js.map