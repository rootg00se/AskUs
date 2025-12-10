import session from "express-session-types";

declare module 'express-session' {
    interface SessionData {
        preAuthUserId?: string;
    }
}
