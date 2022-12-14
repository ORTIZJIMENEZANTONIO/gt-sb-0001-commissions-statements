import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { IndicatorDeadlinesDTO } from './dto/indicator-deadlines.dto';
import { IndicatorDeadlinesService } from './indicator-deadlines.service';
export declare class IndicatorDeadlinesController {
    private indicatorDeadlineService;
    constructor(indicatorDeadlineService: IndicatorDeadlinesService);
    getAllIndicatorDeadline(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getIndicatorDeadlineById(id: number): Promise<import("rxjs").Observable<any>>;
    createIndicatorDeadline(indicatorDeadlinesDTO: IndicatorDeadlinesDTO): Promise<import("rxjs").Observable<any>>;
    updateIndicatorDeadline(indicatorDeadlinesDTO: IndicatorDeadlinesDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteIndicatorDeadline(id: number): Promise<import("rxjs").Observable<any>>;
}
