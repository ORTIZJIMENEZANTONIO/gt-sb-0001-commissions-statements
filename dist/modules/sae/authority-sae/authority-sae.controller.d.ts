import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { AuthoritySaeService } from './authority-sae.service';
import { AuthoritySaeDto } from './dto/authority-sae.dto';
export declare class AuthoritySaeController {
    private readonly authoritySaeService;
    constructor(authoritySaeService: AuthoritySaeService);
    createAuthoritySae(authoritySaeDto: AuthoritySaeDto): Promise<import("rxjs").Observable<any>>;
    getAllAuthoritiesSae(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getAuthoritySaeById(id: number): Promise<import("rxjs").Observable<any>>;
    updateAuthoritySae(idToUpdate: number, data: AuthoritySaeDto): Promise<import("rxjs").Observable<any>>;
    deleteAuthoritySae(id: number): Promise<import("rxjs").Observable<any>>;
}
