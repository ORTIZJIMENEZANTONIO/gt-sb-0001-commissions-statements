import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { GoodSubtypeDTO } from './dto/good-subtype.dto';
import { GoodSubtypeService } from './good-subtype.service';
export declare class GoodSubtypeController {
    private goodSubtypeService;
    constructor(goodSubtypeService: GoodSubtypeService);
    getAllGoodSubtype(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getGoodSubtypeById(id: number): Promise<import("rxjs").Observable<any>>;
    createGoodSubtype(goodSubtypeDTO: GoodSubtypeDTO): Promise<import("rxjs").Observable<any>>;
    updateGoodSubtype(goodSubtypeDTO: GoodSubtypeDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteGoodSubtype(id: number): Promise<import("rxjs").Observable<any>>;
}
