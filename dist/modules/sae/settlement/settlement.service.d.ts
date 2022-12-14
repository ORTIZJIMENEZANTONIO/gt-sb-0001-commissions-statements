import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { SettlementDto } from './dto/settlement.dto';
export declare class SettlementService {
    private readonly settlementProxy;
    constructor(settlementProxy: ClientProxy);
    createSettlement(settlement: SettlementDto): Promise<import("rxjs").Observable<any>>;
    getAllSettlements(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getSettlementByCode(code: string): Promise<import("rxjs").Observable<any>>;
    updateSettlement(codeToUpdate: string, settlement: SettlementDto): Promise<import("rxjs").Observable<any>>;
    deleteSettlement(code: string): Promise<import("rxjs").Observable<any>>;
}
