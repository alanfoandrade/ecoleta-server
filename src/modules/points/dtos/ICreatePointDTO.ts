interface IPointItem {
  item_id: string;
}

export default interface ICreatePointDTO {
  name: string;
  email: string;
  phone: string;
  image: string;
  latitude: number;
  longitude: number;
  city: string;
  uf: string;
  point_items: IPointItem[];
}
