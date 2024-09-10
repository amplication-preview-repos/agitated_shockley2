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
import { MiningDeviceWhereInput } from "./MiningDeviceWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MiningDeviceOrderByInput } from "./MiningDeviceOrderByInput";

@ArgsType()
class MiningDeviceFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MiningDeviceWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MiningDeviceWhereInput, { nullable: true })
  @Type(() => MiningDeviceWhereInput)
  where?: MiningDeviceWhereInput;

  @ApiProperty({
    required: false,
    type: [MiningDeviceOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MiningDeviceOrderByInput], { nullable: true })
  @Type(() => MiningDeviceOrderByInput)
  orderBy?: Array<MiningDeviceOrderByInput>;

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

export { MiningDeviceFindManyArgs as MiningDeviceFindManyArgs };