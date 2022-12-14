import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { StateOfRepublicDto } from './dto/state-of-republic.dto';
export declare class StateOfRepublicService {
    private readonly stateOfRepublicProxy;
    constructor(stateOfRepublicProxy: ClientProxy);
    createStateOfRepublic(stateOfRepublicDto: StateOfRepublicDto): import("rxjs").Observable<any>;
    getAllStateOfRepublics(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getStateOfRepublicByCode(stateCode: string): Promise<import("rxjs").Observable<any>>;
    updateStateOfRepublic(stateCodeToUpdate: string, stateData: StateOfRepublicDto): Promise<import("rxjs").Observable<any>>;
    deleteStateOfRepublic(stateCode: string): Promise<import("rxjs").Observable<any>>;
}
