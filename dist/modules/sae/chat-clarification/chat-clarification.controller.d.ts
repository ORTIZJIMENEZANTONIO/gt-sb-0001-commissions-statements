import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { ChatClarificationService } from './chat-clarification.service';
import { ChatClarificationDto } from './dto/chat-clarification.dto';
export declare class ChatClarificationController {
    private readonly chatClarificationService;
    constructor(chatClarificationService: ChatClarificationService);
    createChatClarification(chatClarificationDto: ChatClarificationDto): Promise<import("rxjs").Observable<any>>;
    getAllChatClarifications(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getChatClarificationById(id: number): Promise<import("rxjs").Observable<any>>;
    updateChatClarification(idToUpdate: any, data: ChatClarificationDto): Promise<import("rxjs").Observable<any>>;
    deleteChatClarification(id: number): Promise<import("rxjs").Observable<any>>;
}
