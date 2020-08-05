import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Expose } from 'class-transformer';
import PointItems from './PointItems';

@Entity('points')
class Point {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  name: string;

  @Column('varchar')
  email: string;

  @Column('varchar')
  phone: string;

  @Column('varchar')
  image: string;

  @Column('real')
  latitude: number;

  @Column('real')
  longitude: number;

  @Column('varchar')
  city: string;

  @Column({ type: 'varchar', length: 2 })
  uf: string;

  @OneToMany(() => PointItems, (point_items) => point_items.point, {
    cascade: ['insert', 'update'],
    eager: true,
  })
  point_items: PointItems[];

  @Expose({ name: 'image_url' })
  getImageUrl(): string | null {
    if (!this.image) {
      return null;
    }

    return `http://192.168.0.3:3333/uploads/${this.image}`;
  }

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Point;
