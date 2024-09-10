/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserStatsWhereInput } from "./UserStatsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { UserStatsOrderByInput } from "./UserStatsOrderByInput";

@ArgsType()
class UserStatsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UserStatsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => UserStatsWhereInput, { nullable: true })
  @Type(() => UserStatsWhereInput)
  where?: UserStatsWhereInput;

  @ApiProperty({
    required: false,
    type: [UserStatsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [UserStatsOrderByInput], { nullable: true })
  @Type(() => UserStatsOrderByInput)
  orderBy?: Array<UserStatsOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { UserStatsFindManyArgs as UserStatsFindManyArgs };
