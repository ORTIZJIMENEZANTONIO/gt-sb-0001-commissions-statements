import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { BatchDTO } from './dto/batch.dto';
export declare class BatchService {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxy);
    getAllBatch(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getBatchById(id: number): Promise<import("rxjs").Observable<any>>;
    createBatch(batchDTO: BatchDTO): Promise<import("rxjs").Observable<any>>;
    updateBatch(batchDTO: BatchDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteBatch(id: number): Promise<import("rxjs").Observable<any>>;
}
