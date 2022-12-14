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
exports.IndicatorReportDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class IndicatorReportDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Indentificador reporte indicadores' }),
    __metadata("design:type", Number)
], IndicatorReportDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], IndicatorReportDTO.prototype, "tipo_servicio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Porcentaje inicial' }),
    __metadata("design:type", Number)
], IndicatorReportDTO.prototype, "rango_porcentaje_inicial", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Porcentaje final' }),
    __metadata("design:type", Number)
], IndicatorReportDTO.prototype, "rango_porcentaje_final", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", Number)
], IndicatorReportDTO.prototype, "pena_convencional", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], IndicatorReportDTO.prototype, "no_contrato", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], IndicatorReportDTO.prototype, "usuario_creacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", Date)
], IndicatorReportDTO.prototype, "fecha_creacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], IndicatorReportDTO.prototype, "usuario_modificacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", Date)
], IndicatorReportDTO.prototype, "fecha_modificacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", Number)
], IndicatorReportDTO.prototype, "estatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", Number)
], IndicatorReportDTO.prototype, "version", void 0);
exports.IndicatorReportDTO = IndicatorReportDTO;
//# sourceMappingURL=indicator-report.dto.js.map