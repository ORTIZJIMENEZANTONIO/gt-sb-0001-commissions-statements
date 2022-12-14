import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { CityDTO } from './dto/city.dto';
export declare class CityService {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxy);
    getAllCity(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getCityById(id: number): Promise<import("rxjs").Observable<any>>;
    createCity(cityDTO: CityDTO): Promise<import("rxjs").Observable<any>>;
    updateCity(cityDTO: CityDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteCity(id: number): Promise<import("rxjs").Observable<any>>;
}
