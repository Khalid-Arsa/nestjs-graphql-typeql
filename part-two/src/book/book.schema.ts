import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose"
import { ObjectType, Field, ID, InputType, Int } from "@nestjs/graphql";
import { Author } from "src/author/author.schema";
import mongoose from "mongoose";

export type BookDocument = Book & mongoose.Document;

@Schema()
@ObjectType()
export class Book {
  @Field(() => ID)
  _id: number;

  @Prop({ required: true })
  @Field()
  title: string;

  @Prop({ required: true })
  @Field()
  isbn: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Author.name })
  @Field(() => Author)
  author: Author | number;
}

export const BookSchema = SchemaFactory.createForClass(Book);

BookSchema.index({ author: 1 });

@InputType()
export class FindBookInput {
  @Field()
  _id: string;
}