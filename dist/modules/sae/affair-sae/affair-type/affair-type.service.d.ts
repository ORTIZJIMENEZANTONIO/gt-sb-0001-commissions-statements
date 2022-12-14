import { ClientProxy } from '@nestjs/microservices';
import { AffairTypeDto } from './dto/affair-type.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class AffairTypeService {
    private readonly affairTypeProxy;
    constructor(affairTypeProxy: ClientProxy);
    createAffairType(affairType: AffairTypeDto): Promise<import("rxjs").Observable<any>>;
    getAllAffairTypes(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getAffairTypeById(id: number): Promise<import("rxjs").Observable<any>>;
    updateAffairType(idToUpdate: number, affairType: AffairTypeDto): Promise<import("rxjs").Observable<any>>;
    deleteAffairType(id: number): Promise<import("rxjs").Observable<any>>;
}
