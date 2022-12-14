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
exports.BatchDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class BatchDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador No Lote' }),
    __metadata("design:type", Number)
], BatchDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Identificador Almacen' }),
    __metadata("design:type", Number)
], BatchDTO.prototype, "no_almacen", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", Number)
], BatchDTO.prototype, "no_registro", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], BatchDTO.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Estado L, M, V' }),
    __metadata("design:type", String)
], BatchDTO.prototype, "estatus", void 0);
exports.BatchDTO = BatchDTO;
//# sourceMappingURL=batch.dto.js.map