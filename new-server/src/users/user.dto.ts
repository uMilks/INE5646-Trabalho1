import { IsString, IsEmail, IsMongoId, IsOptional, IsArray, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  birthday: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsArray()
  @IsOptional()
  friends?: string[];
}

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  birthday: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsArray()
  @IsOptional()
  friends?: string[];
}

export class CheckUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;
}

export class GetUserByIdDto {
  @IsMongoId({ message: "invalid _id, it must be a mongodb's object id" })
  @IsNotEmpty()
  id: string;
}

export class AddFriendDto {
  @IsString()
  @IsNotEmpty()
  friendName: string;
}

export class RemoveFriendDto {
  @IsString()
  @IsNotEmpty()
  friendName: string;
}

export class GetFriendDto {
  @IsMongoId({ message: "invalid _id, it must be a mongodb's object id" })
  @IsNotEmpty()
  friendId: string;
}

export class AddRecommendationDto {
  @IsMongoId({ message: "invalid _id, it must be a mongodb's object id" })
  @IsNotEmpty()
  recommendation: string;

  @IsString()
  @IsNotEmpty()
  friendName: string;
}

export class RemoveRecommendationDto {
  @IsMongoId({ message: "invalid _id, it must be a mongodb's object id" })
  @IsNotEmpty()
  recommendation: string;

  @IsString()
  @IsNotEmpty()
  friendName: string;
}