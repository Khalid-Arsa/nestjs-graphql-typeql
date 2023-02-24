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
exports.AuthorSchema = exports.CreateAuthorInput = exports.Author = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const graphql_1 = require("@nestjs/graphql");
const book_schema_1 = require("../book/book.schema");
const mongoose_2 = require("mongoose");
let Author = class Author {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", Number)
], Author.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Author.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Book' }),
    (0, graphql_1.Field)(() => [book_schema_1.Book]),
    __metadata("design:type", Array)
], Author.prototype, "books", void 0);
Author = __decorate([
    (0, mongoose_1.Schema)(),
    (0, graphql_1.ObjectType)()
], Author);
exports.Author = Author;
let CreateAuthorInput = class CreateAuthorInput {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateAuthorInput.prototype, "name", void 0);
CreateAuthorInput = __decorate([
    (0, graphql_1.InputType)()
], CreateAuthorInput);
exports.CreateAuthorInput = CreateAuthorInput;
exports.AuthorSchema = mongoose_1.SchemaFactory.createForClass(Author);
//# sourceMappingURL=author.schema.js.map