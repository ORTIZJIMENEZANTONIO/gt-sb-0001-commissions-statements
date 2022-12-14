import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { LockerDTO } from './dto/locker.dto';
import { LockerService } from './locker.service';
export declare class LockerController {
    private lockerService;
    constructor(lockerService: LockerService);
    getAllLocker(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getLockerById(id: string): Promise<import("rxjs").Observable<any>>;
    createLocker(lockerDTO: LockerDTO): Promise<import("rxjs").Observable<any>>;
    updateLocker(lockerDTO: LockerDTO, id: string): Promise<import("rxjs").Observable<any>>;
    deleteLocker(id: string): Promise<import("rxjs").Observable<any>>;
}
