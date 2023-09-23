import {
  Entity,
  PrimaryGeneratedColumn,
  Column, ManyToOne, OneToMany,
} from 'typeorm';
import {Topic} from "../../topic/entity/topic.entity";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  category_name: string;

  @Column()
  description: string;

  @OneToMany(() => Topic, (topic) => topic.category)
  topics: Topic[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
