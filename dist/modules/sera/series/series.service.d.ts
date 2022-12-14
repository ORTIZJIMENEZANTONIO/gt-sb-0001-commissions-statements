import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { SeriesDto } from './dto/series.dto';
export declare class SeriesService {
    private readonly seriesProxy;
    constructor(seriesProxy: ClientProxy);
    createSeries(series: SeriesDto): Promise<import("rxjs").Observable<any>>;
    getAllSeries(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getSerieByCode(code: string): Promise<import("rxjs").Observable<any>>;
    updateSerie(codeToUpdate: string, series: SeriesDto): Promise<import("rxjs").Observable<any>>;
    deleteSeries(code: string): Promise<import("rxjs").Observable<any>>;
}
