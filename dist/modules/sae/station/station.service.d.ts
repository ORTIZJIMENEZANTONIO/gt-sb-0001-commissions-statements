import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { StationDto } from './dto/station.dto';
export declare class StationService {
    private readonly stationProxy;
    constructor(stationProxy: ClientProxy);
    createStation(stationDto: StationDto): import("rxjs").Observable<any>;
    getAllStations(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getStationById(id: number): Promise<import("rxjs").Observable<any>>;
    updateStation(stationIdToUpdate: number, stationData: StationDto): Promise<import("rxjs").Observable<any>>;
    deleteStation(id: number): Promise<import("rxjs").Observable<any>>;
}
