import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateCountryInput {
  @Field()
  enUS?: string;

  @Field()
  flag?: string;

  @Field()
  ptBR?: string;
}
