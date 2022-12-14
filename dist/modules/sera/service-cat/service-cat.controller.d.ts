import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { ServiceCatDto } from './dto/service-cat.dto';
import { ServiceCatService } from './service-cat.service';
export declare class ServiceCatController {
    private readonly serviceCatService;
    constructor(serviceCatService: ServiceCatService);
    createServiceCat(serviceCatDto: ServiceCatDto): Promise<import("rxjs").Observable<any>>;
    getAllServiceCats(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getServiceCatById(code: string): Promise<import("rxjs").Observable<any>>;
    updateServiceCat(codeToUpdate: string, data: ServiceCatDto): Promise<import("rxjs").Observable<any>>;
    deleteServiceCat(code: string): Promise<import("rxjs").Observable<any>>;
}
