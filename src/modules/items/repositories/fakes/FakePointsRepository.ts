import IItemsRepository from '../IItemsRepository';

import Item from '../../infra/typeorm/entities/Item';

class FakeItemsRepository implements IItemsRepository {
  private items: Item[] = [];

  public async findAllPoints(): Promise<Item[]> {
    const { items } = this;

    return items;
  }
}

export default FakeItemsRepository;
