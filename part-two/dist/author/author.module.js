"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const book_schema_1 = require("../book/book.schema");
const book_service_1 = require("../book/book.service");
const author_resolver_1 = require("./author.resolver");
const author_schema_1 = require("./author.schema");
const author_service_1 = require("./author.service");
let AuthorModule = class AuthorModule {
};
AuthorModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: book_schema_1.Book.name, schema: book_schema_1.BookSchema },
                { name: author_schema_1.Author.name, schema: author_schema_1.AuthorSchema }
            ])
        ],
        providers: [author_resolver_1.AuthorResolver, author_service_1.AuthorService, book_service_1.BookService]
    })
], AuthorModule);
exports.AuthorModule = AuthorModule;
//# sourceMappingURL=author.module.js.map