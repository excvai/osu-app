import { NextFunction, Request, Response } from 'express';

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.method === 'OPTIONS') return next();

  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) throw new Error('Auth error: no token specified');

    req.token = token;

    next();
  } catch (err) {
    return res.status(401).json({
      meta: {
        success: false,
      },
      result: (err as Error).message,
    });
  }
};
