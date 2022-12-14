import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { AffairSaeService } from './affair-sae.service';
import { AffairSaeDto } from './dto/affair-sae.dto';
export declare class AffairSaeController {
    private readonly affairSaeService;
    constructor(affairSaeService: AffairSaeService);
    createAffairSae(affairSaeDto: AffairSaeDto): Promise<import("rxjs").Observable<any>>;
    getAllAffairSaes(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getAffairSaeById(id: number): Promise<import("rxjs").Observable<any>>;
    updateAffairSae(idToUpdate: number, data: AffairSaeDto): Promise<import("rxjs").Observable<any>>;
    deleteAffairSae(id: number): Promise<import("rxjs").Observable<any>>;
}
