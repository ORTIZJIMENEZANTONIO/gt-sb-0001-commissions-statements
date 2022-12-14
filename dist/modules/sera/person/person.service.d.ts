import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { PersonDTO } from './dto/person.dto';
export declare class PersonService {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxy);
    getAllPerson(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getPersonById(id: number): Promise<import("rxjs").Observable<any>>;
    createPerson(personDTO: PersonDTO): Promise<import("rxjs").Observable<any>>;
    updatePerson(personDTO: PersonDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deletePerson(id: number): Promise<import("rxjs").Observable<any>>;
}
