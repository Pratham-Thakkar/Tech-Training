import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SpecificUserDetails {
  @Field()
  name: string;

  @Field(() => Int)
  age: number;
}
