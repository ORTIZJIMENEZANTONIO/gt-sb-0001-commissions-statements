import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { ScoreDto } from './dto/score.dto';
import { ScoreService } from './score.service';
export declare class ScoreController {
    private readonly scoreService;
    constructor(scoreService: ScoreService);
    createScore(scoreDto: ScoreDto): Promise<import("rxjs").Observable<any>>;
    getAllScores(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getScoreById(code: string): Promise<import("rxjs").Observable<any>>;
    updateScore(codeToUpdate: string, data: ScoreDto): Promise<import("rxjs").Observable<any>>;
    deleteScore(code: string): Promise<import("rxjs").Observable<any>>;
}
