import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { CityDto } from './dto/city.dto';
export declare class CityService {
    private readonly cityProxy;
    constructor(cityProxy: ClientProxy);
    createCity(city: CityDto): Promise<import("rxjs").Observable<any>>;
    getAllCities(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getCityByCode(id: string): Promise<import("rxjs").Observable<any>>;
    updateCity(codeToUpdate: string, city: CityDto): Promise<import("rxjs").Observable<any>>;
    deleteCity(code: string): Promise<import("rxjs").Observable<any>>;
}
