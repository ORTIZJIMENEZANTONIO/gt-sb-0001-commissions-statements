import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { ProficientDTO } from './dto/proficient.dto';
import { ProficientService } from './proficient.service';
export declare class ProficientController {
    private proficientService;
    constructor(proficientService: ProficientService);
    getAllProficient(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getProficientById(id: number): Promise<import("rxjs").Observable<any>>;
    createProficient(proficientDTO: ProficientDTO): Promise<import("rxjs").Observable<any>>;
    updateProficient(proficientDTO: ProficientDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteProficient(id: number): Promise<import("rxjs").Observable<any>>;
}
