import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { DepartamentService } from './departament.service';
import { DepartamentDTO } from './dto/departament.dto';
export declare class DepartamentController {
    private departamentService;
    constructor(departamentService: DepartamentService);
    getAllDepartament(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getDepartamentById(id: number): Promise<import("rxjs").Observable<any>>;
    createDepartament(departamentDTO: DepartamentDTO): Promise<import("rxjs").Observable<any>>;
    updateDepartament(departamentDTO: DepartamentDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteDepartament(id: number): Promise<import("rxjs").Observable<any>>;
}
