import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { GoodTypeDTO } from './dto/good-type.dto';
import { GoodTypeService } from './good-type.service';
export declare class GoodTypeController {
    private goodTypeService;
    constructor(goodTypeService: GoodTypeService);
    getAllGoodType(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getGoodTypeById(id: number): Promise<import("rxjs").Observable<any>>;
    createGoodType(goodTypeDTO: GoodTypeDTO): Promise<import("rxjs").Observable<any>>;
    updateGoodType(goodTypeDTO: GoodTypeDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteGoodType(id: number): Promise<import("rxjs").Observable<any>>;
}
