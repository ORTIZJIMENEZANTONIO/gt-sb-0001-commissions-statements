import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { CoordinatingAuthorityDto } from './dto/coordinating-authority.dto';
export declare class CoordinatingAuthorityService {
    private readonly coordinatingAuthorityProxy;
    constructor(coordinatingAuthorityProxy: ClientProxy);
    createCoordinatingAuthority(coordinatingAuthorityDto: CoordinatingAuthorityDto): Promise<import("rxjs").Observable<any>>;
    getAllCoordinatingAuthorities(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getCoordinatingAuthorityById(id: number): Promise<import("rxjs").Observable<any>>;
    updateCoordinatingAuthority(idToUpdate: number, coordinatingAuthorityDto: CoordinatingAuthorityDto): Promise<import("rxjs").Observable<any>>;
    deleteCoordinatingAuthority(id: number): Promise<import("rxjs").Observable<any>>;
}
