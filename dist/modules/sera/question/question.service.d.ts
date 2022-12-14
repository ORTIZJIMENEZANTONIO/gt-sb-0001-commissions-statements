import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { QuestionDto } from './dto/question.dto';
export declare class QuestionService {
    private readonly questionProxy;
    constructor(questionProxy: ClientProxy);
    createQuestion(question: QuestionDto): Promise<import("rxjs").Observable<any>>;
    getAllQuestions(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getQuestionById(id: number): Promise<import("rxjs").Observable<any>>;
    updateQuestion(idToUpdate: number, question: QuestionDto): Promise<import("rxjs").Observable<any>>;
    deleteQuestion(id: number): Promise<import("rxjs").Observable<any>>;
}
