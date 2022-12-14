import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { GoodSituacionDTO } from './dto/good-situacion.dto';
import { GoodSituacionService } from './good-situacion.service';
export declare class GoodSituacionController {
    private goodSituacionService;
    constructor(goodSituacionService: GoodSituacionService);
    getAllGoodSituacion(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getGoodSituacionById(id: number): Promise<import("rxjs").Observable<any>>;
    createGoodSituacion(goodSituacionDTO: GoodSituacionDTO): Promise<import("rxjs").Observable<any>>;
    updateGoodSituacion(goodSituacionDTO: GoodSituacionDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteGoodSituacion(id: number): Promise<import("rxjs").Observable<any>>;
}
