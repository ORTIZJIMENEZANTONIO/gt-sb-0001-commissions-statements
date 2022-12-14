import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { RevisionReasonDTO } from './dto/revision-reason.dto';
export declare class RevisionReasonService {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxy);
    getAllRevisionReason(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getRevisionReasonById(id: number): Promise<import("rxjs").Observable<any>>;
    createRevisionReason(revisionReasonDTO: RevisionReasonDTO): Promise<import("rxjs").Observable<any>>;
    updateRevisionReason(revisionReasonDTO: RevisionReasonDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteRevisionReason(id: number): Promise<import("rxjs").Observable<any>>;
}
