export class Response<T> {
  constructor(public status: number, public msg: string | null, public data: T | null) {}
}
