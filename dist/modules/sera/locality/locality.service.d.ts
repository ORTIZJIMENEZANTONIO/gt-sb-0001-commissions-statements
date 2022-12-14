import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { LocalityDTO } from './dto/locality.dto';
export declare class LocalityService {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxy);
    getAllLocality(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getLocalityById(id: number): Promise<import("rxjs").Observable<any>>;
    createLocality(localityDTO: LocalityDTO): Promise<import("rxjs").Observable<any>>;
    updateLocality(localityDTO: LocalityDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteLocality(id: number): Promise<import("rxjs").Observable<any>>;
}
