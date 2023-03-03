import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class FindBookInput {
  @Field()
  _id: string;
}
