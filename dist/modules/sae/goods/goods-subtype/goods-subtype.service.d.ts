import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { GoodsSubTypeDTO } from './dto/goods-subtype.dto';
export declare class GoodsSubtypeService {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxy);
    getAllGoodsSubType(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getGoodsSubTypeById(id: number): Promise<import("rxjs").Observable<any>>;
    createGoodsSubType(goodsSubTypeDTO: GoodsSubTypeDTO): Promise<import("rxjs").Observable<any>>;
    updateGoodsSubType(goodsSubTypeDTO: GoodsSubTypeDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteGoodsSubType(id: number): Promise<import("rxjs").Observable<any>>;
}
