import { uuid } from 'uuidv4';

import IPointsRepository from '../IPointsRepository';
import Point from '../../infra/typeorm/entities/Point';

import ICreatePointDTO from '../../dtos/ICreatePointDTO';

class FakePointsRepository implements IPointsRepository {
  private points: Point[] = [];

  public async findAllPoints(): Promise<Point[]> {
    const { points } = this;

    return points;
  }

  public async findById(id: string): Promise<Point | undefined> {
    const findPoint = this.points.find((point) => point.id === id);

    return findPoint;
  }

  public async findByEmail(email: string): Promise<Point | undefined> {
    const findPoint = this.points.find((point) => point.email === email);

    return findPoint;
  }

  public async create(pointData: ICreatePointDTO): Promise<Point> {
    const point = new Point();

    Object.assign(point, { id: uuid() }, pointData);

    this.points.push(point);

    return point;
  }

  public async save(point: Point): Promise<Point> {
    const findIndex = this.points.findIndex(
      (findPoint) => findPoint.id === point.id,
    );

    this.points[findIndex] = point;

    return point;
  }
}

export default FakePointsRepository;
