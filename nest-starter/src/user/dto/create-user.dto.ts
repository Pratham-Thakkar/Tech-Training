import { IsInt, IsNotEmpty, IsString, Matches } from 'class-validator';

const passwordRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,20}$/;

export class CreateUserDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsNotEmpty()
  @Matches(passwordRegEx)
  password: string;
}
