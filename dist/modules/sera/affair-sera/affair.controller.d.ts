import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { AffairService } from './affair.service';
import { AffairDto } from './dto/affair.dto';
export declare class AffairController {
    private readonly affairService;
    constructor(affairService: AffairService);
    createAffair(affairDto: AffairDto): Promise<import("rxjs").Observable<any>>;
    getAllAffairs(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getAffairById(id: number): Promise<import("rxjs").Observable<any>>;
    updateAffair(idToUpdate: any, data: AffairDto): Promise<import("rxjs").Observable<any>>;
    deleteAffair(id: number): Promise<import("rxjs").Observable<any>>;
}
