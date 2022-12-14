import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { PaymentsConceptDTO } from './dto/payment-concept.dto';
import { PaymentsConceptService } from './payments-concept.service';
export declare class PaymentsConceptController {
    private paymentsConceptService;
    constructor(paymentsConceptService: PaymentsConceptService);
    getAllPaymentsConcept(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getPaymentsConceptById(id: number): Promise<import("rxjs").Observable<any>>;
    createPaymentsConcept(paymentsConceptDTO: PaymentsConceptDTO): Promise<import("rxjs").Observable<any>>;
    updatePaymentsConcept(paymentsConceptDTO: PaymentsConceptDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deletePaymentsConcept(id: number): Promise<import("rxjs").Observable<any>>;
}
