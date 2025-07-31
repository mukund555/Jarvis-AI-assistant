export interface UserInput {
    userId: string;
    message: string;
    timestamp: Date;
}

export interface BotResponse {
    responseId: string;
    message: string;
    timestamp: Date;
}