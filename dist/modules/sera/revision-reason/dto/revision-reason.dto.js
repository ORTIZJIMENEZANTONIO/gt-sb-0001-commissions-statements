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
exports.RevisionReasonDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class RevisionReasonDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador Motivo revision' }),
    __metadata("design:type", Number)
], RevisionReasonDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Estado inicial de la revision' }),
    __metadata("design:type", String)
], RevisionReasonDTO.prototype, "estatus_inicial", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripcion motivo revision' }),
    __metadata("design:type", String)
], RevisionReasonDTO.prototype, "descripcion_motivo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], RevisionReasonDTO.prototype, "tipo_bien", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], RevisionReasonDTO.prototype, "estatus_rev", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], RevisionReasonDTO.prototype, "area_responsable", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], RevisionReasonDTO.prototype, "estatus_fin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], RevisionReasonDTO.prototype, "pantalla", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], RevisionReasonDTO.prototype, "parametro", void 0);
exports.RevisionReasonDTO = RevisionReasonDTO;
//# sourceMappingURL=revision-reason.dto.js.map