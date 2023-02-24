import { Injectable } from '@nestjs/common';
import authors from 'src/data/authors';
import { Author } from './author.schema';

@Injectable()
export class AuthorService {
  authors: Partial<Author>[];
  constructor() {
    this.authors = authors
  }

  async findMany() {
    return this.authors;
  }

  async findById(id: number | Author) {
    const result = authors.filter((item) => item.id === id);

    return result.length ? result[0] : null;
  }
}
