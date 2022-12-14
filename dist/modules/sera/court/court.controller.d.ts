import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { CourtService } from './court.service';
import { CourtDTO } from './dto/court.dto';
export declare class CourtController {
    private courtService;
    constructor(courtService: CourtService);
    getAllCourt(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getCourtById(id: number): Promise<import("rxjs").Observable<any>>;
    createCourt(courtDTO: CourtDTO): Promise<import("rxjs").Observable<any>>;
    updateCourt(courtDTO: CourtDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteCourt(id: number): Promise<import("rxjs").Observable<any>>;
}
