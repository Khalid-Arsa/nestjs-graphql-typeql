import { Author } from "src/author/author.schema";
import mongoose from "mongoose";
export type BookDocument = Book & mongoose.Document;
export declare class Book {
    _id: number;
    title: string;
    isbn: string;
    author: Author | number;
}
export declare const BookSchema: mongoose.Schema<Book, mongoose.Model<Book, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Book>;
export declare class CreateBookInput {
    title: string;
    isbn: string;
    author: string;
}
export declare class FindBookInput {
    _id: string;
}
