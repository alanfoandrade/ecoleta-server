import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Item from '../../../../items/infra/typeorm/entities/Item';
import Point from './Point';

@Entity('point_items')
class PointItems {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  point_id: string;

  @ManyToOne(() => Point, (point) => point.point_items)
  @JoinColumn({ name: 'point_id' })
  point: Point;

  @Column('uuid')
  item_id: string;

  @ManyToOne(() => Item, (item) => item.point_items, { eager: true })
  @JoinColumn({ name: 'item_id' })
  item: Item;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default PointItems;
