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
exports.LocalityDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class LocalityDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Codigo identificador de la localidad' }),
    __metadata("design:type", Number)
], LocalityDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripcion' }),
    __metadata("design:type", String)
], LocalityDTO.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Codigo identificador del Municipio' }),
    __metadata("design:type", Number)
], LocalityDTO.prototype, "codigo_municipio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], LocalityDTO.prototype, "cod_entfed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador delegacion' }),
    __metadata("design:type", Number)
], LocalityDTO.prototype, "no_delegacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Número de registro' }),
    __metadata("design:type", Number)
], LocalityDTO.prototype, "no_registro", void 0);
exports.LocalityDTO = LocalityDTO;
//# sourceMappingURL=locality.dto.js.map