import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { RegionalDelegationDto } from './dto/regional-delegation.dto';
export declare class RegionalDelegationService {
    private readonly regionalDelegationProxy;
    constructor(regionalDelegationProxy: ClientProxy);
    createRegionalDelegation(regionalDelegationDto: RegionalDelegationDto): Promise<import("rxjs").Observable<any>>;
    getAllRegionalDelegations(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getRegionalDelegationById(id: number): Promise<import("rxjs").Observable<any>>;
    updateRegionalDelegation(idToUpdate: number, regionalData: RegionalDelegationDto): Promise<import("rxjs").Observable<any>>;
    deleteRegionalDelegation(id: number): Promise<import("rxjs").Observable<any>>;
}
