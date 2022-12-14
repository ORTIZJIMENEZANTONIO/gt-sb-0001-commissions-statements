import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { HalfImageDTO } from './dto/half-image.dto';
export declare class HalfImageService {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxy);
    getAllHalfImage(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getHalfImageById(id: number): Promise<import("rxjs").Observable<any>>;
    createHalfImage(halfImageDTO: HalfImageDTO): Promise<import("rxjs").Observable<any>>;
    updateHalfImage(halfImageDTO: HalfImageDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteHalfImage(id: number): Promise<import("rxjs").Observable<any>>;
}
