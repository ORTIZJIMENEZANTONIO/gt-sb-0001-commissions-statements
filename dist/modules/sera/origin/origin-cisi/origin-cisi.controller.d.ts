import { OriginCisiService } from './origin-cisi.service';
import { OriginCisiDto } from './dto/origin-cisi.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class OriginCisiController {
    private readonly originCisiService;
    constructor(originCisiService: OriginCisiService);
    createOrigin(originCisiDto: OriginCisiDto): Promise<import("rxjs").Observable<any>>;
    getAllOrigins(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getOriginCisiById(id: number): Promise<import("rxjs").Observable<any>>;
    updateOrigin(idToUpdate: number, data: OriginCisiDto): Promise<import("rxjs").Observable<any>>;
    deleteOrigin(id: number): Promise<import("rxjs").Observable<any>>;
}
