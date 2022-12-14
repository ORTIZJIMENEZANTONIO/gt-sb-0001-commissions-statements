import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { RegulatoryDTO } from './dto/regulatory.dto';
export declare class RegulatoryService {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxy);
    getAllRegulatory(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getRegulatoryById(id: number): Promise<import("rxjs").Observable<any>>;
    createRegulatory(regulatoryDTO: RegulatoryDTO): Promise<import("rxjs").Observable<any>>;
    updateRegulatory(regulatoryDTO: RegulatoryDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteRegulatory(id: number): Promise<import("rxjs").Observable<any>>;
}
