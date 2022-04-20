import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
@Entity()
export class Post {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @CreateDateColumn()
  createdAt?: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt?: Date;

  @Field(() => String)
  @Column({ unique: true })
  title!: string;
}
