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
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const books_1 = require("../data/books");
const book_schema_1 = require("./book.schema");
let BookService = class BookService {
    constructor(bookModel) {
        this.bookModel = bookModel;
        this.books = books_1.default;
    }
    async findMany() {
        return this.bookModel.find().lean();
    }
    async findById(id) {
        return this.bookModel.findById(id).lean();
    }
    async findByAuthorId(authorId) {
        return this.bookModel.find({ author: authorId });
    }
    async createBoook(book) {
        return this.bookModel.create(book);
    }
};
BookService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(book_schema_1.Book.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BookService);
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map