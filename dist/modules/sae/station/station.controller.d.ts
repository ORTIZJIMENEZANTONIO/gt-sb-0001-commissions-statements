import { StationService } from './station.service';
import { StationDto } from './dto/station.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class StationController {
    private readonly stationService;
    constructor(stationService: StationService);
    createStation(stationDto: StationDto): Promise<import("rxjs").Observable<any>>;
    getAllStations(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getStationById(id: number): Promise<import("rxjs").Observable<any>>;
    updateStation(id: number, stationData: StationDto): Promise<import("rxjs").Observable<any>>;
    deleteStation(id: number): Promise<import("rxjs").Observable<any>>;
}
