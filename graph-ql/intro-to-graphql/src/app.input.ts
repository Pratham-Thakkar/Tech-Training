import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class ListUsersDetailsWithMultipleInputs {
  @Field()
  userId: string;

  @Field()
  userName: string;

  @Field(() => Int)
  limit: number;

  @Field(() => Int, { nullable: true })
  offset?: number;
}
