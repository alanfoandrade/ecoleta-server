import { injectable, inject } from 'tsyringe';

import Point from '../infra/typeorm/entities/Point';
import IPointsRepository from '../repositories/IPointsRepository';

interface IRequest {
  city?: string;
  uf?: string;
  items?: string[];
}

@injectable()
class ListPointsService {
  constructor(
    @inject('PointsRepository')
    private pointsRepository: IPointsRepository,
  ) {}

  public async execute({ city, uf, items }: IRequest): Promise<Point[]> {
    const points = await this.pointsRepository.findAllPoints({
      city,
      uf,
      items,
    });

    return points;
  }
}

export default ListPointsService;
