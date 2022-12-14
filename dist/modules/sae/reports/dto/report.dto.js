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
exports.ReportDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class ReportDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Id del documento' }),
    __metadata("design:type", Number)
], ReportDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Nombre del reporte' }),
    __metadata("design:type", String)
], ReportDTO.prototype, "nombre_reporte", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador tipo de documento' }),
    __metadata("design:type", Number)
], ReportDTO.prototype, "id_tipo_docto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Contenido del reporte' }),
    __metadata("design:type", Number)
], ReportDTO.prototype, "contenido", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], ReportDTO.prototype, "usuario_creacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", Date)
], ReportDTO.prototype, "fecha_creacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], ReportDTO.prototype, "usuario_modificacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", Date)
], ReportDTO.prototype, "fecha_modificacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", Number)
], ReportDTO.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Tipo de reporte' }),
    __metadata("design:type", String)
], ReportDTO.prototype, "tipo_reporte", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Nombre de la secuencia' }),
    __metadata("design:type", Number)
], ReportDTO.prototype, "nombre_secuencia_folio", void 0);
exports.ReportDTO = ReportDTO;
//# sourceMappingURL=report.dto.js.map