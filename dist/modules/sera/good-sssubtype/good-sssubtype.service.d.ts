import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { GoodSssubtypeDTO } from './dto/good-sssubtype.dto';
import { ClientProxy } from '@nestjs/microservices';
export declare class GoodSssubtypeService {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxy);
    getAllGoodSssubtype(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getGoodSssubtypeById(id: number): Promise<import("rxjs").Observable<any>>;
    createGoodSssubtype(goodSssubtypDTO: GoodSssubtypeDTO): Promise<import("rxjs").Observable<any>>;
    updateGoodSssubtype(goodSssubtypDTO: GoodSssubtypeDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteGoodSssubtype(id: number): Promise<import("rxjs").Observable<any>>;
}
