import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { OriginDto } from './dto/origin.dto';
export declare class OriginService {
    private readonly originProxy;
    constructor(originProxy: ClientProxy);
    createOrigin(origin: OriginDto): Promise<import("rxjs").Observable<any>>;
    getAllOrigins(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getOriginById(id: number): Promise<import("rxjs").Observable<any>>;
    updateOrigin(idToUpdate: number, origin: OriginDto): Promise<import("rxjs").Observable<any>>;
    deleteOrigin(id: number): Promise<import("rxjs").Observable<any>>;
}
