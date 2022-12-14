import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { ChatClarificationDto } from './dto/chat-clarification.dto';
export declare class ChatClarificationService {
    private readonly chatClarificationProxy;
    constructor(chatClarificationProxy: ClientProxy);
    createChatClarification(chatClarification: ChatClarificationDto): Promise<import("rxjs").Observable<any>>;
    getAllChatClarifications(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getChatClarificationById(id: number): Promise<import("rxjs").Observable<any>>;
    updateChatClarification(idToUpdate: number, chatClarification: ChatClarificationDto): Promise<import("rxjs").Observable<any>>;
    deleteChatClarification(id: number): Promise<import("rxjs").Observable<any>>;
}
