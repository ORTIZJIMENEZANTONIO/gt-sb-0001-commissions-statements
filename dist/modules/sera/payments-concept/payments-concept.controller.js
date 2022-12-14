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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsConceptController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const payment_concept_dto_1 = require("./dto/payment-concept.dto");
const payments_concept_service_1 = require("./payments-concept.service");
let PaymentsConceptController = class PaymentsConceptController {
    constructor(paymentsConceptService) {
        this.paymentsConceptService = paymentsConceptService;
    }
    async getAllPaymentsConcept(pagination) {
        return await this.paymentsConceptService.getAllPaymentsConcept(pagination);
    }
    async getPaymentsConceptById(id) {
        return await this.paymentsConceptService.getPaymentsConceptById(id);
    }
    async createPaymentsConcept(paymentsConceptDTO) {
        return await this.paymentsConceptService.createPaymentsConcept(paymentsConceptDTO);
    }
    async updatePaymentsConcept(paymentsConceptDTO, id) {
        return await this.paymentsConceptService.updatePaymentsConcept(paymentsConceptDTO, id);
    }
    async deletePaymentsConcept(id) {
        return await this.paymentsConceptService.deletePaymentsConcept(parseInt(`${id}`));
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: [payment_concept_dto_1.PaymentsConceptDTO]
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], PaymentsConceptController.prototype, "getAllPaymentsConcept", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: payment_concept_dto_1.PaymentsConceptDTO
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador concepto de pago'
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PaymentsConceptController.prototype, "getPaymentsConceptById", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: payment_concept_dto_1.PaymentsConceptDTO
    }),
    (0, swagger_1.ApiBody)({
        type: payment_concept_dto_1.PaymentsConceptDTO
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [payment_concept_dto_1.PaymentsConceptDTO]),
    __metadata("design:returntype", Promise)
], PaymentsConceptController.prototype, "createPaymentsConcept", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'cve',
        description: 'CVE concepto de pago'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: payment_concept_dto_1.PaymentsConceptDTO
    }),
    (0, swagger_1.ApiBody)({
        type: payment_concept_dto_1.PaymentsConceptDTO
    }),
    (0, common_1.Put)(":cve"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("cve")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [payment_concept_dto_1.PaymentsConceptDTO, Number]),
    __metadata("design:returntype", Promise)
], PaymentsConceptController.prototype, "updatePaymentsConcept", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'cve',
        description: 'CVE concepto de pago '
    }),
    (0, common_1.Delete)(":cve"),
    __param(0, (0, common_1.Param)("cve")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PaymentsConceptController.prototype, "deletePaymentsConcept", null);
PaymentsConceptController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('payments-concept'),
    (0, swagger_1.ApiTags)('payments-concept'),
    __metadata("design:paramtypes", [payments_concept_service_1.PaymentsConceptService])
], PaymentsConceptController);
exports.PaymentsConceptController = PaymentsConceptController;
//# sourceMappingURL=payments-concept.controller.js.map