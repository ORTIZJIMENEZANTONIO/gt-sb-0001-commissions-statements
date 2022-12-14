import { OriginService } from './origin.service';
import { OriginDto } from './dto/origin.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class OriginController {
    private readonly originService;
    constructor(originService: OriginService);
    createOrigin(originDto: OriginDto): Promise<import("rxjs").Observable<any>>;
    getAllOrigins(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getOriginById(id: number): Promise<import("rxjs").Observable<any>>;
    updateOrigin(idToUpdate: number, data: OriginDto): Promise<import("rxjs").Observable<any>>;
    deleteOrigin(id: number): Promise<import("rxjs").Observable<any>>;
}
