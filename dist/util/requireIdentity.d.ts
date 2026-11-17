import { Request } from "express";
export declare function requireIdentity(req: Request): {
    userId: string;
    role: string;
};
