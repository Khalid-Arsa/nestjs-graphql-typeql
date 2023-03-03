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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindBookInput = exports.BookSchema = exports.Book = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const graphql_1 = require("@nestjs/graphql");
const author_schema_1 = require("../author/author.schema");
const mongoose_2 = require("mongoose");
let Book = class Book {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", Number)
], Book.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Book.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Book.prototype, "isbn", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: author_schema_1.Author.name }),
    (0, graphql_1.Field)(() => author_schema_1.Author),
    __metadata("design:type", Object)
], Book.prototype, "author", void 0);
Book = __decorate([
    (0, mongoose_1.Schema)(),
    (0, graphql_1.ObjectType)()
], Book);
exports.Book = Book;
exports.BookSchema = mongoose_1.SchemaFactory.createForClass(Book);
exports.BookSchema.index({ author: 1 });
let FindBookInput = class FindBookInput {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], FindBookInput.prototype, "_id", void 0);
FindBookInput = __decorate([
    (0, graphql_1.InputType)()
], FindBookInput);
exports.FindBookInput = FindBookInput;
//# sourceMappingURL=book.schema.js.map