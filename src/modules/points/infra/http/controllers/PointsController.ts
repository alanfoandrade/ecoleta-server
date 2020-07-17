import { Request, Response } from 'express';

import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import ListPointsService from '@modules/points/services/ListPointsService';
import CreatePointService from '@modules/points/services/CreatePointService';
import ShowPointService from '@modules/points/services/ShowPointService';

export default class PointsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { city, uf, items } = request.query;

    const listPoints = container.resolve(ListPointsService);

    const parsedItems = String(items)
      .split(',')
      .map((item) => item.trim());

    const filtersObject = {
      city: city && String(city),
      uf: uf && String(uf),
      items: (items && parsedItems) || undefined,
    };

    const points = await listPoints.execute(filtersObject);

    return response.json(points);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      email,
      phone,
      latitude,
      longitude,
      city,
      uf,
      items,
    } = request.body;

    const createPoint = container.resolve(CreatePointService);

    const point = await createPoint.execute({
      name,
      email,
      phone,
      latitude,
      longitude,
      city,
      uf,
      items,
    });

    return response.json(classToClass(point));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showPoint = container.resolve(ShowPointService);

    const point = await showPoint.execute(id);

    return response.json(point);
  }
}
