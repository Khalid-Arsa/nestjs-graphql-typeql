import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import books from 'src/data/books';
import { CreateBookDto } from 'src/book/dto/create-book.dto';
import { Book, BookDocument } from './book.schema';

@Injectable()
export class BookService {
  books: Partial<Book>[];
  constructor(
    @InjectModel(Book.name) private readonly bookModel: Model<BookDocument>
  ) {
    this.books = books;
  }

  async findMany(): Promise<Book[]> {
    return this.bookModel.find().lean();
  }

  async findById(id: string) {
    return this.bookModel.findById(id).lean();
  }

  async findByAuthorId(authorId: number) {
    return this.bookModel.find({ author: authorId });
  }

  async createBoook(book: CreateBookDto) {
    return this.bookModel.create(book);
  }
}
