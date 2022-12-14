import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { LegalSupportsDTO } from './dto/legal-supports.dto';
export declare class LegalSupportsService {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxy);
    getAllLegalSupports(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getLegalSupportsById(id: string): Promise<import("rxjs").Observable<any>>;
    createLegalSupports(clientProxyDTO: LegalSupportsDTO): Promise<import("rxjs").Observable<any>>;
    updateLegalSupports(clientProxyDTO: LegalSupportsDTO, id: string): Promise<import("rxjs").Observable<any>>;
    deleteLegalSupports(id: string): Promise<import("rxjs").Observable<any>>;
}
