import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { SafeDto } from './dto/safe.dto';
export declare class SafeService {
    private readonly safeProxy;
    constructor(safeProxy: ClientProxy);
    createSafe(safeDto: SafeDto): Promise<import("rxjs").Observable<any>>;
    getAllSafes(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getSafeById(id: number): Promise<import("rxjs").Observable<any>>;
    updateSafe(idToUpdate: number, safeDto: SafeDto): Promise<import("rxjs").Observable<any>>;
    deleteSafe(id: number): Promise<import("rxjs").Observable<any>>;
}
