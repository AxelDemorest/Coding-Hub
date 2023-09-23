import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from '../../user/entity/user.entity';
import { Category } from '../../category/entity/category.entity';
import { Post } from '../../post/entity/post.entity';

export enum TopicStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  ARCHIVED = 'archived',
}

@Entity()
export class Topic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column('text')
  content: string;

  @Column({ type: 'enum', enum: TopicStatus })
  status: TopicStatus;

  @ManyToOne(() => User)
  author: User;

  @ManyToOne(() => Category)
  category: Category;

  @OneToMany(() => Post, (post) => post.topic, { nullable: true })
  posts: Post[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;

  @Column('timestamp', { nullable: true })
  resolve_at?: Date;

  @Column('boolean', { default: false })
  is_resolved: boolean;
}
