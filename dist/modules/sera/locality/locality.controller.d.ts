import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { LocalityDTO } from './dto/locality.dto';
import { LocalityService } from './locality.service';
export declare class LocalityController {
    private localityService;
    constructor(localityService: LocalityService);
    getAllLocality(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getLocalityById(id: number): Promise<import("rxjs").Observable<any>>;
    createLocality(localityDTO: LocalityDTO): Promise<import("rxjs").Observable<any>>;
    updateLocality(localityDTO: LocalityDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteLocality(id: number): Promise<import("rxjs").Observable<any>>;
}
