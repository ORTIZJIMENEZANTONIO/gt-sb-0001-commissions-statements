import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { LawyerDto } from './dto/lawyer.dto';
export declare class LawyerService {
    private readonly lawyerProxy;
    constructor(lawyerProxy: ClientProxy);
    createLawyer(lawyerDto: LawyerDto): Promise<import("rxjs").Observable<any>>;
    getAllLawyers(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getLawyerById(code: number): Promise<import("rxjs").Observable<any>>;
    updateLawyer(idToUpdate: number, body: LawyerDto): Promise<import("rxjs").Observable<any>>;
    deleteLawyer(id: number): Promise<import("rxjs").Observable<any>>;
}
