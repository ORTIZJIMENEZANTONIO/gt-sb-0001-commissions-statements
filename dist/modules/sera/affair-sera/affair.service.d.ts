import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { AffairDto } from './dto/affair.dto';
export declare class AffairService {
    private readonly affairProxy;
    constructor(affairProxy: ClientProxy);
    createAffair(affair: AffairDto): Promise<import("rxjs").Observable<any>>;
    getAllAffairs(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getAffairById(id: number): Promise<import("rxjs").Observable<any>>;
    updateAffair(idToUpdate: number, affair: AffairDto): Promise<import("rxjs").Observable<any>>;
    deleteAffair(id: number): Promise<import("rxjs").Observable<any>>;
}
