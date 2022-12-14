import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { CourtDTO } from './dto/court.dto';
import { ClientProxy } from '@nestjs/microservices';
export declare class CourtService {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxy);
    getAllCourt(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getCourtById(id: number): Promise<import("rxjs").Observable<any>>;
    createCourt(courtDTO: CourtDTO): Promise<import("rxjs").Observable<any>>;
    updateCourt(courtDTO: CourtDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteCourt(id: number): Promise<import("rxjs").Observable<any>>;
}
