import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { NotaryDTO } from './dto/notary.dto';
export declare class NotaryService {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxy);
    getAllNotary(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getNotaryById(id: number): Promise<import("rxjs").Observable<any>>;
    createNotary(notaryDTO: NotaryDTO): Promise<import("rxjs").Observable<any>>;
    updateNotary(notaryDTO: NotaryDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteNotary(id: number): Promise<import("rxjs").Observable<any>>;
}
