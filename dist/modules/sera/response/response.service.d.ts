import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { ResponseDto } from './dto/response.dto';
export declare class ResponseService {
    private readonly reponseProxy;
    constructor(reponseProxy: ClientProxy);
    createResponse(response: ResponseDto): Promise<import("rxjs").Observable<any>>;
    getAllResponses(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getResponseById(id: number): Promise<import("rxjs").Observable<any>>;
    updateResponse(idToUpdate: number, response: ResponseDto): Promise<import("rxjs").Observable<any>>;
    deleteResponse(id: number): Promise<import("rxjs").Observable<any>>;
}
