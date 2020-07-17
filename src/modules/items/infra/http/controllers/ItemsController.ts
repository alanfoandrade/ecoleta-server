import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import ListItemsService from '@modules/items/services/ListItemsService';

export default class ItemsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listItems = container.resolve(ListItemsService);

    const items = await listItems.execute();

    return response.json(classToClass(items));
  }
}
