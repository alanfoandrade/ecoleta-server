import IItemsRepository from '@modules/items/repositories/IItemsRepository';
import { Repository, getRepository } from 'typeorm';

import Item from '../entities/Item';

class ItemsRepository implements IItemsRepository {
  private ormRepository: Repository<Item>;

  constructor() {
    this.ormRepository = getRepository(Item);
  }

  public async findAllPoints(): Promise<Item[]> {
    const items = await this.ormRepository.find();

    return items;
  }
}

export default ItemsRepository;
