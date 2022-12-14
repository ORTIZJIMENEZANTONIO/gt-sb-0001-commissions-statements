import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { MinpubDTO } from './dto/minpub.dto';
export declare class MinpubService {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxy);
    getAllMinpub(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getMinpubById(id: number): Promise<import("rxjs").Observable<any>>;
    createMinpub(minpubDTO: MinpubDTO): Promise<import("rxjs").Observable<any>>;
    updateMinpub(minpubDTO: MinpubDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteMinpub(id: number): Promise<import("rxjs").Observable<any>>;
}
