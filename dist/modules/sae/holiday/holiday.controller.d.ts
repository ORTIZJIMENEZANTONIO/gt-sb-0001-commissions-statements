import { HolidayService } from './holiday.service';
import { HolidayDto } from './dto/holiday.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class HolidayController {
    private readonly holidayService;
    constructor(holidayService: HolidayService);
    createHoliday(holidayDto: HolidayDto): Promise<import("rxjs").Observable<any>>;
    getAllHolidays(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getHolidayById(id: number): Promise<import("rxjs").Observable<any>>;
    updateHoliday(id: number, data: HolidayDto): Promise<import("rxjs").Observable<any>>;
    deleteHoliday(id: number): Promise<import("rxjs").Observable<any>>;
}
