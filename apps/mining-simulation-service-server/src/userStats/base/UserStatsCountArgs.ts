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
import { Type } from "class-transformer";

@ArgsType()
class UserStatsCountArgs {
  @ApiProperty({
    required: false,
    type: () => UserStatsWhereInput,
  })
  @Field(() => UserStatsWhereInput, { nullable: true })
  @Type(() => UserStatsWhereInput)
  where?: UserStatsWhereInput;
}

export { UserStatsCountArgs as UserStatsCountArgs };
