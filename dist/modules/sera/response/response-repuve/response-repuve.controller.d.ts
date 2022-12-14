import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { ResponseRepuveService } from './response-repuve.service';
import { ResponseRepuveDto } from './dto/response-repuve.dto';
export declare class ResponseRepuveController {
    private readonly responseRepuveService;
    constructor(responseRepuveService: ResponseRepuveService);
    createResponseRepuve(responseRepuveDto: ResponseRepuveDto): Promise<import("rxjs").Observable<any>>;
    getAllResponsesRepuve(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getResponseRepuveById(id: number): Promise<import("rxjs").Observable<any>>;
    updateResponseRepuve(idToUpdate: number, data: ResponseRepuveDto): Promise<import("rxjs").Observable<any>>;
    deleteResponseRepuve(id: number): Promise<import("rxjs").Observable<any>>;
}
