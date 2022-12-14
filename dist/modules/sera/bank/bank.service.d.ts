import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { BankDto } from './dto/bank.dto';
export declare class BankService {
    private readonly bankProxy;
    constructor(bankProxy: ClientProxy);
    createBank(bankDto: BankDto): Promise<import("rxjs").Observable<any>>;
    getAllBanks(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getBankByCode(code: string): Promise<import("rxjs").Observable<any>>;
    updateBank(codeToUpdate: string, bankDto: BankDto): Promise<import("rxjs").Observable<any>>;
    deleteBank(code: string): Promise<import("rxjs").Observable<any>>;
}
