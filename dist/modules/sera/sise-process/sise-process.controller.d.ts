import { SiseProcessService } from './sise-process.service';
import { SiseProcessDto } from './dto/sise-process.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class SiseProcessController {
    private readonly siseProcessService;
    constructor(siseProcessService: SiseProcessService);
    createSiseProcess(siseProcessDto: SiseProcessDto): Promise<import("rxjs").Observable<any>>;
    getAllSiseProcess(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getSiseProcessById(id: number): Promise<import("rxjs").Observable<any>>;
    updateSiseProcess(idToUpdate: number, data: SiseProcessDto): Promise<import("rxjs").Observable<any>>;
    deleteSiseProcess(id: number): Promise<import("rxjs").Observable<any>>;
}
