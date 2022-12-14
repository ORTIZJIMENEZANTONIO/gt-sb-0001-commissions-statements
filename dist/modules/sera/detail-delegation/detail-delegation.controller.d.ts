import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { DetailDelegationService } from './detail-delegation.service';
import { DetailDelegationDTO } from './dto/detail-delegation.dto';
export declare class DetailDelegationController {
    private detailDelegationService;
    constructor(detailDelegationService: DetailDelegationService);
    getAllDetailDelegation(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getDetailDelegationById(id: number): Promise<import("rxjs").Observable<any>>;
    createDetailDelegation(detailDelegationDTO: DetailDelegationDTO): Promise<import("rxjs").Observable<any>>;
    updateDetailDelegation(detailDelegationDTO: DetailDelegationDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteDetailDelegation(id: number): Promise<import("rxjs").Observable<any>>;
}
