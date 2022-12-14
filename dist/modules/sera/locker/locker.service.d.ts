import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { LockerDTO } from './dto/locker.dto';
export declare class LockerService {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxy);
    getAllLocker(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getLockerById(id: string): Promise<import("rxjs").Observable<any>>;
    createLocker(lockerDTO: LockerDTO): Promise<import("rxjs").Observable<any>>;
    updateLocker(lockerDTO: LockerDTO, id: string): Promise<import("rxjs").Observable<any>>;
    deleteLocker(id: string): Promise<import("rxjs").Observable<any>>;
}
