import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { DeductiveVerificationService } from './deductive-verification.service';
import { CreateDeductiveVerificationDto } from './dto/create-deductive-verification.dto';
export declare class DeductiveVerificationController {
    private readonly deductiveVerificationService;
    constructor(deductiveVerificationService: DeductiveVerificationService);
    createDeductiveVerification(deductiveVerificationDto: CreateDeductiveVerificationDto): Promise<import("rxjs").Observable<any>>;
    getAllDeductiveVerifications(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getDeductiveVerificationByCode(id: number): Promise<import("rxjs").Observable<any>>;
    updateDeductiveVerification(idToUpdate: number, body: CreateDeductiveVerificationDto): Promise<import("rxjs").Observable<any>>;
    deleteDeductiveVerification(id: number): Promise<import("rxjs").Observable<any>>;
}
