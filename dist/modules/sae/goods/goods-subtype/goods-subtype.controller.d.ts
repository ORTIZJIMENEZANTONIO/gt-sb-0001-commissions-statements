import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { GoodsSubTypeDTO } from './dto/goods-subtype.dto';
import { GoodsSubtypeService } from './goods-subtype.service';
export declare class GoodsSubtypeController {
    private goodsSubTypeService;
    constructor(goodsSubTypeService: GoodsSubtypeService);
    getAllGoodsSubType(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getGoodsSubTypeById(id: number): Promise<import("rxjs").Observable<any>>;
    createGoodsSubType(goodsSubType: GoodsSubTypeDTO): Promise<import("rxjs").Observable<any>>;
    updateGoodsSubType(goodsSubType: GoodsSubTypeDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteGoodsSubType(id: number): Promise<import("rxjs").Observable<any>>;
}
