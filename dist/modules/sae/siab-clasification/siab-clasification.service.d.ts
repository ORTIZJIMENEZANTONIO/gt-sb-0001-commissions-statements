import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { SiabClasificationDto } from './dto/siab-clasification.dto';
export declare class SiabClasificationService {
    private readonly siabClasificationProxy;
    constructor(siabClasificationProxy: ClientProxy);
    createSiabClasification(siabClasificationDto: SiabClasificationDto): Promise<import("rxjs").Observable<any>>;
    getAllSiabClasifications(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getSiabClasificationById(id: number): Promise<import("rxjs").Observable<any>>;
    updateSiabClasification(id: number, siabClasificationDto: SiabClasificationDto): Promise<import("rxjs").Observable<any>>;
    deleteSiabClasification(id: number): Promise<import("rxjs").Observable<any>>;
}
