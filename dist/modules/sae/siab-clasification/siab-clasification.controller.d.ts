import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { SiabClasificationDto } from './dto/siab-clasification.dto';
import { SiabClasificationService } from './siab-clasification.service';
export declare class SiabClasificationController {
    private readonly siabClasificationService;
    constructor(siabClasificationService: SiabClasificationService);
    createSiabClasification(siabClasificationDto: SiabClasificationDto): Promise<import("rxjs").Observable<any>>;
    getAllSiabClasifications(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getSiabClasificationById(id: number): Promise<import("rxjs").Observable<any>>;
    updateSiabClasification(idToUpdate: number, data: SiabClasificationDto): Promise<import("rxjs").Observable<any>>;
    deleteSiabClasification(id: number): Promise<import("rxjs").Observable<any>>;
}
