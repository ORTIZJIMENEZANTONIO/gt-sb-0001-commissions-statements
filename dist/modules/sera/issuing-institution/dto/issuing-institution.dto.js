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
exports.IssuingInstitutionDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class IssuingInstitutionDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Nro identificador institucion emisora' }),
    __metadata("design:type", Number)
], IssuingInstitutionDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Nombre de institucion' }),
    __metadata("design:type", String)
], IssuingInstitutionDTO.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Decripcion' }),
    __metadata("design:type", String)
], IssuingInstitutionDTO.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Responsable' }),
    __metadata("design:type", String)
], IssuingInstitutionDTO.prototype, "responsable", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Direccion de institucion' }),
    __metadata("design:type", String)
], IssuingInstitutionDTO.prototype, "calle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], IssuingInstitutionDTO.prototype, "no_interior", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], IssuingInstitutionDTO.prototype, "no_exterior", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Colonia' }),
    __metadata("design:type", String)
], IssuingInstitutionDTO.prototype, "colonia", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Codigo Postal' }),
    __metadata("design:type", Number)
], IssuingInstitutionDTO.prototype, "codigo_postal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], IssuingInstitutionDTO.prototype, "deleg_munic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Teléfono' }),
    __metadata("design:type", String)
], IssuingInstitutionDTO.prototype, "telefono", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Nro de clasificacion' }),
    __metadata("design:type", Number)
], IssuingInstitutionDTO.prototype, "no_clasificacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador de ciudad' }),
    __metadata("design:type", Number)
], IssuingInstitutionDTO.prototype, "no_ciudad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Nro de registro' }),
    __metadata("design:type", Number)
], IssuingInstitutionDTO.prototype, "no_registro", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador transferente' }),
    __metadata("design:type", Number)
], IssuingInstitutionDTO.prototype, "no_transferente", void 0);
exports.IssuingInstitutionDTO = IssuingInstitutionDTO;
//# sourceMappingURL=issuing-institution.dto.js.map