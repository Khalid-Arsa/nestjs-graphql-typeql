import { Field, ObjectType, ID } from "@nestjs/graphql";
import { Book } from "src/book/book.schema";


@ObjectType()
export class Author {
  @Field(() => ID) // <-- Graphql type
  id: number; // <-- Typescript type

  @Field()
  name: string;

  @Field(() => [Book])
  books: Book[]
}