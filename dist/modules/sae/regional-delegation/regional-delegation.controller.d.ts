import { RegionalDelegationService } from './regional-delegation.service';
import { RegionalDelegationDto } from './dto/regional-delegation.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class RegionalDelegationController {
    private readonly regionalDelegationService;
    constructor(regionalDelegationService: RegionalDelegationService);
    createRegionalDelegation(regionalDelegationDto: RegionalDelegationDto): Promise<import("rxjs").Observable<any>>;
    getAllRegionalDelegations(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getRegionalDelegationById(id: number): Promise<import("rxjs").Observable<any>>;
    updateRegionalDelegation(id: number, regionalData: RegionalDelegationDto): Promise<import("rxjs").Observable<any>>;
    deleteRegionalDelegation(id: number): Promise<import("rxjs").Observable<any>>;
}
