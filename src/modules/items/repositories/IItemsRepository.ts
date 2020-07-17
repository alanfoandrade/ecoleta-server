import Item from '../infra/typeorm/entities/Item';

export default interface IItemRepository {
  findAllPoints(): Promise<Item[]>;
}
