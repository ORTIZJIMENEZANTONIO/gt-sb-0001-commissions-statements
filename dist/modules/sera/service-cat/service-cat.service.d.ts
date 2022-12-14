import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { ServiceCatDto } from './dto/service-cat.dto';
export declare class ServiceCatService {
    private readonly serviceProxy;
    constructor(serviceProxy: ClientProxy);
    createService(serviceCat: ServiceCatDto): Promise<import("rxjs").Observable<any>>;
    getAllServices(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getServiceByCode(code: string): Promise<import("rxjs").Observable<any>>;
    updateService(codeToUpdate: string, serviceCat: ServiceCatDto): Promise<import("rxjs").Observable<any>>;
    deleteService(code: string): Promise<import("rxjs").Observable<any>>;
}
