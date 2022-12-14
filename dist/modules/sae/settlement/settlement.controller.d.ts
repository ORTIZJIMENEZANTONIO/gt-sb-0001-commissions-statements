import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { SettlementService } from './settlement.service';
import { SettlementDto } from './dto/settlement.dto';
export declare class SettlementController {
    private readonly settlementService;
    constructor(settlementService: SettlementService);
    createSettlement(settlementDto: SettlementDto): Promise<import("rxjs").Observable<any>>;
    getAllSettlements(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getSettlementByCode(code: string): Promise<import("rxjs").Observable<any> | {
        statusCode: string;
        message: string;
        error: string;
    }>;
    updateSettlement(codeToUpdate: string, data: SettlementDto): Promise<import("rxjs").Observable<any>>;
    deleteSettlement(code: string): Promise<import("rxjs").Observable<any>>;
}
