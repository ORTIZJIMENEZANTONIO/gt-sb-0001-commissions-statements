import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { InstitutionClassificationDTO } from './dto/institution-classification.dto';
export declare class InstitutionClassificationService {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxy);
    getAllInstitutionClassification(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getInstitutionClassificationById(id: number): Promise<import("rxjs").Observable<any>>;
    createInstitutionClassification(institutionClassificationDTO: InstitutionClassificationDTO): Promise<import("rxjs").Observable<any>>;
    updateInstitutionClassification(institutionClassificationDTO: InstitutionClassificationDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteInstitutionClassification(id: number): Promise<import("rxjs").Observable<any>>;
}
