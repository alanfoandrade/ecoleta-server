import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Expose, Exclude } from 'class-transformer';
import PointItems from '../../../../points/infra/typeorm/entities/PointItems';

@Entity('items')
class Item {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  title: string;

  @Column('varchar')
  image: string;

  @OneToMany(() => PointItems, (point_items) => point_items.item)
  point_items: PointItems[];

  @Expose({ name: 'image_url' })
  getImageUrl(): string | null {
    if (!this.image) {
      return null;
    }

    return `http://192.168.0.3:3333/uploads/${this.image}`;
  }

  @Exclude()
  @CreateDateColumn()
  created_at: Date;

  @Exclude()
  @UpdateDateColumn()
  updated_at: Date;
}

export default Item;
