/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EventType } from "../../eventType/base/EventType";
import { ValidateNested, IsInt, IsString } from "class-validator";
import { Type } from "class-transformer";

@ObjectType()
class HashedLink {
  @ApiProperty({
    required: true,
    type: () => EventType,
  })
  @ValidateNested()
  @Type(() => EventType)
  eventType?: EventType;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  id!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  link!: string;
}

export { HashedLink as HashedLink };
