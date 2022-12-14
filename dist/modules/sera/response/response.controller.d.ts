import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { ResponseService } from './response.service';
import { ResponseDto } from './dto/response.dto';
export declare class ResponseController {
    private readonly responseService;
    constructor(responseService: ResponseService);
    createResponse(responseDto: ResponseDto): Promise<import("rxjs").Observable<any>>;
    getAllResponses(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getResponseById(id: number): Promise<import("rxjs").Observable<any>>;
    updateResponse(idToUpdate: number, data: ResponseDto): Promise<import("rxjs").Observable<any>>;
    deleteResponse(id: number): Promise<import("rxjs").Observable<any>>;
}
