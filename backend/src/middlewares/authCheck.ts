import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
  const publicRoutes = [
    '/api/external/login',
    '/api/external/setpassword',
    '/api/external/getcode',
    '/api/external/verify',
  ];

  if (publicRoutes.includes(req.path)) {
    return next();
  }

  if (!req.session?.user) {
    return res.sendStatus(401);
  }

  next();
};