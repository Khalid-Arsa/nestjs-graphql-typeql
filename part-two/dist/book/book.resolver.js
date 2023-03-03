"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const author_schema_1 = require("../author/author.schema");
const author_service_1 = require("../author/author.service");
const create_book_dto_1 = require("./dto/create-book.dto");
const book_schema_1 = require("./book.schema");
const book_service_1 = require("./book.service");
const update_book_dto_1 = require("./dto/update-book.dto");
let BookResolver = class BookResolver {
    constructor(bookService, authorService) {
        this.bookService = bookService;
        this.authorService = authorService;
    }
    async books() {
        return this.bookService.findMany();
    }
    async book({ _id }) {
        return this.bookService.findById(_id);
    }
    async createBook(book) {
        return this.bookService.createBoook(book);
    }
    async author(book) {
        return this.authorService.findById(book.author);
    }
};
__decorate([
    (0, graphql_1.Query)(() => [book_schema_1.Book]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "books", null);
__decorate([
    (0, graphql_1.Query)(() => book_schema_1.Book),
    __param(0, (0, graphql_1.Args)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_book_dto_1.FindBookInput]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "book", null);
__decorate([
    (0, graphql_1.Mutation)(() => book_schema_1.Book),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_book_dto_1.CreateBookDto]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "createBook", null);
__decorate([
    (0, graphql_1.ResolveField)(() => author_schema_1.Author),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [book_schema_1.Book]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "author", null);
BookResolver = __decorate([
    (0, graphql_1.Resolver)(() => book_schema_1.Book),
    __metadata("design:paramtypes", [book_service_1.BookService,
        author_service_1.AuthorService])
], BookResolver);
exports.BookResolver = BookResolver;
//# sourceMappingURL=book.resolver.js.map