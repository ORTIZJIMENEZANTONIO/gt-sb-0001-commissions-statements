import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { GoodSituacionDTO } from './dto/good-situacion.dto';
export declare class GoodSituacionService {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxy);
    getAllGoodSituacion(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getGoodSituacionById(id: number): Promise<import("rxjs").Observable<any>>;
    createGoodSituacion(goodSituacionDTO: GoodSituacionDTO): Promise<import("rxjs").Observable<any>>;
    updateGoodSituacion(goodSituacionDTO: GoodSituacionDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteGoodSituacion(id: number): Promise<import("rxjs").Observable<any>>;
}
