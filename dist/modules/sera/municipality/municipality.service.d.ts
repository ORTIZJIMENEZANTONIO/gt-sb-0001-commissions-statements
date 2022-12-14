import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { MunicipalityDTO } from './dto/municipality.dto';
export declare class MunicipalityService {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxy);
    getAllMunicipality(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getMunicipalityById(id: number): Promise<import("rxjs").Observable<any>>;
    createMunicipality(municipalityDTO: MunicipalityDTO): Promise<import("rxjs").Observable<any>>;
    updateMunicipality(municipalityDTO: MunicipalityDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteMunicipality(id: number): Promise<import("rxjs").Observable<any>>;
}
