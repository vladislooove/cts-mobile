export interface Response<R> {
  status: number;
  response: R | null;
}