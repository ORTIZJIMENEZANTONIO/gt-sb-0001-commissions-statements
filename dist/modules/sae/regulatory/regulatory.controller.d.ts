import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { RegulatoryDTO } from './dto/regulatory.dto';
import { RegulatoryService } from './regulatory.service';
export declare class RegulatoryController {
    private regulatoryService;
    constructor(regulatoryService: RegulatoryService);
    getAllRegulatory(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getRegulatoryById(id: number): Promise<import("rxjs").Observable<any>>;
    createRegulatory(regulatoryDTO: RegulatoryDTO): Promise<import("rxjs").Observable<any>>;
    updateRegulatory(regulatoryDTO: RegulatoryDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteRegulatory(id: number): Promise<import("rxjs").Observable<any>>;
}
