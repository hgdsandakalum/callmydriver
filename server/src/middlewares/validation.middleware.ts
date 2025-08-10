import { Request, Response, NextFunction } from "express";
import { ZodTypeAny } from "zod";
import { HttpError } from "../utils/httpError";

export type ValidationSchemas = {
  body?: ZodTypeAny;
  query?: ZodTypeAny;
  params?: ZodTypeAny;
};

export function validationMiddleware(schemas: ValidationSchemas) {
  return (req: Request, _res: Response, next: NextFunction) => {
    try {
      if (schemas.body) req.body = schemas.body.parse(req.body);
      if (schemas.query) req.query = schemas.query.parse(req.query) as any;
      if (schemas.params) req.params = schemas.params.parse(req.params) as any;
      next();
    } catch (err) {
      const details = (err as Error).message;
      next(
        new HttpError(400, "Validation failed", {
          code: "VALIDATION_ERROR",
          details,
        })
      );
    }
  };
}
