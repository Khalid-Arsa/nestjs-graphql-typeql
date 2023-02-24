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
exports.AuthorResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const book_service_1 = require("../book/book.service");
const author_schema_1 = require("./author.schema");
const author_service_1 = require("./author.service");
let AuthorResolver = class AuthorResolver {
    constructor(bookService, authorService) {
        this.bookService = bookService;
        this.authorService = authorService;
    }
    async authors() {
        return this.authorService.findMany();
    }
    async createAuthor(input) {
        return this.authorService.createAuthor(input);
    }
    async books(parent) {
        return this.bookService.findByAuthorId(parent._id);
    }
};
__decorate([
    (0, graphql_1.Query)(() => [author_schema_1.Author]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthorResolver.prototype, "authors", null);
__decorate([
    (0, graphql_1.Mutation)(() => author_schema_1.Author),
    __param(0, (0, graphql_1.Args)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [author_schema_1.CreateAuthorInput]),
    __metadata("design:returntype", Promise)
], AuthorResolver.prototype, "createAuthor", null);
__decorate([
    (0, graphql_1.ResolveField)(),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [author_schema_1.Author]),
    __metadata("design:returntype", Promise)
], AuthorResolver.prototype, "books", null);
AuthorResolver = __decorate([
    (0, graphql_1.Resolver)(() => author_schema_1.Author),
    __metadata("design:paramtypes", [book_service_1.BookService,
        author_service_1.AuthorService])
], AuthorResolver);
exports.AuthorResolver = AuthorResolver;
//# sourceMappingURL=author.resolver.js.map