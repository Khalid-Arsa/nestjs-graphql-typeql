import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Field, ObjectType, ID, InputType } from "@nestjs/graphql";
import { Book } from "src/book/book.schema";
import mongoose from "mongoose";

export type AuthorDocument = Author & mongoose.Document;

@Schema()
@ObjectType()
export class Author {
  @Field(() => ID) // <-- Graphql type
  _id: number; // <-- Typescript type

  @Prop()
  @Field()
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Book' })
  @Field(() => [Book])
  books: Book[]
}

@InputType()
export class CreateAuthorInput {
  @Field()
  name: string;
}

export const AuthorSchema = SchemaFactory.createForClass(Author)