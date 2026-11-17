import { Response } from "express";
export declare function successResponse(res: Response, statusCode: number | undefined, data: unknown): Response<any, Record<string, any>>;
export declare function failResponse(res: Response, message: string, statusCode?: number): Response<any, Record<string, any>>;
