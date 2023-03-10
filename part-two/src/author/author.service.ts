import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import authors from 'src/data/authors';
import { Author, AuthorDocument } from './author.schema';

@Injectable()
export class AuthorService {
  constructor(@InjectModel(Author.name) private readonly authorModel: Model<AuthorDocument>) {}

  async findMany() {
    return this.authorModel.find().lean();
  }

  async findById(id: number | Author) {
    return this.authorModel.findById(id).lean();
  }

  async createAuthor(input: any) {
    return this.authorModel.create(input)
  }
}
