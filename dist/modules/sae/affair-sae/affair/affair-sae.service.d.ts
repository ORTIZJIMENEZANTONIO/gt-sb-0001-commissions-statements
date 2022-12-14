import { ClientProxy } from '@nestjs/microservices';
import { AffairSaeDto } from './dto/affair-sae.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class AffairSaeService {
    private readonly affairtProxy;
    constructor(affairtProxy: ClientProxy);
    createAffairSae(affairSae: AffairSaeDto): Promise<import("rxjs").Observable<any>>;
    getAllAffairsSae(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getAffairSaeById(id: number): Promise<import("rxjs").Observable<any>>;
    updateAffairSae(idToUpdate: number, affairSae: AffairSaeDto): Promise<import("rxjs").Observable<any>>;
    deleteAffairSae(id: number): Promise<import("rxjs").Observable<any>>;
}
