import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { QuestionService } from './question.service';
import { QuestionDto } from './dto/question.dto';
export declare class QuestionController {
    private readonly questionService;
    constructor(questionService: QuestionService);
    createQuestion(questionDto: QuestionDto): Promise<import("rxjs").Observable<any>>;
    getAllQuestions(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getQuestionById(id: number): Promise<import("rxjs").Observable<any>>;
    updateQuestion(idToUpdate: number, data: QuestionDto): Promise<import("rxjs").Observable<any>>;
    deleteQuestion(id: number): Promise<import("rxjs").Observable<any>>;
}
