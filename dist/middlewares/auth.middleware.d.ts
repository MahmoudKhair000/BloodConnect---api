import type { NextFunction, Request, Response } from 'express';
export interface AuthLocals {
    session: {
        id: string;
        type: 'staffMember' | 'donor';
    };
}
export declare const auth: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const owner: (req: Request, res: Response<unknown, AuthLocals>, next: NextFunction) => Promise<void>;
export declare const ownerOrAdmin: (req: Request, res: Response<unknown, AuthLocals>, next: NextFunction) => Promise<void>;
export declare const admin: (req: Request, res: Response<unknown, AuthLocals>, next: NextFunction) => Promise<void>;
//# sourceMappingURL=auth.middleware.d.ts.map