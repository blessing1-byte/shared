import { JwtPayload } from "./types.js";
export declare function signToken(payload: JwtPayload): string;
export declare function verifyToken(token: string): JwtPayload;
