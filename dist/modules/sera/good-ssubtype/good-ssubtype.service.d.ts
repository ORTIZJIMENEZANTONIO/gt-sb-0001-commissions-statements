import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { GoodSsubtypeDTO } from './dto/good-Ssubtype.dto';
export declare class GoodSsubtypeService {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxy);
    getAllGoodSsubtype(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getGoodSsubtypeById(id: number): Promise<import("rxjs").Observable<any>>;
    createGoodSsubtype(goodSsubtypeDTO: GoodSsubtypeDTO): Promise<import("rxjs").Observable<any>>;
    updateGoodSsubtype(goodSsubtypeDTO: GoodSsubtypeDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteGoodSsubtype(id: number): Promise<import("rxjs").Observable<any>>;
}
