import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { PenaltyDTO } from './dto/penalty.dto';
export declare class PenaltyService {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxy);
    getAllPenalty(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getPenaltyById(id: number): Promise<import("rxjs").Observable<any>>;
    createPenalty(data: PenaltyDTO): Promise<import("rxjs").Observable<any>>;
    updatePenalty(clientProxyDTO: PenaltyDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deletePenalty(id: number): Promise<import("rxjs").Observable<any>>;
}
