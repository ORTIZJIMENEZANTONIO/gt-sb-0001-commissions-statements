import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { ScoreDto } from './dto/score.dto';
export declare class ScoreService {
    private readonly scoreProxy;
    constructor(scoreProxy: ClientProxy);
    createScore(score: ScoreDto): Promise<import("rxjs").Observable<any>>;
    getAllScores(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getScoreByCode(code: string): Promise<import("rxjs").Observable<any>>;
    updateScore(codeToUpdate: string, score: ScoreDto): Promise<import("rxjs").Observable<any>>;
    deleteScore(code: string): Promise<import("rxjs").Observable<any>>;
}
