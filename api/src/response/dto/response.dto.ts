import { Question } from "src/questions/schemas/question.schema";
import { User } from "src/user/schemas/user.schema";

export class ResponseDto {
    readonly question_id: Question;
    readonly content: string;
    readonly author_id: User;
    readonly created_at: Date;
}
