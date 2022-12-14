import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { CreateZipCodeDto } from './dto/create-zip-code.dto';
export declare class ZipCodeService {
    private readonly zipCodeProxy;
    constructor(zipCodeProxy: ClientProxy);
    createZipCode(createZipCodeDto: CreateZipCodeDto): Promise<import("rxjs").Observable<any>>;
    getAllZipCodes(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getZipCodeByCode(code: string): Promise<import("rxjs").Observable<any>>;
    updateZipCode(codeToUpdate: string, body: CreateZipCodeDto): Promise<import("rxjs").Observable<any>>;
    deleteZipCode(code: string): Promise<import("rxjs").Observable<any>>;
}
