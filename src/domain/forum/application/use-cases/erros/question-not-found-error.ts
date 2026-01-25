export class QuestionNotFoundError extends Error {
    public readonly statusCode: number;

    constructor(message: string = "Question not found.") {
    super(message);
    this.name = "QuestionNotFoundError";
    this.statusCode = 404;
    Object.setPrototypeOf(this, QuestionNotFoundError.prototype);
    }
}