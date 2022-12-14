import { StateOfRepublicService } from './state-of-republic.service';
import { StateOfRepublicDto } from './dto/state-of-republic.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class StateOfRepublicController {
    private readonly stateOfRepublicService;
    constructor(stateOfRepublicService: StateOfRepublicService);
    createStateOfRepublic(stateOfRepublicDto: StateOfRepublicDto): import("rxjs").Observable<any>;
    getAllStateOfRepublics(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getStateOfRepublicByCode(stateCode: string): Promise<import("rxjs").Observable<any>>;
    updateStateOfRepublic(stateCode: string, stateData: StateOfRepublicDto): Promise<import("rxjs").Observable<any>>;
    deleteStateOfRepublic(stateCode: string): Promise<import("rxjs").Observable<any>>;
}
