import type { QuestionsRepository } from "../../application/repositories/questions-repository";
import { Question } from "../../enterprise/entities/question";
import { QuestionNotFoundError } from "./erros/question-not-found-error";

interface GetQuestionBySlugUseCaseRequest {
    slug: string;
}

interface GetQuestionBySlugUseCaseResponse {
    question: Question;
}

export class GetQuestionBySlugUseCase {
    constructor(
    private questionsRepository: QuestionsRepository,
    ) {}

    async execute({ slug }: GetQuestionBySlugUseCaseRequest): Promise<GetQuestionBySlugUseCaseResponse> {
    const question = await this.questionsRepository.findBySlug(slug);

    if (!question) {
        throw new QuestionNotFoundError();
    }

    return {
        question,
    };
    }
}
