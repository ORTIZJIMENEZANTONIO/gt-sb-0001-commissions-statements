import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { SeriesDto } from './dto/series.dto';
import { SeriesService } from './series.service';
export declare class SeriesController {
    private readonly seriesService;
    constructor(seriesService: SeriesService);
    createSeries(seriesDto: SeriesDto): Promise<import("rxjs").Observable<any>>;
    getAllSeries(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getSeriesById(code: string): Promise<import("rxjs").Observable<any>>;
    updateSeries(codeToUpdate: string, data: SeriesDto): Promise<import("rxjs").Observable<any>>;
    deleteSeries(code: string): Promise<import("rxjs").Observable<any>>;
}
