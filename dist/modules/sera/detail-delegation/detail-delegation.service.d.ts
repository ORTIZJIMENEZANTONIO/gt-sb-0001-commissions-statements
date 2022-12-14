import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { DetailDelegationDTO } from './dto/detail-delegation.dto';
export declare class DetailDelegationService {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxy);
    getAllDetailDelegation(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getDetailDelegationById(id: number): Promise<import("rxjs").Observable<any>>;
    createDetailDelegation(detailDelegationDTO: DetailDelegationDTO): Promise<import("rxjs").Observable<any>>;
    updateDetailDelegation(detailDelegationDTO: DetailDelegationDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteDetailDelegation(id: number): Promise<import("rxjs").Observable<any>>;
}
