import { Repository, getRepository } from 'typeorm';

import IPointsRepository from '@modules/points/repositories/IPointsRepository';
import IFiltersDTO from '@modules/points/dtos/IFiltersDTO';
import ICreatePointDTO from '@modules/points/dtos/ICreatePointDTO';

import Point from '../entities/Point';

class PointsRepository implements IPointsRepository {
  private ormRepository: Repository<Point>;

  constructor() {
    this.ormRepository = getRepository(Point);
  }

  public async findAllPoints(filters: IFiltersDTO): Promise<Point[]> {
    const { city, uf, items } = filters;

    // Cria query listando todos pontos de coleta, sem filtros, e carrega o relacionamento
    let pointQuery = this.ormRepository
      .createQueryBuilder('point')
      .leftJoin('point.point_items', 'items');

    // Filtra pontos de coleta caso tenha sido passado city via query params
    if (city) {
      pointQuery = pointQuery.andWhere("point.city ILIKE '%' || :city || '%'", {
        city: `%${city}%`,
      });
    }

    // Filtra pontos de coleta caso tenha sido passado uf via query params
    if (uf) {
      pointQuery = pointQuery.andWhere("point.uf ILIKE '%' || :uf || '%'", {
        uf: `%${uf}%`,
      });
    }

    // Filtra pontos de coleta caso tenha sido passado ids dos items relacionados via query params
    if (items) {
      pointQuery = pointQuery.andWhere('items.item_id IN (:...items)', {
        items,
      });
    }

    // Executa query
    const points = pointQuery.getMany();

    return points;
  }

  public async findById(id: string): Promise<Point | undefined> {
    const user = await this.ormRepository.findOne(id);

    return user;
  }

  public async findByEmail(email: string): Promise<Point | undefined> {
    const point = await this.ormRepository.findOne({ where: { email } });

    return point;
  }

  public async create(pointData: ICreatePointDTO): Promise<Point> {
    const point = this.ormRepository.create(pointData);

    await this.ormRepository.save(point);

    return point;
  }

  public async save(point: Point): Promise<Point> {
    return this.ormRepository.save(point);
  }
}

export default PointsRepository;
