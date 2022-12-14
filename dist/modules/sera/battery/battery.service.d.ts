import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { BatteryDto } from './dto/battery.dto';
export declare class BatteryService {
    private readonly batteryProxy;
    constructor(batteryProxy: ClientProxy);
    createBattery(batteryDto: BatteryDto): Promise<import("rxjs").Observable<any>>;
    getAllBatteries(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getBatteryById(id: number): Promise<import("rxjs").Observable<any>>;
    updateBattery(id: number, batteryDto: BatteryDto): Promise<import("rxjs").Observable<any>>;
    deleteBattery(id: number): Promise<import("rxjs").Observable<any>>;
}
