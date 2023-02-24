/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { Author } from 'src/author/author.schema';
import { AuthorService } from 'src/author/author.service';
import { Book, CreateBookInput, FindBookInput } from './book.schema';
import { BookService } from './book.service';
export declare class BookResolver {
    private bookService;
    private authorService;
    constructor(bookService: BookService, authorService: AuthorService);
    books(): Promise<import("mongoose").LeanDocument<Book & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>[]>;
    book({ _id }: FindBookInput): Promise<import("mongoose").LeanDocument<Book & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>>;
    createBook(book: CreateBookInput): Promise<Book & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    author(book: Book): Promise<import("mongoose").LeanDocument<Author & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>>;
}
