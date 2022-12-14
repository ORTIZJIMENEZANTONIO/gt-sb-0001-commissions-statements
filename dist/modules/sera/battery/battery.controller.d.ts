import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { BatteryService } from './battery.service';
import { BatteryDto } from './dto/battery.dto';
export declare class BatteryController {
    private readonly batteryService;
    constructor(batteryService: BatteryService);
    createBattery(batteryDto: BatteryDto): Promise<import("rxjs").Observable<any>>;
    getAllBatteries(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getBatteryById(id: number): Promise<import("rxjs").Observable<any>>;
    updateBattery(idToUpdate: number, data: BatteryDto): Promise<import("rxjs").Observable<any>>;
    deleteBattery(id: number): Promise<import("rxjs").Observable<any>>;
}
