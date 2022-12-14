import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { PaymentsConceptDTO } from './dto/payment-concept.dto';
export declare class PaymentsConceptService {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxy);
    getAllPaymentsConcept(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getPaymentsConceptById(id: number): Promise<import("rxjs").Observable<any>>;
    createPaymentsConcept(paymentsConceptDTO: PaymentsConceptDTO): Promise<import("rxjs").Observable<any>>;
    updatePaymentsConcept(paymentsConceptDTO: PaymentsConceptDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deletePaymentsConcept(id: number): Promise<import("rxjs").Observable<any>>;
}
