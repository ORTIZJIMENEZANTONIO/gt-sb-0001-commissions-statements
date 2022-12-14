import { ClientProxy } from '@nestjs/microservices';
import { AuthorityDto } from './dto/authority.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class AuthorityService {
    private readonly authorityProxy;
    constructor(authorityProxy: ClientProxy);
    createAuthority(authority: AuthorityDto): Promise<import("rxjs").Observable<any>>;
    getAllAuthorities(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getAuthorityById(id: number): Promise<import("rxjs").Observable<any>>;
    updateAuthority(idToUpdate: number, authority: AuthorityDto): Promise<import("rxjs").Observable<any>>;
    deleteAuthority(id: number): Promise<import("rxjs").Observable<any>>;
}
