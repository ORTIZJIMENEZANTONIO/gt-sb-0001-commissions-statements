import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { GeneralStatusDto } from './dto/general-status.dto';
export declare class GeneralStatusService {
    private readonly generalStatusProxy;
    constructor(generalStatusProxy: ClientProxy);
    createGeneralStatus(generalStatusDto: GeneralStatusDto): Promise<import("rxjs").Observable<any>>;
    getAllGeneralStatus(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getGeneralStatusByStatusGeneral(statusGeneral: string): Promise<import("rxjs").Observable<any>>;
    updateGeneralStatus(statusIdToUpdate: string, data: GeneralStatusDto): Promise<import("rxjs").Observable<any>>;
    deleteGeneralStatus(statusGeneral: string): Promise<import("rxjs").Observable<any>>;
}
