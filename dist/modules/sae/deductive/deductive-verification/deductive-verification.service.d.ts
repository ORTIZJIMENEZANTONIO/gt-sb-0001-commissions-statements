import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { CreateDeductiveVerificationDto } from './dto/create-deductive-verification.dto';
export declare class DeductiveVerificationService {
    private readonly deductiveVerificationProxy;
    constructor(deductiveVerificationProxy: ClientProxy);
    createDeductiveVerification(createDeductiveVerificationDto: CreateDeductiveVerificationDto): Promise<import("rxjs").Observable<any>>;
    getAllDeductiveVerifications(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getDeductiveVerificationById(id: number): Promise<import("rxjs").Observable<any>>;
    updateDeductiveVerification(idToUpdate: number, body: CreateDeductiveVerificationDto): Promise<import("rxjs").Observable<any>>;
    deleteDeductiveVerification(id: number): Promise<import("rxjs").Observable<any>>;
}
