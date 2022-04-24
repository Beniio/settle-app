import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne
} from 'typeorm';
import { Field, ObjectType } from 'type-graphql';
import { User } from './User';

@ObjectType()
@Entity()
export class Post extends BaseEntity {
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

  @Field()
  @Column()
  creatorId?: number;

  @Field()
  @ManyToOne(() => User, (user) => user.posts)
  creator?: User;
}
