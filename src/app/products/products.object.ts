export class Product{
    id: any;
    name: string;
    price: any;
    imageUrl: string;
    description: string;

    constructor(){
        this.id = null;
        this.name = '';
        this.price = null;
        this.imageUrl = '';
        this.description = '';

    }
}


export const PRODUCTS: Product[ ] = [
    { id: 1, name: 'Nike', price: 200, imageUrl: '../../assets/images/shoe1.jpg', description: 'some text some text some text some text'},
    { id: 2, name: 'Puma', price: 300, imageUrl: '../../assets/images/pumaa.png', description: 'my text my text my text my text my text'},
    { id: 3, name: 'Skechers', price: 500, imageUrl: '../../assets/images/sketchers.png', description: 'this product this product this product'}
];
