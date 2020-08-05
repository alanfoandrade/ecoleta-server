import { injectable, inject } from 'tsyringe';
import AppError from '../../../shared/errors/AppError';

import Point from '../infra/typeorm/entities/Point';
import IPointsRepository from '../repositories/IPointsRepository';

interface IRequest {
  name: string;
  email: string;
  phone: string;
  latitude: number;
  longitude: number;
  city: string;
  uf: string;
  image: string;
  items: string;
}

@injectable()
class CreatePointsService {
  constructor(
    @inject('PointsRepository')
    private pointsRepository: IPointsRepository,
  ) {}

  public async execute(pointData: IRequest): Promise<Point> {
    const checkPointExists = await this.pointsRepository.findByEmail(
      pointData.email,
    );

    if (checkPointExists) {
      throw new AppError('Email address already used.', 400);
    }

    const pointItems = pointData.items
      .split(',')
      .map((item_id) => item_id.trim())
      .map((item_id) => ({ item_id }));

    const point = await this.pointsRepository.create({
      ...pointData,
      point_items: pointItems,
    });

    return point;
  }
}

export default CreatePointsService;
