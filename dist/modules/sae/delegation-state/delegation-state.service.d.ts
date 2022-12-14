import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { DelegationStateDto } from './dto/create-delegation-state.dto';
export declare class DelegationStateService {
    private readonly delegationStateProxy;
    constructor(delegationStateProxy: ClientProxy);
    createDelegationState(delegationStateDto: DelegationStateDto): Promise<import("rxjs").Observable<any>>;
    getAllDelegationStates(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getDelegationStateById(id: number): Promise<import("rxjs").Observable<any>>;
    updateDelegationState(idToUpdate: number, data: DelegationStateDto): Promise<import("rxjs").Observable<any>>;
    deleteDelegationState(id: number): Promise<import("rxjs").Observable<any>>;
}
