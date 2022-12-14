import { ScoreDto } from "./score.dto";
declare const UpdateScore_base: import("@nestjs/common").Type<Partial<ScoreDto>>;
export declare class UpdateScore extends UpdateScore_base {
    codeToUpdate: string;
}
export {};
