import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ListUsersDetailsWithMultipleInputs } from './app.input';
import { SpecificUserDetails } from './app.output';

@Resolver()
export class AppResolver {
  @Query(() => String)
  getName() {
    return 'Pratham Here';
  }

  @Mutation(() => Int)
  add(
    @Args('num1', { type: () => Int }) num1: number,
    @Args('num2', { type: () => Int }) num2: number,
  ) {
    return num1 + num2;
  }

  //   @Query()
  //   getUserDetails() {}

  @Query(() => String)
  listUsers(@Args('id') userId: string, @Args('name') name: string) {
    console.log(userId + ' ' + name);
    return 'Here it is';
  }

  @Query(() => String)
  listUsersWithInputData(
    @Args('userDetails') userDetails: ListUsersDetailsWithMultipleInputs,
  ) {
    console.log(userDetails);
    return 'Listed Users with pagination';
  }

  @Mutation(() => Int)
  multiply(
    @Args('num1', { type: () => Int }) num1: number,
    @Args('num2', { type: () => Int }) num2: number,
  ) {
    return num1 * num2;
  }

  @Mutation(() => SpecificUserDetails)
  addUser() {
    const details = {
      id: '23',
      name: 'Pratham',
      age: 20,
    };

    return details;
  }
}
