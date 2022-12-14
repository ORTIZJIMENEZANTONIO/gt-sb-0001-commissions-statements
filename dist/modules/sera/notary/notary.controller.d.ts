import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { NotaryDTO } from './dto/notary.dto';
import { NotaryService } from './notary.service';
export declare class NotaryController {
    private notaryService;
    constructor(notaryService: NotaryService);
    getAllNotary(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getNotaryById(id: number): Promise<import("rxjs").Observable<any>>;
    createNotary(notaryDTO: NotaryDTO): Promise<import("rxjs").Observable<any>>;
    updateNotary(notaryDTO: NotaryDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteNotary(id: number): Promise<import("rxjs").Observable<any>>;
}
