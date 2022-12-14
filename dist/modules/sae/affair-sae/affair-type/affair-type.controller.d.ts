import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { AffairTypeService } from './affair-type.service';
import { AffairTypeDto } from './dto/affair-type.dto';
export declare class AffairTypeController {
    private readonly affairTypeService;
    constructor(affairTypeService: AffairTypeService);
    createAffairType(affairTypeDto: AffairTypeDto): Promise<import("rxjs").Observable<any>>;
    getAllAffairTypes(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getAffairTypeById(id: number): Promise<import("rxjs").Observable<any>>;
    updateAffairType(idToUpdate: number, data: AffairTypeDto): Promise<import("rxjs").Observable<any>>;
    deleteAffairType(id: number): Promise<import("rxjs").Observable<any>>;
}
