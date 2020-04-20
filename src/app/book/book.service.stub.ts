import {Book} from "./model/book";

export class BookServiceStub {

  read(id: number): Book | void {
    return undefined;
  }

  readAll(): Book[] {
    return [];
  }
}
