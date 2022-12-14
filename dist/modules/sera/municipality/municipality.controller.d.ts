import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { MunicipalityDTO } from './dto/municipality.dto';
import { MunicipalityService } from './municipality.service';
export declare class MunicipalityController {
    private municipalityService;
    constructor(municipalityService: MunicipalityService);
    getAllMunicipality(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getMunicipalityById(id: number): Promise<import("rxjs").Observable<any>>;
    createMunicipality(municipalityDTO: MunicipalityDTO): Promise<import("rxjs").Observable<any>>;
    updateMunicipality(municipalityDTO: MunicipalityDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteMunicipality(id: number): Promise<import("rxjs").Observable<any>>;
}
