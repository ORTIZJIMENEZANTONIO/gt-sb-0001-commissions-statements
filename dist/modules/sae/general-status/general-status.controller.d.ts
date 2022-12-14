import { GeneralStatusService } from './general-status.service';
import { GeneralStatusDto } from './dto/general-status.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class GeneralStatusController {
    private readonly generalStatusService;
    constructor(generalStatusService: GeneralStatusService);
    createGeneralStatus(generalStatusDto: GeneralStatusDto): Promise<import("rxjs").Observable<any>>;
    getAllGeneralStatus(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getGeneralStatusBystatusGeneral(statusGeneral: string): Promise<import("rxjs").Observable<any>>;
    updatedeleteRegionalDelegation(statusGeneralToUpdate: string, data: GeneralStatusDto): Promise<import("rxjs").Observable<any>>;
    deleteGeneralStatus(statusGeneral: string): Promise<import("rxjs").Observable<any>>;
}
