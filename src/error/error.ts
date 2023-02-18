import { NextFunction, Request, Response } from "express";

class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number = 400) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
  }
}
const handlreErrors = async (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      message: error.message,
    });
  }
  console.log(error);
  return res.status(500).json({
    message: "Internal server error",
  });
};

export { AppError, handlreErrors };
