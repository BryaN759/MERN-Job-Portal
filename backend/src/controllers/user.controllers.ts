import { NextFunction, Request, Response } from 'express';

export const testController = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    res.send('This is from test controller!');
};
