import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { IssuingInstitutionDTO } from './dto/issuing-institution.dto';
import { ClientProxy } from '@nestjs/microservices';
export declare class IssuingInstitutionService {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxy);
    getAllIssuingInstitution(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getIssuingInstitutionById(id: number): Promise<import("rxjs").Observable<any>>;
    createIssuingInstitution(issuingInstitutionDTO: IssuingInstitutionDTO): Promise<import("rxjs").Observable<any>>;
    updateIssuingInstitution(issuingInstitutionDTO: IssuingInstitutionDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteIssuingInstitution(id: number): Promise<import("rxjs").Observable<any>>;
}
