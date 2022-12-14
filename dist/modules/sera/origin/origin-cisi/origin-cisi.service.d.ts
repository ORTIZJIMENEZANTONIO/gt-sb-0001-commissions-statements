import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { OriginCisiDto } from './dto/origin-cisi.dto';
export declare class OriginCisiService {
    private readonly originCisiProxy;
    constructor(originCisiProxy: ClientProxy);
    createOriginCisi(originCisi: OriginCisiDto): Promise<import("rxjs").Observable<any>>;
    getAllOriginCisis(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getOriginCisiById(id: number): Promise<import("rxjs").Observable<any>>;
    updateOriginCisi(idToUpdate: number, originCisi: OriginCisiDto): Promise<import("rxjs").Observable<any>>;
    deleteOriginCisi(id: number): Promise<import("rxjs").Observable<any>>;
}
