import  cartsModel  from "../models/cartsModel.js";

export class CartMongo{
    constructor(){
        this.model = cartsModel;
    };

    async get(){
        try {
            return this.model.find();
        } catch (error) {
            console.log(error.message);
            throw new Error("Hubo un error al obtener los carritos")
        }
    };

    async post(){
        try {
            const cartCreated = await cartsModel.create({});
            return cartCreated;
        } catch (error) {
            console.log(error.message);
            throw new Error("Hubo un error al crear el carrito")
        }
    };

    async put(cartId, productId, quantity){
        try {
            const cart = await this.model.findById(cartId);
            cart.products.push({id:productId,quantity:quantity});
            cart.save();
            
            return cart;
        } catch (error) {
            console.log(error.message);
            throw new Error("Hubo un error al cargar el producto en el carrito")
        }
    };

}