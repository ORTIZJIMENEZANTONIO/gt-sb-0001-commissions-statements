import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { HalfImageDTO } from './dto/half-image.dto';
import { HalfImageService } from './half-image.service';
export declare class HalfImageController {
    private halfImageService;
    constructor(halfImageService: HalfImageService);
    getAllHalfImage(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getHalfImageById(id: number): Promise<import("rxjs").Observable<any>>;
    createHalfImage(halfImageDTO: HalfImageDTO): Promise<import("rxjs").Observable<any>>;
    updateHalfImage(halfImageDTO: HalfImageDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteHalfImage(id: number): Promise<import("rxjs").Observable<any>>;
}
