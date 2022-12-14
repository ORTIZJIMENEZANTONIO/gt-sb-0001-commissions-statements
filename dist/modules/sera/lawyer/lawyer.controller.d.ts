import { LawyerService } from './lawyer.service';
import { LawyerDto } from './dto/lawyer.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class LawyerController {
    private readonly lawyerService;
    constructor(lawyerService: LawyerService);
    createLawyer(lawyerDto: LawyerDto): Promise<import("rxjs").Observable<any>>;
    getAllLawyers(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getLawyerById(id: number): Promise<import("rxjs").Observable<any>>;
    updateLawyer(idToUpdate: number, body: LawyerDto): Promise<import("rxjs").Observable<any>>;
    deleteLawyer(id: number): Promise<import("rxjs").Observable<any>>;
}
