export interface IProducts {
  id: string;
  title: string;
  price: number;
  description: string;
  category: { hot: boolean; cold: boolean };
  image: string;
  rating: { rate: number };
}

export interface ProductState {
  products: IProducts[];
  isLoading: boolean;
  error: null | string;
}

// {"id":1,"title":"Vanilla Late","price":5.12,"description":"As the most popular coffee drink out there, the latte is comprised of a shot of espresso and steamed milk with just a touch of foam. It can be ordered plain or with a flavor shot of anything from vanilla to pumpkin spice.","category":{"hot":true,"cold":false},"image":"https://i.ibb.co/DMYsNyM/cup1.jpg","rating":{"rate":4.5}}
