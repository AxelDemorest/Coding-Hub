import { Question } from "src/entities/questions/models/question.schema";
import { User } from "src/entities/user/models/user.schema";

export class ResponseDto {
    readonly question_id: Question;
    readonly content: string;
    readonly author_id: User;
    readonly created_at: Date;
}
