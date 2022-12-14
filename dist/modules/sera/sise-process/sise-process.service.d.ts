import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { SiseProcessDto } from './dto/sise-process.dto';
export declare class SiseProcessService {
    private readonly siseProcessProxy;
    constructor(siseProcessProxy: ClientProxy);
    createSiseProcess(siseProcess: SiseProcessDto): Promise<import("rxjs").Observable<any>>;
    getAllSiseProcess(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getSiseProcessById(id: number): Promise<import("rxjs").Observable<any>>;
    updateSiseProcess(idToUpdate: number, siseProcess: SiseProcessDto): Promise<import("rxjs").Observable<any>>;
    deleteSiseProcess(id: number): Promise<import("rxjs").Observable<any>>;
}
