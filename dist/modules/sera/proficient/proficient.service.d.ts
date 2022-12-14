import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { ProficientDTO } from './dto/proficient.dto';
export declare class ProficientService {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxy);
    getAllProficient(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getProficientById(id: number): Promise<import("rxjs").Observable<any>>;
    createProficient(proficientDTO: ProficientDTO): Promise<import("rxjs").Observable<any>>;
    updateProficient(proficientDTO: ProficientDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteProficient(id: number): Promise<import("rxjs").Observable<any>>;
}
