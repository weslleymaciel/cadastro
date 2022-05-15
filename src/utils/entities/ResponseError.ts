export default class ResponseError {
  message: string;
  rawError: Error;

  constructor(message: string, rawError: Error) {
    this.message = message;
    this.rawError = rawError;
  }
}
