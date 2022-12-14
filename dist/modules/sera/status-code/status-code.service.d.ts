import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { StatusCodeDTO } from './dto/status-code.dto';
export declare class StatusCodeService {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxy);
    getAllStatusCode(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getStatusCodeById(id: string): Promise<import("rxjs").Observable<any>>;
    createStatusCode(statusCodeDTO: StatusCodeDTO): Promise<import("rxjs").Observable<any>>;
    updateStatusCode(statusCodeDTO: StatusCodeDTO, id: string): Promise<import("rxjs").Observable<any>>;
    deleteStatusCode(id: string): Promise<import("rxjs").Observable<any>>;
}
