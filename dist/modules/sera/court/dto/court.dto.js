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
exports.CourtDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class CourtDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Nro identificador de juzagado' }),
    __metadata("design:type", Number)
], CourtDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripcion de juzgado' }),
    __metadata("design:type", String)
], CourtDTO.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], CourtDTO.prototype, "responsable", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Direccion' }),
    __metadata("design:type", String)
], CourtDTO.prototype, "calle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], CourtDTO.prototype, "no_exterior", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], CourtDTO.prototype, "no_interior", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Colonia' }),
    __metadata("design:type", String)
], CourtDTO.prototype, "colonia", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Delegacion Municipal' }),
    __metadata("design:type", String)
], CourtDTO.prototype, "deleg_munic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", Number)
], CourtDTO.prototype, "codigo_postal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Telefono de contacto' }),
    __metadata("design:type", String)
], CourtDTO.prototype, "telefono", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], CourtDTO.prototype, "cve_circuito", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número de registro' }),
    __metadata("design:type", Number)
], CourtDTO.prototype, "no_registro", void 0);
exports.CourtDTO = CourtDTO;
//# sourceMappingURL=court.dto.js.map