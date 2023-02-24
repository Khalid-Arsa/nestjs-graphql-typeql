import { Injectable } from '@nestjs/common';
import books from 'src/data/books';
import { Book, CreateBookInput } from './book.schema';

@Injectable()
export class BookService {
  books: Partial<Book>[];
  constructor() {
    this.books = books;
  }

  async findMany() {
    return this.books;
  }

  async findById(id: number) {
    const book = this.books.filter((book) => book.id === id);

    return book.length ? book[0] : null;
  }

  async findByAuthorId(authorId: number) {
    return this.books.filter((book) => book.author === authorId);
  }

  async createBoook(book: CreateBookInput) {
    this.books = [book, ...this.books];
    return book;
  }
}
