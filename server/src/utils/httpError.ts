export type HttpErrorOptions = {
  code?: string;
  details?: unknown;
};

export class HttpError extends Error {
  public readonly status: number;
  public readonly code?: string;
  public readonly details?: unknown;

  constructor(status: number, message: string, options: HttpErrorOptions = {}) {
    super(message);
    this.name = "HttpError";
    this.status = status;
    this.code = options.code;
    this.details = options.details;
    Object.setPrototypeOf(this, HttpError.prototype);
  }
}
