import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { DeductiveDto } from './dto/deductive.dto';
export declare class DeductiveService {
    private readonly deductiveProxy;
    constructor(deductiveProxy: ClientProxy);
    createDeductive(deductiveDto: DeductiveDto): Promise<import("rxjs").Observable<any>>;
    getAllDeductives(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getDeductiveById(id: number): Promise<import("rxjs").Observable<any>>;
    updateDeductive(idToUpdate: number, body: DeductiveDto): Promise<import("rxjs").Observable<any>>;
    deleteDeductive(id: number): Promise<import("rxjs").Observable<any>>;
}
