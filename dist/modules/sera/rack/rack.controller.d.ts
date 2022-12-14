import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { RackDto } from './dto/rack.dto';
import { RackService } from './rack.service';
export declare class RackController {
    private readonly rackService;
    constructor(rackService: RackService);
    createRack(rackDto: RackDto): Promise<import("rxjs").Observable<any>>;
    getAllRacks(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getRackById(id: number): Promise<import("rxjs").Observable<any>>;
    updateRack(idToUpdate: number, data: RackDto): Promise<import("rxjs").Observable<any>>;
    deleteRack(id: number): Promise<import("rxjs").Observable<any>>;
}
