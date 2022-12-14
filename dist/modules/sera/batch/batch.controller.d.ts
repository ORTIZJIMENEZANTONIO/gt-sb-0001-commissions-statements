import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { BatchService } from './batch.service';
import { BatchDTO } from './dto/batch.dto';
export declare class BatchController {
    private batchService;
    constructor(batchService: BatchService);
    getAllBatch(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getBatchById(id: number): Promise<import("rxjs").Observable<any>>;
    createBatch(batchDTO: BatchDTO): Promise<import("rxjs").Observable<any>>;
    updateBatch(batchDTO: BatchDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteBatch(id: number): Promise<import("rxjs").Observable<any>>;
}
