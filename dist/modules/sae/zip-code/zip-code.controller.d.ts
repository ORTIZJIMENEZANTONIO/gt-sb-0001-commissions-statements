import { ZipCodeService } from './zip-code.service';
import { CreateZipCodeDto } from './dto/create-zip-code.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class ZipCodeController {
    private readonly zipCodeService;
    constructor(zipCodeService: ZipCodeService);
    createZipCode(createZipCodeDto: CreateZipCodeDto): Promise<import("rxjs").Observable<any>>;
    getAllZipCodes(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getZipCodeByCode(code: string): Promise<import("rxjs").Observable<any>>;
    updateZipCode(codeToUpdate: string, body: CreateZipCodeDto): Promise<import("rxjs").Observable<any>>;
    deleteZipCode(code: string): Promise<import("rxjs").Observable<any>>;
}
