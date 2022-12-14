import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { IndicatorReportDTO } from './dto/indicator-report.dto';
export declare class IndicatorReportService {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxy);
    getAllIndicatorReport(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getIndicatorReportById(id: number): Promise<import("rxjs").Observable<any>>;
    createIndicatorReport(clientProxyDTO: IndicatorReportDTO): Promise<import("rxjs").Observable<any>>;
    updateIndicatorReport(clientProxyDTO: IndicatorReportDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteIndicatorReport(id: number): Promise<import("rxjs").Observable<any>>;
}
