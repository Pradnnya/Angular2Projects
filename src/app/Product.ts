export default class Product {
    id: number;
    name: string;
    price: number;
    imgPath: String;
    category: string;
    constructor(id: number, name: string, price: number, imgPath: String, category: string) {
        this.id = id;
        this.name = name;
        this.price =  price;
        this.imgPath = imgPath;
        this.category = category;
    }

}
