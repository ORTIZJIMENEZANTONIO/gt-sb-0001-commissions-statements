import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { GoodSsubtypeDTO } from './dto/good-Ssubtype.dto';
import { GoodSsubtypeService } from './good-ssubtype.service';
export declare class GoodSsubtypeController {
    private goodSsubtypeService;
    constructor(goodSsubtypeService: GoodSsubtypeService);
    getAllGoodSsubtype(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getGoodSsubtypeById(id: number): Promise<import("rxjs").Observable<any>>;
    createGoodSsubtype(goodSsubtypeDTO: GoodSsubtypeDTO): Promise<import("rxjs").Observable<any>>;
    updateGoodSsubtype(goodSsubtypeDTO: GoodSsubtypeDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteGoodSsubtype(id: number): Promise<import("rxjs").Observable<any>>;
}
