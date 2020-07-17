import { injectable, inject } from 'tsyringe';

import AppError from '../../../shared/errors/AppError';

import Point from '../infra/typeorm/entities/Point';
import IPointsRepository from '../repositories/IPointsRepository';

@injectable()
class ShowPointsService {
  constructor(
    @inject('PointsRepository')
    private pointsRepository: IPointsRepository,
  ) {}

  public async execute(id: string): Promise<Point> {
    const point = await this.pointsRepository.findById(id);

    if (!point) {
      throw new AppError('Point not found.', 400);
    }

    return point;
  }
}

export default ShowPointsService;
