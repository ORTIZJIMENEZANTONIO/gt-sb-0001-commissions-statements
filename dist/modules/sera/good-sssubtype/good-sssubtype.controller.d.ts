import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { GoodSssubtypeDTO } from './dto/good-sssubtype.dto';
import { GoodSssubtypeService } from './good-sssubtype.service';
export declare class GoodSssubtypeController {
    private goodSssubtypeService;
    constructor(goodSssubtypeService: GoodSssubtypeService);
    getAllGoodSssubtype(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getGoodSssubtypeById(id: number): Promise<import("rxjs").Observable<any>>;
    createGoodSssubtype(goodSssubtypeDTO: GoodSssubtypeDTO): Promise<import("rxjs").Observable<any>>;
    updateGoodSssubtype(goodSssubtypeDTO: GoodSssubtypeDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteGoodSssubtype(id: number): Promise<import("rxjs").Observable<any>>;
}
