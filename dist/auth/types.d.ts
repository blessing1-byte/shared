export type UserRole = "CUSTOMER" | "AGENT" | "ADMIN";
export type JwtPayload = {
    userId: string;
    role: UserRole;
};
