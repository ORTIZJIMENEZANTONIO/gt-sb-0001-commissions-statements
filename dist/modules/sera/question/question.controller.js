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
exports.QuestionController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const question_service_1 = require("./question.service");
const question_dto_1 = require("./dto/question.dto");
let QuestionController = class QuestionController {
    constructor(questionService) {
        this.questionService = questionService;
    }
    async createQuestion(questionDto) {
        return await this.questionService.createQuestion(questionDto);
    }
    async getAllQuestions(pagination) {
        return await this.questionService.getAllQuestions(pagination);
    }
    async getQuestionById(id) {
        return await this.questionService.getQuestionById(id);
    }
    async updateQuestion(idToUpdate, data) {
        return await this.questionService.updateQuestion(idToUpdate, data);
    }
    async deleteQuestion(id) {
        return await this.questionService.deleteQuestion(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Guardar nueva pregunta' }),
    (0, swagger_1.ApiBody)({
        type: question_dto_1.QuestionDto,
        description: 'Información de la pregunta a guardar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Guarda pregunta',
        type: question_dto_1.QuestionDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [question_dto_1.QuestionDto]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "createQuestion", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener lista de todas las preguntas' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de preguntas existenetes',
        type: [pagination_dto_1.PaginationDto],
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "getAllQuestions", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener pregunta por su id ej. 1' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de la pregunta'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Pregunta obtenida por su identificador',
        type: question_dto_1.QuestionDto,
    }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "getQuestionById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Modificar pregunta' }),
    (0, swagger_1.ApiParam)({
        name: 'idToUpdate',
        description: 'Identificador numérico de la pregunta'
    }),
    (0, swagger_1.ApiBody)({
        type: question_dto_1.QuestionDto,
        description: 'Objeto de la pregunta a modificar'
    }),
    (0, common_1.Put)(":idToUpdate"),
    __param(0, (0, common_1.Param)("idToUpdate")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, question_dto_1.QuestionDto]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "updateQuestion", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Borrar pregunta por su id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de la pregunta a borrar'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Borrar pregunta por su identificador',
        type: question_dto_1.QuestionDto,
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "deleteQuestion", null);
QuestionController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('question'),
    (0, swagger_1.ApiTags)('question'),
    __metadata("design:paramtypes", [question_service_1.QuestionService])
], QuestionController);
exports.QuestionController = QuestionController;
//# sourceMappingURL=question.controller.js.map