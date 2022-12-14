import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { GoodTypeDTO } from './dto/good-type.dto';
export declare class GoodTypeService {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxy);
    getAllGoodType(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getGoodTypeById(id: number): Promise<import("rxjs").Observable<any>>;
    createGoodType(goodTypeDTO: GoodTypeDTO): Promise<import("rxjs").Observable<any>>;
    updateGoodType(goodTypeDTO: GoodTypeDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteGoodType(id: number): Promise<import("rxjs").Observable<any>>;
}
