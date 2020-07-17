import Point from '../infra/typeorm/entities/Point';

import IFiltersDTO from '../dtos/IFiltersDTO';
import ICreatePointDTO from '../dtos/ICreatePointDTO';

export default interface IPointRepository {
  findAllPoints(filters: IFiltersDTO): Promise<Point[]>;
  findById(id: string): Promise<Point | undefined>;
  findByEmail(email: string): Promise<Point | undefined>;
  create(pointData: ICreatePointDTO): Promise<Point>;
  save(user: Point): Promise<Point>;
}
