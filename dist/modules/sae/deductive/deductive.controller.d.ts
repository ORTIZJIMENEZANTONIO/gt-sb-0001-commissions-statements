import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { DeductiveService } from './deductive.service';
import { DeductiveDto } from './dto/deductive.dto';
export declare class DeductiveController {
    private readonly deductiveService;
    constructor(deductiveService: DeductiveService);
    createDeductive(deductiveDto: DeductiveDto): Promise<import("rxjs").Observable<any>>;
    getAllDeductives(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getDeductiveByCode(id: number): Promise<import("rxjs").Observable<any>>;
    updateDeductive(id: number, body: DeductiveDto): Promise<import("rxjs").Observable<any>>;
    deleteDeductive(id: number): Promise<import("rxjs").Observable<any>>;
}
