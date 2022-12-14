import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { ReportDTO } from './dto/report.dto';
import { ReportsService } from './reports.service';
export declare class ReportsController {
    private reportService;
    constructor(reportService: ReportsService);
    getAllReport(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getReportsById(id: number): Promise<import("rxjs").Observable<any>>;
    createReport(reportDTO: ReportDTO): Promise<import("rxjs").Observable<any>>;
    updateReport(reportDTO: ReportDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteReport(id: number): Promise<import("rxjs").Observable<any>>;
}
