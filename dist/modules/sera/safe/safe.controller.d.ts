import { SafeService } from './safe.service';
import { SafeDto } from './dto/safe.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class SafeController {
    private readonly safeService;
    constructor(safeService: SafeService);
    createSafe(safeDto: SafeDto): Promise<import("rxjs").Observable<any>>;
    getAllSafes(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getsafeById(id: number): Promise<import("rxjs").Observable<any>>;
    updatesafe(idToUpdate: number, data: SafeDto): Promise<import("rxjs").Observable<any>>;
    deleteSafe(id: number): Promise<import("rxjs").Observable<any>>;
}
