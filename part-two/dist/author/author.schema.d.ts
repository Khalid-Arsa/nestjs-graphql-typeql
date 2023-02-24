import { Book } from "src/book/book.schema";
import mongoose from "mongoose";
export type AuthorDocument = Author & mongoose.Document;
export declare class Author {
    _id: number;
    name: string;
    books: Book[];
}
export declare class CreateAuthorInput {
    name: string;
}
export declare const AuthorSchema: mongoose.Schema<Author, mongoose.Model<Author, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Author>;
