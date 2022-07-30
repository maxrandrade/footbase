import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';

@Entity()
@ObjectType()
export class Country {
  @Column()
  @Field()
  enUS: string;

  @Column()
  @Field()
  flag: string;
}
