import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Country {
  @PrimaryColumn()
  @Field()
  enUS: string;

  @Column()
  @Field()
  flag: string;
}
