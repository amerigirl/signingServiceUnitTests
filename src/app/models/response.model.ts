export interface ResponseModel<T> {
  statusCode: number;
  version: any;
  result: T;
  isError: any;
  message: string;
  responseException: any;
}
