import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Country {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  @Field()
  enUS: string;

  @Column()
  @Field()
  flag: string;

  @Column({ nullable: true })
  @Field({})
  ptBR: string;
}
