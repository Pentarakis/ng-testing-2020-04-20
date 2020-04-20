import { BookService}  from "./book.service";
import {Book} from "./model/book";

describe('BookService', () => {
  let service: BookService;

  beforeEach(() => {
    service = new BookService();
  });

  it('should create', () => {
    expect(service).toBeTruthy()
  });

  describe('readAll(): Book[]', () => {
    it('should return book list', () => {
      // GIVEN
      const expectedResult = service.books;

      // WHEN
      const result = service.readAll();

      // THEN
      expect(result).toEqual(expectedResult);
    });

  });

  describe('read(id: number): Book | void', () => {

    it ('should return book with specified id, if such a book exists', () => {
      // GIVEN
      const expectedBook: Book = service.books[2];

      // WHEN
      const result: Book | void = service.read(expectedBook.id);

      // THEN
      expect(result).toEqual(expectedBook);
    });

    it ('should return undefined, if a book with the specified id, does not exist', () => {
      // GIVEN
      const expectedBook = service.books[2];

      // WHEN
      const result = service.read(expectedBook.id);

      // THEN
      expect(result).toEqual(expectedBook);
    });

  });
});
