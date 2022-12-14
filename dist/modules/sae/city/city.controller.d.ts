import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { CityService } from './city.service';
import { CityDto } from './dto/city.dto';
export declare class CityController {
    private readonly cityService;
    constructor(cityService: CityService);
    createCity(CityDto: CityDto): Promise<import("rxjs").Observable<any> | {
        statusCode: number;
        message: string;
        error: string;
    }>;
    getAllCities(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getCitytByCode(code: string): Promise<import("rxjs").Observable<any> | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    updateCityt(codeToUpdate: string, data: CityDto): Promise<import("rxjs").Observable<any> | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    deleteCityt(code: string): Promise<import("rxjs").Observable<any>>;
}
