import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateBookDto {
  @Field()
  readonly title: string;

  @Field()
  readonly isbn: string;

  @Field()
  readonly author: string;
}
