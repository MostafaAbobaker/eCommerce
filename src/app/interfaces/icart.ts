import { IProduct } from "./iproduct";

export interface ICart {
  _id:string,
  totalCartPrice:number,
  products: IProductCart[]
}

interface IProductCart {
  count:number,
  price:number,
  product:IProduct
}
