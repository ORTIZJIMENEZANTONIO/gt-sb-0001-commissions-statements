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
exports.NotaryDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class NotaryDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de notario' }),
    __metadata("design:type", Number)
], NotaryDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Nombre completo de notario' }),
    __metadata("design:type", String)
], NotaryDTO.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], NotaryDTO.prototype, "valido", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de notaria' }),
    __metadata("design:type", Number)
], NotaryDTO.prototype, "no_notaria", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], NotaryDTO.prototype, "ubicacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], NotaryDTO.prototype, "domicilio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Teléfono de contacto' }),
    __metadata("design:type", String)
], NotaryDTO.prototype, "telefono", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Correo electronico de notario' }),
    __metadata("design:type", String)
], NotaryDTO.prototype, "correo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número de registro' }),
    __metadata("design:type", Number)
], NotaryDTO.prototype, "no_registro", void 0);
exports.NotaryDTO = NotaryDTO;
//# sourceMappingURL=notary.dto.js.map