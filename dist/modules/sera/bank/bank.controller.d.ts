import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { BankService } from './bank.service';
import { BankDto } from './dto/bank.dto';
export declare class BankController {
    private readonly bankService;
    constructor(bankService: BankService);
    createBank(bankDto: BankDto): Promise<import("rxjs").Observable<any>>;
    getAllBankes(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getBankByCode(code: string): Promise<import("rxjs").Observable<any>>;
    updatebank(codeToUpdate: string, data: BankDto): Promise<import("rxjs").Observable<any>>;
    deletebank(code: string): Promise<import("rxjs").Observable<any>>;
}
