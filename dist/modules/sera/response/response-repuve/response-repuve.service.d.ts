import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { ResponseRepuveDto } from './dto/response-repuve.dto';
export declare class ResponseRepuveService {
    private readonly responseRepuveProxy;
    constructor(responseRepuveProxy: ClientProxy);
    createResponseRepuve(responseRepuve: ResponseRepuveDto): Promise<import("rxjs").Observable<any>>;
    getAllResponsesRepuve(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getResponseRepuveById(id: number): Promise<import("rxjs").Observable<any>>;
    updateResponseRepuve(idToUpdate: number, responseRepuve: ResponseRepuveDto): Promise<import("rxjs").Observable<any>>;
    deleteResponseRepuve(id: number): Promise<import("rxjs").Observable<any>>;
}
