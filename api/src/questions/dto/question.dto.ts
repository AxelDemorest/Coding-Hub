import { User } from "src/user/schemas/user.schema";

export class QuestionDTO {
    readonly title: string;
    readonly content: string;
    readonly is_resolved: boolean;
    readonly author_id: User;
    readonly created_at: Date;
    readonly resolve_at: Date;
}
