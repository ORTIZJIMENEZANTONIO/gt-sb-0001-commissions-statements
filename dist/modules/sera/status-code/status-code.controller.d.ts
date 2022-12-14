import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { StatusCodeDTO } from './dto/status-code.dto';
import { StatusCodeService } from './status-code.service';
export declare class StatusCodeController {
    private statusCodeService;
    constructor(statusCodeService: StatusCodeService);
    getAllStatusCode(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getStatusCodeById(id: string): Promise<import("rxjs").Observable<any>>;
    createStatusCode(statusCodeDTO: StatusCodeDTO): Promise<import("rxjs").Observable<any>>;
    updateStatusCode(statusCodeDTO: StatusCodeDTO, id: string): Promise<import("rxjs").Observable<any>>;
    deleteStatusCode(id: string): Promise<import("rxjs").Observable<any>>;
}
