import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { CityService } from './city.service';
import { CityDTO } from './dto/city.dto';
export declare class CityController {
    private cityService;
    constructor(cityService: CityService);
    getAllCity(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getCityById(id: number): Promise<import("rxjs").Observable<any>>;
    createCity(cityDTO: CityDTO): Promise<import("rxjs").Observable<any>>;
    updateCity(cityDTO: CityDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteCity(id: number): Promise<import("rxjs").Observable<any>>;
}
