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
exports.PersonDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class PersonDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Nro identificador de persona' }),
    __metadata("design:type", Number)
], PersonDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], PersonDTO.prototype, "nom_persona", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Nombre completo' }),
    __metadata("design:type", String)
], PersonDTO.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Dirección' }),
    __metadata("design:type", String)
], PersonDTO.prototype, "calle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], PersonDTO.prototype, "no_exterior", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], PersonDTO.prototype, "no_interior", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Colonia' }),
    __metadata("design:type", String)
], PersonDTO.prototype, "colonia", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Delegacion municipal' }),
    __metadata("design:type", String)
], PersonDTO.prototype, "deleg_munic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Codigo postal' }),
    __metadata("design:type", Number)
], PersonDTO.prototype, "codigo_postal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], PersonDTO.prototype, "rfc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], PersonDTO.prototype, "curp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'telefono de contacto' }),
    __metadata("design:type", String)
], PersonDTO.prototype, "telefono", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], PersonDTO.prototype, "tipo_persona", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], PersonDTO.prototype, "tipo_responsable", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], PersonDTO.prototype, "representante", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], PersonDTO.prototype, "no_escritura", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Profesión' }),
    __metadata("design:type", String)
], PersonDTO.prototype, "profesion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], PersonDTO.prototype, "curriculum", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], PersonDTO.prototype, "cve_entfed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], PersonDTO.prototype, "cve_giro", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], PersonDTO.prototype, "observaciones", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], PersonDTO.prototype, "perfil", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Antecedentes SECODAm' }),
    __metadata("design:type", String)
], PersonDTO.prototype, "antecedentes_secodam", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Antecedentes PGR' }),
    __metadata("design:type", String)
], PersonDTO.prototype, "antecedentes_pgr", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Antecedentes PFF' }),
    __metadata("design:type", String)
], PersonDTO.prototype, "antecedentes_pff", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Antecedentes SERA' }),
    __metadata("design:type", String)
], PersonDTO.prototype, "antecedentes_sera", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Antecedentes OTROS' }),
    __metadata("design:type", String)
], PersonDTO.prototype, "antecedentes_otros", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", Number)
], PersonDTO.prototype, "no_registro", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Correo electronico' }),
    __metadata("design:type", String)
], PersonDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], PersonDTO.prototype, "lista_negra", void 0);
exports.PersonDTO = PersonDTO;
//# sourceMappingURL=person.dto.js.map