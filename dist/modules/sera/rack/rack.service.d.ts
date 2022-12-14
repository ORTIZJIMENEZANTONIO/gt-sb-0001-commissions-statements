import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { RackDto } from './dto/rack.dto';
export declare class RackService {
    private readonly rackProxy;
    constructor(rackProxy: ClientProxy);
    createRack(rack: RackDto): Promise<import("rxjs").Observable<any>>;
    getAllRacks(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getRackById(id: number): Promise<import("rxjs").Observable<any>>;
    updateRack(idToUpdate: number, rack: RackDto): Promise<import("rxjs").Observable<any>>;
    deleteRack(id: number): Promise<import("rxjs").Observable<any>>;
}
