import { ClientProxy } from '@nestjs/microservices';
import { FinalDateDto } from './dto/get-final-date.dto';
import { RegisterPenaltyDto } from './dto/register-penalty.dto';
import { ReleasePenaltyDto } from './dto/release-penalty.dto';
import { ReversePenaltyDto } from './dto/reverse-penalty.dto';
import { UpdatePenaltyDto } from './dto/update-penaly.dto';
export declare class ComerPenaltyService {
    private readonly proxy;
    constructor(proxy: ClientProxy);
    registerPenalty(data: RegisterPenaltyDto): Promise<import("rxjs").Observable<any>>;
    updatePenalty(data: UpdatePenaltyDto): Promise<import("rxjs").Observable<any>>;
    releasePenalty(data: ReleasePenaltyDto): Promise<import("rxjs").Observable<any>>;
    getFinalDate(data: FinalDateDto): Promise<import("rxjs").Observable<any>>;
    penaltyReverse(data: ReversePenaltyDto): Promise<import("rxjs").Observable<any>>;
}
