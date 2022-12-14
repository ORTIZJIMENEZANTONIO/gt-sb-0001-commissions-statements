import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { AuthorityService } from './authority.service';
import { AuthorityDto } from './dto/authority.dto';
export declare class AuthorityController {
    private readonly authorityService;
    constructor(authorityService: AuthorityService);
    createauthority(authorityDto: AuthorityDto): Promise<import("rxjs").Observable<any>>;
    getAllAuthorities(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getAuthorityById(id: number): Promise<import("rxjs").Observable<any>>;
    updateAuthority(idToUpdate: number, data: AuthorityDto): Promise<import("rxjs").Observable<any>>;
    deleteauthority(id: number): Promise<import("rxjs").Observable<any>>;
}
