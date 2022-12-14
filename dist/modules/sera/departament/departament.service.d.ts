import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { DepartamentDTO } from './dto/departament.dto';
export declare class DepartamentService {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxy);
    getAllDepartament(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getDepartamentById(id: number): Promise<import("rxjs").Observable<any>>;
    createDepartament(departamentDTO: DepartamentDTO): Promise<import("rxjs").Observable<any>>;
    updateDepartament(departamentDTO: DepartamentDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteDepartament(id: number): Promise<import("rxjs").Observable<any>>;
}
