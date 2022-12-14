import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { GoodSubtypeDTO } from './dto/good-subtype.dto';
export declare class GoodSubtypeService {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxy);
    getAllGoodSubtype(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getGoodSubtypeById(id: number): Promise<import("rxjs").Observable<any>>;
    createGoodSubtype(goodSubtypeDTO: GoodSubtypeDTO): Promise<import("rxjs").Observable<any>>;
    updateGoodSubtype(goodSubtypeDTO: GoodSubtypeDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteGoodSubtype(id: number): Promise<import("rxjs").Observable<any>>;
}
