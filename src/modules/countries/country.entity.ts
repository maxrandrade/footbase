import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Field()
  enUS: string;

  @Column()
  @Field()
  ptBR: string;

  @Column()
  @Field()
  flag: string;
}
