import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { HolidayDto } from './dto/holiday.dto';
export declare class HolidayService {
    private readonly holidayProxy;
    constructor(holidayProxy: ClientProxy);
    createHoliday(holidayDto: HolidayDto): Promise<import("rxjs").Observable<any>>;
    getAllHolidays(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getHolidayById(id: number): Promise<import("rxjs").Observable<any>>;
    updateHoliday(idToUpdate: number, data: HolidayDto): Promise<import("rxjs").Observable<any>>;
    deleteHoliday(id: number): Promise<import("rxjs").Observable<any>>;
}
