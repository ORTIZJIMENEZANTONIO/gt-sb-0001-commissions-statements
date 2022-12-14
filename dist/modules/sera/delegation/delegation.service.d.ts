import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { DelegationDTO } from './dto/delegation.dto';
export declare class DelegationService {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxy);
    getAllDelegation(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getDelegationById(id: number): Promise<import("rxjs").Observable<any>>;
    createDelegation(delegationDTO: DelegationDTO): Promise<import("rxjs").Observable<any>>;
    updateDelegation(delegationDTO: DelegationDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteDelegation(id: number): Promise<import("rxjs").Observable<any>>;
}
