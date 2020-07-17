import { injectable, inject } from 'tsyringe';

import Item from '../infra/typeorm/entities/Item';
import IItemsRepository from '../repositories/IItemsRepository';

@injectable()
class ListItemsService {
  constructor(
    @inject('ItemsRepository')
    private itemsRepository: IItemsRepository,
  ) {}

  public async execute(): Promise<Item[]> {
    const items = await this.itemsRepository.findAllPoints();

    return items;
  }
}

export default ListItemsService;
