import { ClientProxy } from '@nestjs/microservices';
import { AuthoritySaeDto } from './dto/authority-sae.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class AuthoritySaeService {
    private readonly authorityProxy;
    constructor(authorityProxy: ClientProxy);
    createAuthoritySae(authoritySae: AuthoritySaeDto): Promise<import("rxjs").Observable<any>>;
    getAllAuthoritiesSae(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getAuthoritySaeById(id: number): Promise<import("rxjs").Observable<any>>;
    updateAuthoritySae(idToUpdate: number, authoritySae: AuthoritySaeDto): Promise<import("rxjs").Observable<any>>;
    deleteAuthoritySae(id: number): Promise<import("rxjs").Observable<any>>;
}
