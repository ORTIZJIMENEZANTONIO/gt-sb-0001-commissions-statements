import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { IndicatorReportDTO } from './dto/indicator-report.dto';
import { IndicatorReportService } from './indicator-report.service';
export declare class IndicatorReportController {
    private indicatorReportService;
    constructor(indicatorReportService: IndicatorReportService);
    getAllIndicatorReport(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getIndicatorReportById(id: number): Promise<import("rxjs").Observable<any>>;
    createIndicatorReport(indicatorReportDTO: IndicatorReportDTO): Promise<import("rxjs").Observable<any>>;
    updateIndicatorReport(indicatorReportDTO: IndicatorReportDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteIndicatorReport(id: number): Promise<import("rxjs").Observable<any>>;
}
