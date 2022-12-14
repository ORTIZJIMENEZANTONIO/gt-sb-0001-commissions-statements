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
exports.PenaltyDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class PenaltyDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Id del registro de penalización' }),
    __metadata("design:type", Number)
], PenaltyDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Tipo de penalización' }),
    __metadata("design:type", String)
], PenaltyDTO.prototype, "tipo_servicio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", Number)
], PenaltyDTO.prototype, "porcentaje_penalizacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Dias de duracion de la penalización' }),
    __metadata("design:type", Number)
], PenaltyDTO.prototype, "dias_equivalente", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que creo el registro' }),
    __metadata("design:type", String)
], PenaltyDTO.prototype, "usuario_creacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de creación de la penalización' }),
    __metadata("design:type", Date)
], PenaltyDTO.prototype, "fecha_creacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Usuario que modificó el registro' }),
    __metadata("design:type", String)
], PenaltyDTO.prototype, "usuario_modificacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fecha de modificacion de la penalizacion' }),
    __metadata("design:type", Date)
], PenaltyDTO.prototype, "fecha_modificacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", Number)
], PenaltyDTO.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Estado de la penalización' }),
    __metadata("design:type", Number)
], PenaltyDTO.prototype, "estatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Numero de contrato' }),
    __metadata("design:type", String)
], PenaltyDTO.prototype, "no_contrato", void 0);
exports.PenaltyDTO = PenaltyDTO;
//# sourceMappingURL=penalty.dto.js.map