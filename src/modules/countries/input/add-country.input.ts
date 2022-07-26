import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AddCountryInput {
  @Field()
  enUS: string;

  @Field()
  flag: string;

  @Field()
  ptBR: string;
}
