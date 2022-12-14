import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { CoordinatingAuthorityService } from './coordinating-authority.service';
import { CoordinatingAuthorityDto } from './dto/coordinating-authority.dto';
export declare class CoordinatingAuthorityController {
    private readonly coordinatingAuthorityService;
    constructor(coordinatingAuthorityService: CoordinatingAuthorityService);
    createcoordinatingAuthority(coordinatingAuthorityDto: CoordinatingAuthorityDto): Promise<import("rxjs").Observable<any>>;
    getAllCoordinatingAuthorities(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getCoordinatingAuthorityById(id: number): Promise<import("rxjs").Observable<any>>;
    updateCoordinatingAuthority(idToUpdate: number, data: CoordinatingAuthorityDto): Promise<import("rxjs").Observable<any>>;
    deleteCoordinatingAuthority(id: number): Promise<import("rxjs").Observable<any>>;
}
