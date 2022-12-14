import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { IndicatorDeadlinesDTO } from './dto/indicator-deadlines.dto';
export declare class IndicatorDeadlinesService {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxy);
    getAllIndicatorDeadline(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getIndicatorDeadlineById(id: number): Promise<import("rxjs").Observable<any>>;
    createIndicatorDeadline(indicatorDeadlinesDTO: IndicatorDeadlinesDTO): Promise<import("rxjs").Observable<any>>;
    updateIndicatorDeadline(indicatorDeadlinesDTO: IndicatorDeadlinesDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteIndicatorDeadline(id: number): Promise<import("rxjs").Observable<any>>;
}
