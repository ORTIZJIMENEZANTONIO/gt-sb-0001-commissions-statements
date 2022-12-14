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
exports.PersonController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const person_dto_1 = require("./dto/person.dto");
const person_service_1 = require("./person.service");
let PersonController = class PersonController {
    constructor(personService) {
        this.personService = personService;
    }
    async getAllPerson(pagination) {
        return await this.personService.getAllPerson(pagination);
    }
    async getPersonById(id) {
        return await this.personService.getPersonById(id);
    }
    async createPerson(personDTO) {
        return await this.personService.createPerson(personDTO);
    }
    async updatePerson(personDTO, id) {
        return await this.personService.updatePerson(personDTO, id);
    }
    async deletePerson(id) {
        return await this.personService.deletePerson(parseInt(`${id}`));
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: [person_dto_1.PersonDTO]
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "getAllPerson", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: person_dto_1.PersonDTO
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de persona'
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "getPersonById", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: person_dto_1.PersonDTO
    }),
    (0, swagger_1.ApiBody)({
        type: person_dto_1.PersonDTO
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [person_dto_1.PersonDTO]),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "createPerson", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de persona'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: person_dto_1.PersonDTO
    }),
    (0, swagger_1.ApiBody)({
        type: person_dto_1.PersonDTO
    }),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [person_dto_1.PersonDTO, Number]),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "updatePerson", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de persona'
    }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "deletePerson", null);
PersonController = __decorate([
    (0, swagger_1.ApiCreatedResponse)(),
    (0, common_1.Controller)('person'),
    (0, swagger_1.ApiTags)('person'),
    __metadata("design:paramtypes", [person_service_1.PersonService])
], PersonController);
exports.PersonController = PersonController;
//# sourceMappingURL=person.controller.js.map