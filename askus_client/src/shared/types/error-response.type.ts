export interface IErrorResponse extends Error {
    response: {
        data: {
            error: string;
            message: string;
            path: string;
            status: number;
            timestamp: Date;
        }
    }
}
